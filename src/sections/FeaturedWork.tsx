'use client';

import Image from 'next/image';

export default function FeaturedWork() {
  return (
    <section className="bg-white w-full px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-12 text-black">
          Selected Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {/* 1 */}
          <div className="image-card row-span-2 relative" style={{ width: '472px', height: '472px' }}>
            <Image
              src="https://images.unsplash.com/photo-1585386959984-a41552231691"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 2 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 3 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 4 */}
          <div className="image-card col-span-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* 5 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1606813902917-0a35f0c97e27"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 6 */}
          <div className="image-card row-span-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267f2"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 7 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 8 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1612832020997-f42a0a9f31f5"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 9 */}
          <div className="image-card col-span-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1520975922284-9f2a04f1d54f"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* 10 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>

          {/* 11 */}
          <div className="image-card relative">
            <Image
              src="https://images.unsplash.com/photo-1616627451211-5d53f1b98fa5"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}

