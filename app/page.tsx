import { url } from "inspector";
import Image from "next/image";
import Story from "@/components/story/story";
import Hero from "@/components/hero/hero";
import Features from "@/components/features/features";
import Things from "@/components/Things/things";
import TestimonialSlider from "@/components/Testimonials/testimonial";
import PrivacySection from "@/components/Privacy/private";
import Pricing from "@/components/Plans/plan";
import Faq from "@/components/FAQ/faq";

export default function Home() {
  return (
    
      <div className="home-page">
  
         <Hero />
          
         <Story/>
        <Features />
         <Things/>
         <TestimonialSlider />
         <PrivacySection />
         <Pricing />
         <Faq />


      </div>
    
  );
}
