'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Store Lenis instance globally for ScrollTrigger sync
let lenisInstance: Lenis | null = null;
let currentScrollTop = 0;

export function useLenis() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis();
    lenisInstance = lenis;

    // Track scroll position
    const handleScroll = ({ scroll, limit, velocity, direction, progress }: any) => {
      currentScrollTop = scroll;
      ScrollTrigger.update();
    };
    
    lenis.on('scroll', handleScroll);

    // Connect ScrollTrigger to Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: false });
        }
        return currentScrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? 'transform' : 'fixed',
    });

    // Refresh ScrollTrigger after Lenis initialization
    ScrollTrigger.refresh();

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      lenisInstance = null;
      currentScrollTop = 0;
      ScrollTrigger.refresh();
    };
  }, []);
}

export function getLenisInstance(): Lenis | null {
  return lenisInstance;
}

