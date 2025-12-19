import Hero from "@/src/sections/Hero";
import BrandSlider from "@/src/components/BrandSlider";
import IntroSection from "@/src/sections/IntroSection";
import CapabilitiesSection from "@/src/sections/CapabilitiesSection";
import CaseStudiesSection from "@/src/sections/CaseStudiesSection";
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
      <FAQSection />
      <FooterSection />
    </main>
  );
}
