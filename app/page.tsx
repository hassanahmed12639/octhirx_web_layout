import Hero from "@/src/sections/Hero";
import BrandSlider from "@/src/components/BrandSlider";
import IntroSection from "@/src/sections/IntroSection";
import CapabilitiesSection from "@/src/sections/CapabilitiesSection";
import CaseStudiesSection from "@/src/sections/CaseStudiesSection";
import TestimonialsSection from "@/src/sections/TestimonialsSection";
import FAQSection from "@/src/sections/FAQSection";
import FooterSection from "@/src/sections/FooterSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <div className="mt-32">
        <BrandSlider />
      </div>
      <IntroSection />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <h2 className="text-center text-[28px] sm:text-[30px] lg:text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-black mb-12 lg:mb-16">
        Frequently Asked Questions
      </h2>
      <FAQSection />
      <FooterSection />
    </main>
  );
}
