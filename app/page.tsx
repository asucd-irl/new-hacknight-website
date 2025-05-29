import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StatementSection from "./sections/StatementSection";
import PortfolioSection from "./sections/PortfolioSection";
import FAQSection from "./sections/FAQSection";
import Footer from "./_components/Footer";
import AboutSectionTwo from "./sections/AboutSectionTwo";
import MentorSection from "./sections/MentorSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatementSection />
      <AboutSectionTwo />
      <MentorSection />
      <PortfolioSection />
      <FAQSection />
      <Footer />
    </>
  );
}
