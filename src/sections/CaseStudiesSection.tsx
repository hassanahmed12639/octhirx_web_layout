'use client';

import Image from 'next/image';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1585386959984-a41552231691?w=800&h=600&fit=crop',
      client: 'Addos',
      title: 'The ultimate to-do list app for managing tasks',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
      client: 'Addos',
      title: 'The ultimate to-do list app for managing tasks',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      client: 'Workout App',
      title: 'The Best Place To Find Cardio Services',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop',
      client: 'Zooz Cinema',
      title: 'A.I Powered Zooz Cinema & Production House',
    },
  ];

  return (
    <section className="relative w-full bg-white py-[31px]" style={{ height: '1236px' }}>
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* Heading */}
        <h2 className="text-left text-[28px] sm:text-[30px] lg:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-black mb-12 lg:mb-16">
          A Snapshot of Our Recent Case Studies
        </h2>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 lg:mb-16">
          <button className="inline-flex items-center justify-center px-5 py-2 bg-black text-white text-[13px] sm:text-[14px] font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 self-start sm:self-auto">
            View All
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-[13px] sm:text-[14px] font-medium text-gray-600 uppercase tracking-wide">
                  {study.client}
                </p>
                <h3 className="text-[20px] sm:text-[21px] lg:text-[22px] font-semibold leading-[1.3] text-black">
                  {study.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[14px] font-medium text-black hover:text-gray-700 transition-colors duration-200 mt-3"
                >
                  View case study
                  <svg
                    className="w-4 h-4"
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
