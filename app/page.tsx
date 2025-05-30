import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import CarouselSection from "./sections/CarouselSection";
import StatementSection from "./sections/StatementSection";
import PortfolioSection from "./sections/PortfolioSection";
import FAQSection from "./sections/FAQSection";
import Footer from "./_components/Footer";
import AboutSectionTwo from "./sections/AboutSectionTwo";
import MentorSection from "./sections/MentorSection";
import AlumniSection from "./sections/AlumniSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <AboutSection />
      <StatementSection />
      <AboutSectionTwo />
      <MentorSection />
      <PortfolioSection />
      <AlumniSection />
      <FAQSection />
      <Footer />
    </>
  );
}
