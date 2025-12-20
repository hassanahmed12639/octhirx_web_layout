'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GridItem {
  id: number;
  src: string;
  alt: string;
  tag: string;
  title: string;
  width: number;
  height: number;
  top: number;
  left: number;
  isMaskGroup?: boolean;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    src: '/fc802b82357405.5c.jpg',
    alt: 'Lychee Product',
    tag: 'Branding',
    title: 'Supplement Product Design',
    width: 472,
    height: 472,
    top: 240,
    left: -113,
  },
  {
    id: 2,
    src: '/b4400582357759.5d1b3c1.jpg',
    alt: 'Supplement Product',
    tag: 'Product',
    title: 'Supplement Product Design',
    width: 656,
    height: 472,
    top: 240,
    left: 364,
  },
  {
    id: 3,
    src: '/a75642131476081.61959ac.jpg',
    alt: 'Athletic Performance',
    tag: 'Campaign',
    title: 'Dance & Performance Visual',
    width: 629,
    height: 472,
    top: 240,
    left: 1025,
  },
  {
    id: 4,
    src: '/mask-group-1.jpg',
    alt: 'Mask Group 1',
    tag: 'Branding',
    title: 'Mask Group',
    width: 293,
    height: 472,
    top: 240,
    left: 1659,
    isMaskGroup: true,
  },
  {
    id: 5,
    src: '/b8779982361081.5d1b4e2.jpg',
    alt: 'Wellness Product',
    tag: 'Lifestyle',
    title: 'Pet Wellness Campaign',
    width: 822,
    height: 555,
    top: 717,
    left: 0,
  },
  {
    id: 6,
    src: '/80875282357759.5d1b3c1c.jpg',
    alt: 'CBD Oil Bottles',
    tag: 'Product',
    title: 'CBD Oil Bottles',
    width: 618,
    height: 393,
    top: 717,
    left: 827,
  },
  {
    id: 7,
    src: '/mask-group-2.jpg',
    alt: 'Mask Group 2',
    tag: 'Product',
    title: 'Mask Group',
    width: 482,
    height: 556,
    top: 717,
    left: 1450,
    isMaskGroup: true,
  },
  {
    id: 8,
    src: '/image-8.jpg',
    alt: 'Product Image 8',
    tag: 'Product',
    title: 'Product Image',
    width: 392,
    height: 393,
    top: 1277,
    left: -52,
  },
  {
    id: 9,
    src: '/mask-group-3.jpg',
    alt: 'Mask Group 3',
    tag: 'Product',
    title: 'Mask Group',
    width: 477,
    height: 393,
    top: 1277,
    left: 345,
    isMaskGroup: true,
  },
  {
    id: 10,
    src: '/mask-group-4.jpg',
    alt: 'Mask Group 4',
    tag: 'Product',
    title: 'Mask Group',
    width: 618,
    height: 555,
    top: 1115,
    left: 827,
    isMaskGroup: true,
  },
  {
    id: 11,
    src: '/mask-group-5.jpg',
    alt: 'Mask Group 5',
    tag: 'Product',
    title: 'Mask Group',
    width: 473,
    height: 393,
    top: 1277,
    left: 1445,
    isMaskGroup: true,
  },
];

