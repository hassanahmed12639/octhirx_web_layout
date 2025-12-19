'use client';

import AnimatedIllustration from '@/src/components/AnimatedIllustration';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      number: 1,
      title: 'UI/UX Design',
      description: 'Our UI/UX Design service crafts engaging digital experiences that align with your brand.',
      hasDescription: true,
    },
    {
      number: 2,
      title: 'Brand Identity',
      hasDescription: false,
    },
    {
      number: 3,
      title: 'Brand Development & Design',
      hasDescription: false,
    },
    {
      number: 4,
      title: 'Web Development',
      hasDescription: false,
    },
    {
      number: 5,
      title: 'Digital Marketing & SEO',
      hasDescription: false,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
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
              {capabilities.map((capability, index) => (
                <div key={capability.number}>
                  <div className="flex items-start justify-between py-5 lg:py-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-1">
                        <span className="text-[17px] lg:text-[19px] font-bold text-black leading-tight">
                          {capability.number}.
                        </span>
                        <h3 className="text-[17px] lg:text-[19px] font-bold text-black leading-tight">
                          {capability.title}
                        </h3>
                      </div>
                      {capability.hasDescription && (
                        <p className="text-[14px] lg:text-[15px] leading-[1.6] text-gray-500 ml-8 mt-2 max-w-[500px]">
                          {capability.description}
                        </p>
                      )}
                    </div>
                    {capability.hasDescription && (
                      <svg
                        className="w-5 h-5 text-black flex-shrink-0 ml-4 mt-1"
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
                    )}
                  </div>
                  {index < capabilities.length - 1 && (
                    <div className="h-px bg-gray-200" />
                  )}
                </div>
              ))}
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

