'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Animation variants for text reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function IntroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  // Split text into segments while preserving italic formatting
  const textSegments = [
    { text: 'At Zyntrex, we craft exceptional ', italic: false },
    { text: 'digital products', italic: true },
    { text: ' with expertise in ', italic: false },
    { text: 'branding', italic: true },
    { text: ', ', italic: false },
    { text: 'UI/UX design', italic: true },
    { text: ', and ', italic: false },
    { text: 'mobile & web development', italic: true },
    { text: '.', italic: false },
  ];

  // Split each segment into words for animation
  const words = textSegments.flatMap((segment, segmentIndex) => {
    const segmentWords = segment.text.split(' ').filter(w => w.length > 0);
    return segmentWords.map((word, wordIndex) => ({
      word: word + (wordIndex < segmentWords.length - 1 || segment.text.endsWith(' ') ? ' ' : ''),
      isItalic: segment.italic,
      key: `segment-${segmentIndex}-word-${wordIndex}`,
    }));
  });

  return (
    <section className="relative w-full bg-white py-1 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Main Heading */}
            <motion.h1 
              ref={headingRef}
              className="text-[40px] font-normal leading-[51.6px] tracking-[-0.05em] text-black mb-12 lg:mb-14"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {words.map(({ word, isItalic, key }) => (
                <motion.span
                  key={key}
                  variants={wordVariants}
                  className={isItalic ? "italic font-normal" : ""}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            {/* Book a Slot Button */}
            <button className="bg-black text-white px-12 py-[14px] rounded-[8px] font-medium text-[15px] leading-[1] w-fit mb-20 lg:mb-24 hover:bg-black/90 transition-colors">
              Book a Slot
            </button>
            
            {/* Label */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-black font-semibold">
              DIGITAL DESIGN STUDIO
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7 lg:gap-8">
            {/* Paragraph */}
            <p className="text-[15px] sm:text-[16px] leading-[1.75] text-black max-w-[520px]">
              Our team of skilled creative designers collaborates with you to develop customised strategies that showcase your unique value, engage your audience, and drive conversions. We're dedicated to delivering outcomes that go beyond aesthetics.
            </p>
            
            {/* Image Container - positioned to the right of text */}
            <div className="relative w-full aspect-square max-w-[240px] ml-auto mt-4">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                <Image
                  src="/images/fusion.png"
                  alt="Fusion"
                  fill
                  className="object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

