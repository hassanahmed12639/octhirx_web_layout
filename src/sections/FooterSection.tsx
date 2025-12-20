'use client';

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-black text-white">
      {/* Top Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          {/* Headline */}
          <h2 className="text-white text-[28px] sm:text-[30px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
            Let's Create Something Better Together
          </h2>
          
          {/* Call to Action */}
          <div className="mb-8">
            <p className="text-white text-[17px] sm:text-[18px] mb-2">Write us on</p>
            <a 
              href="mailto:hello@zygrex.agency" 
              className="text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.2] hover:opacity-80 transition-opacity block"
            >
              hello@zygrex.agency
            </a>
          </div>
          
          {/* Start New Project Button */}
          <div className="footer-button-wrapper inline-block">
            <button className="footer-button relative px-8 py-4 rounded-lg bg-black text-white font-semibold text-[15px] sm:text-[16px] overflow-hidden group">
              <span className="relative z-10">Start New Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-300"></div>

      {/* Bottom Section */}
      <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Left Column - Zyntrex Info & Navigation */}
            <div className="flex flex-col">
              <h3 className="text-white text-[22px] sm:text-[24px] font-semibold mb-4 leading-[1.3]">Zyntrex</h3>
              <div className="mb-8">
                <p className="text-white text-[32px] sm:text-[36px] font-semibold leading-[1.2]">5.0</p>
                <p className="text-white text-[14px] sm:text-[15px] opacity-80">Rated on Clutch</p>
              </div>
              {/* Navigation Links - positioned at bottom */}
              <div className="mt-auto space-x-4 text-[14px] sm:text-[15px]">
                <a href="#" className="text-white hover:opacity-80 transition-opacity">About US</a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">Case Study</a>
                <a href="#" className="text-white hover:opacity-80 transition-opacity">Contact</a>
              </div>
            </div>

            {/* Middle Column - Location */}
            <div>
              <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-4 leading-[1.3]">Location</h3>
              <div className="space-y-4 text-[14px] sm:text-[15px]">
                <div>
                  <p className="text-white font-medium">Pakistan</p>
                  <p className="text-white opacity-80">100% Remote Team</p>
                </div>
                <div>
                  <p className="text-white font-medium">United States</p>
                  <p className="text-white opacity-80">595 East 900 south, Suite 180 Bountiful, Salt Lake City, Houston 84010</p>
                </div>
              </div>
            </div>

            {/* Right Column - Social */}
            <div>
              <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-4 leading-[1.3]">Social</h3>
              <div className="space-y-2 text-[14px] sm:text-[15px]">
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">Dribbble</a>
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">Instagram</a>
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">Behance</a>
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">Linkedin</a>
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">FaceBook</a>
                <a href="#" className="block text-white hover:opacity-80 transition-opacity">Clutch</a>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-right">
            <p className="text-white text-[13px] sm:text-[14px] opacity-80">2025 Zyntrex Agency - All rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}



