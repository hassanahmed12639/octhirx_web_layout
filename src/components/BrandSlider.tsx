'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

/**
 * Brand Slider Component
 * 
 * Features:
 * - Infinite seamless horizontal scroll loop
 * - Continuous movement (no pause on hover)
 * - Grayscale to color transition on hover
 * - Subtle scale-up on hover
 * - Left & right gradient fade masks
 * - Fully responsive
 * - Respects prefers-reduced-motion
 * 
 * Infinite Loop Logic:
 * The component duplicates the brand array internally to create a seamless loop.
 * When the animation reaches the halfway point (end of first set), it instantly
 * resets to the start position without visible jump, creating the illusion of
 * infinite scrolling. This is achieved by monitoring the x position and resetting
 * it when it crosses the threshold.
 */

interface Brand {
  id: number;
  name: string;
  icon?: React.ReactNode;
  specialStyle?: React.ReactNode;
}

// Brand data matching the design exactly
const brands: Brand[] = [
  { 
    id: 1, 
    name: 'amble',
    specialStyle: (
      <span className="font-serif font-light text-black relative overflow-hidden inline-block" style={{ paddingLeft: '0.5em' }}>
        <span className="relative" style={{ left: '-0.3em' }}>amble</span>
      </span>
    )
  },
  { 
    id: 2, 
    name: 'teero',
    specialStyle: (
      <span className="font-bold text-black">
        teer<span className="relative inline-block">
          o
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border border-black rounded-full -translate-y-1 translate-x-1"></span>
        </span>
      </span>
    )
  },
  { 
    id: 3, 
    name: 'Deloitte.',
    specialStyle: (
      <span className="font-bold text-black">
        Deloitte<span className="text-[#00d26a]">.</span>
      </span>
    )
  },
  { 
    id: 4, 
    name: 'alfan',
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="mr-2 flex-shrink-0">
        <path d="M7 5L13 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: 5, 
    name: 'samurai',
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="mr-2 flex-shrink-0">
        <path d="M10 4C10 4 6 6 6 10C6 14 10 16 10 16M10 4C10 4 14 6 14 10C14 14 10 16 10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="9" r="1" fill="currentColor"/>
        <circle cx="12" cy="9" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    id: 6, 
    name: 'amazon',
    specialStyle: (
      <span className="font-normal text-black relative inline-block">
        a<span className="absolute bottom-0 left-0 w-full h-2 overflow-hidden pointer-events-none">
          <svg width="100%" height="8" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0 4 Q25 0, 50 4 T100 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </span>mazon
      </span>
    )
  },
  { 
    id: 7, 
    name: 'Notice',
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="mr-2 flex-shrink-0">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 2L10 6M10 14L10 18M2 10L6 10M14 10L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 8, 
    name: 'taskade',
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="mr-2 flex-shrink-0">
        <rect x="4" y="6" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    id: 9, 
    name: 'outshifter',
    icon: (
      <svg width="32" height="32" viewBox="0 0 20 20" fill="none" className="mr-2 flex-shrink-0">
        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  { 
    id: 10, 
    name: 'teero',
    specialStyle: (
      <span className="font-bold text-black">
        teer<span className="relative inline-block">
          o
          <span className="absolute top-0 right-0 w-1.5 h-1.5 border border-black rounded-full -translate-y-1 translate-x-1"></span>
        </span>
      </span>
    )
  },
];

export default function BrandSlider() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && animationRef.current) {
        animationRef.current.stop();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);


  // Calculate dimensions and setup animation
  useEffect(() => {
    if (!trackRef.current || prefersReducedMotion) {
      x.set(0);
      return;
    }

    const track = trackRef.current;
    
    const calculateAndAnimate = () => {
      const items = track.querySelectorAll('[data-brand-item]');
      
      if (items.length === 0) return;

      // Calculate actual item width from first item (responsive)
      const firstItem = items[0] as HTMLElement;
      const itemRect = firstItem.getBoundingClientRect();
      const itemWidth = itemRect.width;
      
      // Calculate gap from computed styles (responsive)
      const computedGap = window.getComputedStyle(track).gap;
      const gapValue = parseFloat(computedGap) || 64; // fallback to 4rem (64px)
      
      // Total width per item including gap
      const totalItemWidth = itemWidth + gapValue;
      const singleSetWidth = brands.length * totalItemWidth;
      singleSetWidthRef.current = singleSetWidth;
      
      // Set track width to accommodate duplicated content
      track.style.width = `${singleSetWidth * 2}px`;

      // Animation duration for slow, elegant movement
      // Speed: ~35px per second for smoother premium feel
      const duration = singleSetWidth / 35;

      // Start infinite animation with seamless loop
      const startAnimation = () => {
        if (animationRef.current) {
          animationRef.current.stop();
        }

        // Reset to start position
        x.set(0);

        // Use a callback-based approach for seamless looping
        const animateLoop = () => {
          if (prefersReducedMotion) return;
          
          animationRef.current = animate(x, -singleSetWidth, {
            duration: duration,
            ease: 'linear',
            onUpdate: (latest) => {
              // Seamlessly reset when reaching halfway point
              if (latest <= -singleSetWidth) {
                x.set(latest + singleSetWidth);
              }
            },
            onComplete: () => {
              // Seamlessly reset and restart
              x.set(0);
              if (!prefersReducedMotion) {
                animateLoop();
              }
            },
          });
        };

        animateLoop();
      };

      startAnimation();
    };

    // Initial calculation after a brief delay to ensure layout is complete
    const timeoutId = setTimeout(calculateAndAnimate, 100);

    // Handle window resize
    const handleResize = () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
      x.set(0);
      setTimeout(calculateAndAnimate, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        animationRef.current.stop();
      }
      x.set(0);
    };
  }, [x, prefersReducedMotion]);

  // Duplicate brands for seamless infinite loop
  const brandsToRender = [...brands, ...brands];

  return (
    <section 
      className="relative w-full bg-white overflow-hidden"
      style={{ paddingTop: 0, paddingBottom: 0, height: '107px' }}
    >
      {/* Left gradient fade mask */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      />
      
      {/* Right gradient fade mask */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        }}
      />

      <div 
        ref={containerRef}
        className="relative w-full"
      >
        <motion.div
          ref={trackRef}
          className="flex items-center gap-16 md:gap-20 lg:gap-24 h-[70px]"
          style={{
            x,
            willChange: 'transform',
            boxSizing: 'content-box',
          }}
        >
          {brandsToRender.map((brand, index) => (
            <BrandLogo
              key={`${brand.id}-${index}`}
              brand={brand}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface BrandLogoProps {
  brand: Brand;
  prefersReducedMotion: boolean;
}

function BrandLogo({ brand, prefersReducedMotion }: BrandLogoProps) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <motion.div
      data-brand-item
      className="flex-shrink-0 flex items-center justify-center relative cursor-default w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-28 mt-3 mb-3 pt-3 pb-3"
      onMouseEnter={() => setIsLogoHovered(true)}
      onMouseLeave={() => setIsLogoHovered(false)}
      animate={{
        scale: isLogoHovered && !prefersReducedMotion ? 1.08 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
    >
      <motion.div
        className="flex items-center justify-center text-black whitespace-nowrap"
        animate={{
          filter: isLogoHovered && !prefersReducedMotion
            ? 'grayscale(0%) brightness(1)' 
            : 'grayscale(100%) brightness(0.6)',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
        style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
        }}
      >
        {brand.icon && (
          <span className="scale-100 md:scale-110 lg:scale-125">
            {brand.icon}
          </span>
        )}
        {brand.specialStyle ? (
          brand.specialStyle
        ) : (
          <span className="font-medium">{brand.name}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

