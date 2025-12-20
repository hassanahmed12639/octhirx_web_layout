'use client';

import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/src/components/Navbar';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check for reduced motion preference
const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Heading text - split into words for animation
const HEADING_WORDS = [
  'Empowering', 'Brands',
  'with', 'Visual', 'Excellence'
];

// Variants for word-by-word animation
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.1,
      ease: [0.25, 0.1, 0.25, 1] as any,
    },
  }),
};

// Container variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgBlobsRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);
  const animatedLinesRef = useRef<HTMLDivElement>(null);
  
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Transform scroll progress for parallax effects
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const buttonsY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgParallax = useTransform(scrollYProgress, [0, 1], [0, 50]);
  
  // Opacity transforms for scroll-based fade
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.8, 0]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.6, 0]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.6, 0]);
  
  // Scale transforms for scroll-based scale down
  const headingScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);
  const buttonsScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Smooth spring config for parallax
  const smoothHeadingY = useSpring(headingY, { stiffness: 100, damping: 30 });
  const smoothSubtitleY = useSpring(subtitleY, { stiffness: 100, damping: 30 });
  const smoothButtonsY = useSpring(buttonsY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
    const isReduced = prefersReducedMotion();
    setReducedMotion(isReduced);

    // Set up GSAP ScrollTrigger animations for enhanced scroll effects
    if (!isReduced && sectionRef.current) {
      const ctx = gsap.context(() => {
        // Subtle parallax for background blobs container
        if (bgBlobsRef.current) {
          gsap.to(bgBlobsRef.current, {
            y: 80,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          });
        }

        // Scroll-based rotation and scale for blob 1
        if (blob1Ref.current) {
          gsap.to(blob1Ref.current, {
            rotation: 180,
            scale: 1.3,
            opacity: 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }

        // Scroll-based rotation (reverse) and scale for blob 2
        if (blob2Ref.current) {
          gsap.to(blob2Ref.current, {
            rotation: -150,
            scale: 1.4,
            opacity: 0.04,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }

        // Scroll-based rotation and scale for blob 3
        if (blob3Ref.current) {
          gsap.to(blob3Ref.current, {
            rotation: 120,
            scale: 1.25,
            opacity: 0.03,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }

        // Scroll-based opacity fade for floating particles
        if (particlesRef.current) {
          gsap.to(particlesRef.current, {
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'center top',
              scrub: 1,
            },
          });
        }

        // Scroll-based blur and opacity for noise overlay (subtle effect)
        if (noiseRef.current) {
          gsap.to(noiseRef.current, {
            opacity: 0.025,
            filter: 'blur(2px)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        // Add scroll-based scale animation to hero content container (subtle zoom out)
        const contentContainer = sectionRef.current?.querySelector('[class*="max-w-5xl"]');
        if (contentContainer) {
          gsap.to(contentContainer, {
            scale: 0.98,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        }

        // Scroll-based animation for animated lines (draw effect)
        if (animatedLinesRef.current) {
          const horizontalLines = animatedLinesRef.current.querySelectorAll('.animated-line-horizontal');
          const verticalLines = animatedLinesRef.current.querySelectorAll('.animated-line-vertical');
          
          // Animate horizontal lines with scaleX
          horizontalLines.forEach((line, index) => {
            gsap.fromTo(
              line,
              {
                scaleX: 0,
                opacity: 0,
              },
              {
                scaleX: 1,
                opacity: 0.1,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top top',
                  end: 'center top',
                  scrub: 1,
                },
                delay: index * 0.1,
              }
            );

            gsap.to(line, {
              opacity: 0,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center top',
                end: 'bottom top',
                scrub: 1,
              },
            });
          });

          // Animate vertical lines with scaleY
          verticalLines.forEach((line, index) => {
            gsap.fromTo(
              line,
              {
                scaleY: 0,
                opacity: 0,
              },
              {
                scaleY: 1,
                opacity: 0.1,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: 'top top',
                  end: 'center top',
                  scrub: 1,
                },
                delay: index * 0.1,
              }
            );

            gsap.to(line, {
              opacity: 0,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'center top',
                end: 'bottom top',
                scrub: 1,
              },
            });
          });
        }
      });

      return () => ctx.revert();
    }
  }, []);

  // Button hover animation variants
  const buttonVariants: Variants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 25,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Decorative blob animation
  const blobVariants: Variants = {
    animate: {
      x: [0, 50, 0],
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
    },
  };

  const blob2Variants: Variants = {
    animate: {
      x: [0, -40, 0],
      y: [0, 40, 0],
      scale: [1, 0.9, 1],
    },
  };

  const blob3Variants: Variants = {
    animate: {
      x: [0, 30, 0],
      y: [0, -50, 0],
      scale: [1, 1.15, 1],
    },
  };

  // Floating particles animation
  const particleVariants = (delay: number): Variants => ({
    animate: {
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
    },
  });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Decorative Background Elements */}
      <div ref={bgBlobsRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradient Blobs */}
        {!reducedMotion && (
          <>
            <motion.div
              ref={blob1Ref}
              variants={blobVariants}
              initial="animate"
              animate="animate"
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-[0.03] blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(116, 192, 252, 0.6), transparent 70%)',
                transformOrigin: 'center center',
              }}
            />
            <motion.div
              ref={blob2Ref}
              variants={blob2Variants}
              initial="animate"
              animate="animate"
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(255, 135, 135, 0.6), transparent 70%)',
                transformOrigin: 'center center',
              }}
            />
            <motion.div
              ref={blob3Ref}
              variants={blob3Variants}
              initial="animate"
              animate="animate"
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full opacity-[0.025] blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(105, 219, 124, 0.5), transparent 70%)',
                transformOrigin: 'center center',
              }}
            />
          </>
        )}

        {/* Noise Grain Overlay */}
        <div 
          ref={noiseRef}
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        {/* Floating Light Particles */}
        {!reducedMotion && (
          <div ref={particlesRef} className="absolute inset-0">
            {[...Array(6)].map((_, i) => {
              const delay = i * 0.5;
              return (
                <motion.div
                  key={i}
                  variants={particleVariants(delay)}
                  initial="animate"
                  animate="animate"
                  transition={{
                    duration: 4 + delay,
                    repeat: Infinity,
                    ease: [0.42, 0, 0.58, 1],
                    delay: delay,
                  }}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 30}%`,
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Animated Lines (Scroll-triggered draw effect) */}
        {!reducedMotion && (
          <div ref={animatedLinesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Horizontal lines */}
            <div 
              className="animated-line animated-line-horizontal absolute top-1/4 left-0 h-px w-full origin-left"
              style={{
                background: 'linear-gradient(90deg, rgba(116, 192, 252, 0.3), transparent)',
              }}
            />
            <div 
              className="animated-line animated-line-horizontal absolute top-3/4 left-0 h-px w-full origin-left"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 135, 135, 0.3), transparent)',
              }}
            />
            {/* Vertical lines */}
            <div 
              className="animated-line animated-line-vertical absolute top-0 left-1/4 h-full w-px origin-top"
              style={{
                background: 'linear-gradient(180deg, rgba(105, 219, 124, 0.2), transparent)',
              }}
            />
            <div 
              className="animated-line animated-line-vertical absolute top-0 right-1/4 h-full w-px origin-top"
              style={{
                background: 'linear-gradient(180deg, rgba(116, 192, 252, 0.2), transparent)',
              }}
            />
          </div>
        )}
      </div>

      {/* Header Navigation */}
      <Navbar />
      
      {/* Hero content */}
      <motion.div 
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16"
        style={{
          y: reducedMotion ? undefined : bgParallax,
        }}
      >
        <motion.div 
          className="w-full max-w-5xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? 'visible' : 'hidden'}
        >
          {/* Main headline with word-by-word animation */}
          <motion.h1
            ref={headingRef}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              y: reducedMotion ? undefined : smoothHeadingY,
              opacity: reducedMotion ? 1 : headingOpacity,
              scale: reducedMotion ? 1 : headingScale,
            }}
          >
            <span className="inline-flex flex-wrap justify-center gap-x-3 gap-y-2">
              {HEADING_WORDS.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  className="hero-gradient-text inline-block"
                  style={{
                    willChange: reducedMotion ? 'auto' : 'transform, opacity, filter',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          {/* Sub-headline with fade + upward motion */}
          <motion.p
            ref={subtitleRef}
            className="hero-subheading mx-auto mb-10 max-w-2xl text-base leading-relaxed sm:text-lg md:mb-12 md:text-xl"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={mounted ? { 
              opacity: 1, 
              y: 0, 
              filter: 'blur(0px)',
            } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            transition={{
              duration: 1,
              delay: reducedMotion ? 0 : 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              y: reducedMotion ? undefined : smoothSubtitleY,
              opacity: reducedMotion ? 1 : subtitleOpacity,
              willChange: reducedMotion ? 'auto' : 'transform, opacity',
            }}
          >
            Delivering fully functional websites, mobile apps, eCommerce platforms, and digital solutions is our specialty.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            ref={buttonsRef}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: reducedMotion ? 0 : 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              y: reducedMotion ? undefined : smoothButtonsY,
              opacity: reducedMotion ? 1 : buttonsOpacity,
              scale: reducedMotion ? 1 : buttonsScale,
              willChange: reducedMotion ? 'auto' : 'transform, opacity',
            }}
          >
            {/* Get Quote Button with enhanced hover effects */}
            <motion.div
              className="hero-button-primary-wrapper group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button 
                className="hero-button-primary relative h-12 w-full overflow-hidden rounded-lg px-8 text-sm font-medium text-white shadow-lg transition-all duration-300 sm:h-14 sm:px-10 sm:text-base"
                whileHover={{
                  boxShadow: '0 12px 32px rgba(255, 135, 135, 0.35)',
                }}
              >
                <span className="relative z-10">Get Quote-For Free</span>
                <motion.div
                  className="absolute inset-0 opacity-0"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.4), transparent)',
                  }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
            
            {/* Schedule a Call Button with enhanced hover effects */}
            <motion.div
              className="hero-button-wrapper group"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.button 
                className="hero-button-secondary relative h-12 w-full overflow-hidden bg-white px-8 text-sm font-medium text-black transition-all duration-300 sm:h-14 sm:px-10 sm:text-base"
                whileHover={{
                  boxShadow: '0 8px 24px rgba(116, 192, 252, 0.3)',
                }}
              >
                <span className="relative z-10">
                  Schedule a Call <span className="ml-1">&gt;</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0"
                  whileHover={{ opacity: 0.08 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
