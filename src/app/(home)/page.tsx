import { BrandShowcase } from "@/components/home/brand-showcase";
import HeroSection from "@/components/home/hero-section";
import OurStory from "@/components/home/our-story";
import ProductListing from "@/components/home/product-listing";
import Testimonials from "@/components/home/testimonials";

const CommonLayoutHomePage = () => {
  return (
    <div className="">
     <HeroSection />
     <BrandShowcase />
     <OurStory />
     <ProductListing/>
     <Testimonials/>
    </div>
  );
};

export default CommonLayoutHomePage;