export default function ShowcaseGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundDeco1Ref = useRef<HTMLDivElement>(null);
  const backgroundDeco2Ref = useRef<HTMLDivElement>(null);
  const backgroundDeco3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLElement[];
    const overlays = overlayRefs.current.filter(Boolean) as HTMLElement[];
    const deco1 = backgroundDeco1Ref.current;
    const deco2 = backgroundDeco2Ref.current;
    const deco3 = backgroundDeco3Ref.current;

    if (!section || !header || items.length === 0) return;

    // Set initial states for animations
    gsap.set(header, { opacity: 0, x: -40 });
    
    // Set initial states for grid items with alternating directions
    items.forEach((item, index) => {
      const isEven = index % 2 === 0;
      const direction = isEven ? -30 : 30; // Alternate left/right
      gsap.set(item, { opacity: 0, y: 30, x: direction });
    });

    // Responsive start position (earlier on mobile for better UX)
    const isMobile = window.innerWidth < 768;
    const headerStart = isMobile ? 'top 90%' : 'top 85%';
    const itemStart = isMobile ? 'top 95%' : 'top 90%';
    const parallaxAmount = isMobile ? 15 : 25; // Reduced on mobile
    const backgroundParallaxAmount = isMobile ? 30 : 50; // Slow parallax for background elements
    const floatAmount = isMobile ? 8 : 12; // Subtle floating motion

    // Animate header: fade in + slide from left
    const headerTl = gsap.to(header, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: headerStart,
        end: 'bottom top',
        toggleActions: 'play none none none',
      },
    });

    // Animate grid items: staggered fade in + slide from different directions
    const itemTriggers = items.map((item, index) => {
      return gsap.to(item, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.08, // Subtle stagger
        force3D: true,
        scrollTrigger: {
          trigger: item,
          start: itemStart,
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
      });
    });

    // Subtle floating motion for grid items on scroll
    const floatingTriggers = items.map((item, index) => {
      if (!item) return null;
      
      const floatDirection = index % 2 === 0 ? 1 : -1;
      const floatRotation = (index % 3) * 0.5; // Very subtle rotation
      
      return gsap.to(item, {
        y: floatAmount * floatDirection * 0.3,
        rotation: floatRotation,
        scale: 1.01,
        ease: 'power1.out',
        force3D: true,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1.2, // Smooth floating motion
        },
      });
    }).filter(Boolean);

    // Background decorative elements - slow parallax movement
    const backgroundDecos = [deco1, deco2, deco3].filter(Boolean) as HTMLElement[];
    backgroundDecos.forEach((deco, index) => {
      if (!deco) return;
      
      // Set initial position
      gsap.set(deco, { 
        y: -backgroundParallaxAmount * (index + 1) * 0.3,
        rotation: index * 15,
        force3D: true,
      });
      
      // Slow parallax movement
      gsap.to(deco, {
        y: backgroundParallaxAmount * (index + 1) * 0.3,
        rotation: index * 15 + (index % 2 === 0 ? 5 : -5),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5, // Slower scrubbing for background elements
        },
      });
    });

    // Parallax effects for background images - slow downward movement on scroll
    // Set initial state for images (slightly above to allow parallax down)
    images.forEach((image) => {
      if (image) {
        gsap.set(image, { 
          y: -parallaxAmount * 0.5,
          force3D: true,
        });
      }
    });
    
    const parallaxTriggers = images.map((image, index) => {
      if (!image || !items[index]) return null;
      
      // Enhanced parallax: image moves down slower than scroll, creating depth effect
      return gsap.to(image, {
        y: parallaxAmount * 0.5, // Move from -parallaxAmount*0.5 to +parallaxAmount*0.5
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: items[index],
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing
        },
      });
    }).filter(Boolean);

    // Subtle floating/scale effects for overlay elements
    const overlayTriggers = overlays.map((overlay, index) => {
      if (!overlay) return null;
      
      const item = items[index];
      if (!item) return null;

      // Enhanced subtle scale and float effect on scroll (only when item is in viewport)
      return gsap.to(overlay, {
        scale: isMobile ? 1.01 : 1.02, // Reduced on mobile
        y: isMobile ? -3 : -5, // Reduced on mobile
        ease: 'power1.out',
        force3D: true,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1, // Smooth scrubbing
        },
      });
    }).filter(Boolean);

    // Cleanup
    return () => {
      if (headerTl?.scrollTrigger) {
        headerTl.scrollTrigger.kill();
      }
      itemTriggers.forEach((trigger) => {
        if (trigger?.scrollTrigger) {
          trigger.scrollTrigger.kill();
        }
      });
      floatingTriggers.forEach((trigger) => {
        if (trigger?.scrollTrigger) {
          trigger.scrollTrigger.kill();
        }
      });
      parallaxTriggers.forEach((trigger) => {
        if (trigger?.scrollTrigger) {
          trigger.scrollTrigger.kill();
        }
      });
      overlayTriggers.forEach((trigger) => {
        if (trigger?.scrollTrigger) {
          trigger.scrollTrigger.kill();
        }
      });
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={sectionRef} className="showcase-section relative bg-[#0b0b0e] py-20 px-[6vw] overflow-hidden" style={{ minHeight: '2200px' }}>
      {/* Background decorative elements with parallax */}
      <div
        ref={backgroundDeco1Ref}
        className="showcase-bg-deco showcase-bg-deco-1"
        aria-hidden="true"
      />
      <div
        ref={backgroundDeco2Ref}
        className="showcase-bg-deco showcase-bg-deco-2"
        aria-hidden="true"
      />
      <div
        ref={backgroundDeco3Ref}
        className="showcase-bg-deco showcase-bg-deco-3"
        aria-hidden="true"
      />
      
      <div ref={headerRef} className="showcase-section-header relative z-10 mb-0 max-w-[700px]">
        <h2 className="mb-3 text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-white md:text-[32px]">
          Featured Work
        </h2>
        <p className="text-[#b5b5c3] text-[15px] leading-[1.6]">
          A curated selection of branding, product, lifestyle, and campaign visuals.
        </p>
      </div>

      {gridItems.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className="showcase-grid-item relative z-10"
          style={{
            position: 'absolute',
            width: `${item.width}px`,
            height: `${item.height}px`,
            top: `${item.top}px`,
            left: `${item.left}px`,
          }}
        >
          <div
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className="showcase-image-wrapper"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes={`${item.width}px`}
            />
          </div>
          
          {/* Overlay content */}
          <div
            ref={(el) => {
              overlayRefs.current[index] = el;
            }}
            className="showcase-overlay"
          >
            <span className="showcase-tag">{item.tag}</span>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}
