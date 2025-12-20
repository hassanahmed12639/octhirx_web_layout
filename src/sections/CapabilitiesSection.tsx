'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimatedIllustration from '@/src/components/AnimatedIllustration';

export default function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevOpenIndexRef = useRef<number | null>(null);

  const capabilities = [
    {
      number: 1,
      title: 'UI/UX Design',
      description: 'Our UI/UX Design service crafts engaging digital experiences that align with your brand.',
      content: 'We create intuitive interfaces and user experiences that combine aesthetic appeal with functional design. Our team specializes in wireframing, prototyping, user research, and usability testing to ensure every interaction feels natural and delightful.',
    },
    {
      number: 2,
      title: 'Brand Identity',
      content: 'Establishing a strong brand identity is crucial for standing out in today\'s competitive market. We develop comprehensive brand systems including logos, color palettes, typography, and brand guidelines that reflect your unique value proposition and resonate with your target audience.',
    },
    {
      number: 3,
      title: 'Brand Development & Design',
      content: 'Beyond just visual identity, we help you build a cohesive brand strategy that tells your story effectively. Our approach includes market research, brand positioning, messaging frameworks, and design systems that ensure consistency across all touchpoints.',
    },
    {
      number: 4,
      title: 'Web Development',
      content: 'From responsive websites to complex web applications, we deliver high-performance digital solutions built with modern technologies. Our development process emphasizes clean code, accessibility, SEO optimization, and seamless user experiences across all devices.',
    },
    {
      number: 5,
      title: 'Digital Marketing & SEO',
      content: 'Drive meaningful engagement and conversions with our comprehensive digital marketing services. We combine data-driven strategies, content marketing, social media management, and advanced SEO techniques to increase your online visibility and grow your business.',
    },
  ];

  // Handle dropdown animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prevIndex = prevOpenIndexRef.current;
    
    // Handle closing previous item
    if (prevIndex !== null && prevIndex !== openIndex) {
      const prevRef = contentRefs.current[prevIndex];
      if (prevRef) {
        gsap.to(prevRef, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }

    // Handle opening current item
    if (openIndex !== null) {
      const currentRef = contentRefs.current[openIndex];
      if (currentRef) {
        gsap.fromTo(
          currentRef,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          }
        );
      }
    }

    prevOpenIndexRef.current = openIndex;
  }, [openIndex]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-white py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24" style={{ height: '918px' }}>
      <div className="mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Main Title */}
            <h2 className="text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-[1.1] tracking-[-0.05em] text-black mb-6">
              <span className="block">Explore</span>
              <span className="block text-[32px] lg:text-[38px] xl:text-[42px] font-normal italic">
                Our Design
              </span>
              <span className="block">Capabilities</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-[15px] sm:text-[16px] leading-[1.6] text-gray-500 mb-12 lg:mb-16 max-w-[600px]">
              Expanding the Limits of Possibility with Tailored Solutions
            </p>
            
            {/* Capabilities List */}
            <div className="flex flex-col">
              {capabilities.map((capability, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={capability.number}>
                    <button
                      onClick={() => handleToggle(index)}
                      className="flex items-start justify-between py-5 lg:py-6 w-full text-left hover:opacity-80 transition-opacity"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-1">
                          <span className="text-[17px] lg:text-[19px] font-bold text-black leading-tight">
                            {capability.number}.
                          </span>
                          <h3 className="text-[17px] lg:text-[19px] font-bold text-black leading-tight">
                            {capability.title}
                          </h3>
                        </div>
                        {capability.description && (
                          <p className="text-[14px] lg:text-[15px] leading-[1.6] text-gray-500 ml-8 mt-2 max-w-[500px]">
                            {capability.description}
                          </p>
                        )}
                      </div>
                      <svg
                        className={`w-5 h-5 text-black flex-shrink-0 ml-4 mt-1 transition-transform duration-300 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    
                    {/* Dropdown Content */}
                    <div
                      ref={(el) => {
                        contentRefs.current[index] = el;
                      }}
                      className="overflow-hidden"
                      style={{ height: 0, opacity: 0 }}
                    >
                      <div className="pb-5 lg:pb-6 pl-8">
                        <p className="text-[14px] lg:text-[15px] leading-[1.6] text-gray-500 max-w-[500px]">
                          {capability.content}
                        </p>
                      </div>
                    </div>

                    {index < capabilities.length - 1 && (
                      <div className="h-px bg-gray-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-end justify-end lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              <AnimatedIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

