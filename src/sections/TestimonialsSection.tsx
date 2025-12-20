'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-gray-100 py-[31px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-[1800px]">
        {/* Header with Clutch Reviews Button */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-12 lg:mb-16">
          {/* Header Text */}
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              <span className="font-normal italic text-gray-500">From Startups</span>{' '}
              <span className="font-normal italic text-gray-500">to Fortune 900+</span>
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Companies
            </h2>
          </div>

          {/* Clutch Reviews Button */}
          <button className="inline-flex items-center justify-center px-5 py-2 bg-black text-white text-xs sm:text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 self-start sm:self-auto">
            Clutch Reviews
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Testimonial */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Testimonial Card */}
            <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Profile Photos - Outside the white box */}
              <div className="flex flex-col gap-4 flex-shrink-0">
                <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src="/images/team-member-1.png"
                    alt="Patrick Goodman"
                    fill
                    className="object-cover grayscale"
                    sizes="144px"
                    unoptimized
                  />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/team-member-2.png"
                    alt="Team member"
                    fill
                    className="object-cover grayscale"
                    sizes="144px"
                    unoptimized
                  />
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="relative bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm flex-1">
                {/* Testimonial Content */}
                <div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-serif text-black leading-none mb-4 -mt-2" style={{ fontFamily: 'Georgia, serif' }}>
                    &ldquo;
                  </div>
                  <p className="text-lg md:text-xl lg:text-2xl font-medium text-black leading-relaxed mb-6">
                    Zyntrex Agency's design work output is superb, they could transform our input into dev-ready designs.
                  </p>
                  <div className="mb-6">
                    <p className="text-base md:text-lg font-bold text-black mb-1">
                      Patrick Goodman
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      CTO, Workrede
                    </p>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-black">
                    Kwik.
                  </div>
                </div>

                {/* Navigation Arrow */}
                <button className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-black"
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

            {/* Additional Information Block - Below profile photos */}
            <div className="rounded-2xl p-6 md:p-8 shadow-sm" style={{ boxSizing: 'content-box' }}>
              <p className="text-2xl md:text-3xl font-bold text-black mb-2">
                Top 1%
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-1">
                Telehealth & Wellness Creators
              </p>
              <p className="text-sm md:text-base text-gray-600">
                5.0 Rated On Clutch
              </p>
            </div>

            {/* Second Testimonial/Achievement */}
            <div className="relative p-6 md:p-8">
              <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed mb-4">
                Tangible secured $3 million to streamline business scaling for the construction industry worldwide.
              </p>
              <div className="text-2xl md:text-3xl font-bold text-black mb-4">
                Tangible
              </div>
              <button className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-black"
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

          {/* Right Column - Achievement Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Achievement Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                $5 Millions
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Fund Raised by Client
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-black">☕</span>
                </div>
                <span className="text-lg md:text-xl font-semibold text-black">taskade</span>
              </div>
              <button className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-black"
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

            {/* Bottom Achievement Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm relative">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                34% Growth
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                In User Base Post Design
              </p>
              <div className="text-lg md:text-xl font-semibold text-black">
                amazon
              </div>
              <button className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-black"
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
    </section>
  );
}

