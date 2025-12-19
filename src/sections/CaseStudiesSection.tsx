'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const metricCard1Ref = useRef<HTMLDivElement>(null);
  const metricCard2Ref = useRef<HTMLDivElement>(null);
  const achievementRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = [
      testimonialRef.current,
      metricCard1Ref.current,
      metricCard2Ref.current,
      achievementRef.current,
      projectRef.current,
    ].filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    elements.forEach((el, index) => {
      gsap.set(el, { opacity: 0, y: 30 });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (elements.some((el) => trigger.trigger === el)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gray-100 py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] text-black mb-4 sm:mb-0">
            From <span className="font-bold">Startups</span> to Fortune{' '}
            <span className="font-bold">900+</span> Companies
          </h2>
          <button className="inline-flex items-center justify-center px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 self-start sm:self-auto">
            Clutch Reviews
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Large Testimonial Card */}
          <div
            ref={testimonialRef}
            className="lg:col-span-2 bg-white rounded-xl p-8 lg:p-10 shadow-lg"
          >
            <div className="flex gap-6 lg:gap-8">
              {/* Client Photos - Stacked vertically */}
              <div className="flex flex-col gap-4 flex-shrink-0">
                <div className="relative w-20 h-24 lg:w-28 lg:h-32 rounded overflow-hidden bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=300&fit=crop"
                    alt="Patrick Goodman"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="relative mb-6">
                    <span className="text-7xl lg:text-8xl font-serif text-gray-300 leading-none absolute -top-2 -left-1">
                      &ldquo;
                    </span>
                    <p className="text-xl lg:text-2xl font-normal text-black leading-relaxed pl-6 pt-2">
                      Zyntrex Agency's design work output is superb, they could
                      transform our input into dev-ready designs.
                    </p>
                  </div>

                  <div className="mt-6 space-y-0.5">
                    <p className="text-base font-semibold text-black">
                      Patrick Goodman
                    </p>
                    <p className="text-sm text-gray-600">CTO, Workrede</p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">
                    Kwik.
                  </h3>
                  <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Metric Cards */}
          <div className="flex flex-col gap-6">
            {/* Top Metric Card */}
            <div
              ref={metricCard1Ref}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                $5 Millions
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Fund Raised by Client
              </p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-lg">☕</span>
                </div>
                <span className="text-base font-medium text-black lowercase">toskode</span>
              </div>
              <div className="flex justify-end">
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Metric Card */}
            <div
              ref={metricCard2Ref}
              className="bg-white rounded-xl p-6 lg:p-8 shadow-lg"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                34% Growth
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                In User Base Post Design
              </p>
              <div className="flex items-center">
                <span className="text-base font-semibold text-black lowercase">amazon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Not in cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Achievement Section */}
          <div
            ref={achievementRef}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
              Top 1%
            </h3>
            <p className="text-base text-gray-700 mb-2">
              Telehealth & Wellness Creators
            </p>
            <p className="text-base font-medium text-black">
              5.0 Rated On Clutch
            </p>
          </div>

          {/* Project Description */}
          <div
            ref={projectRef}
            className="lg:col-span-2 flex items-start justify-between gap-6"
          >
            <div className="flex-1">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                Tangible secured $3 million to streamline business scaling for
                the construction industry worldwide.
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-black">
                Tangible
              </h3>
            </div>
            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}