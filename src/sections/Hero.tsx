'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Animated gradient background */}
      <div 
        ref={backgroundRef}
        className="hero-gradient-background absolute inset-0 will-change-[background-position]"
        style={{
          background: `
            linear-gradient(
              135deg,
              #fefefe 0%,
              #fff5f7 15%,
              #f0f9ff 30%,
              #f0fdf4 45%,
              #fff5f7 60%,
              #f0f9ff 75%,
              #f0fdf4 90%,
              #fefefe 100%
            )
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientShift 30s ease infinite',
        }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl text-center">
          {/* Main headline with animated gradient fill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6"
          >
            <motion.h1 
              className="hero-gradient-text mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                Empowering Brands
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1,
                  delay: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                with Visual Excellence
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Sub-headline with fade + upward motion and subtle gradient */}
          <motion.p 
            className="hero-subheading mx-auto mb-10 max-w-2xl text-base leading-relaxed sm:text-lg md:mb-12 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.7,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            Delivering fully functional websites, mobile apps, eCommerce platforms, and digital solutions is our specialty.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.9,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {/* Get Quote Button with animated gradient background */}
            <motion.div
              className="hero-button-primary-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <motion.button 
                className="hero-button-primary group relative h-12 w-full overflow-hidden rounded-lg px-8 text-sm font-medium text-white shadow-lg transition-shadow duration-300 sm:h-14 sm:px-10 sm:text-base"
              >
                <span className="relative z-10">Get Quote-For Free</span>
                <motion.div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.3), transparent)',
                  }}
                  initial={false}
                  whileHover={{ opacity: 0.3 }}
                />
              </motion.button>
            </motion.div>
            
            {/* Schedule a Call Button with animated gradient border */}
            <motion.div
              className="hero-button-wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              <button 
                className="hero-button-secondary group relative h-12 w-full overflow-hidden bg-white px-8 text-sm font-medium text-black sm:h-14 sm:px-10 sm:text-base"
              >
                <span className="relative z-10">
                  Schedule a Call <span className="ml-1">&gt;</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-5"
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
