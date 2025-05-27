import HeroSection from './_components/HeroSection';
import AboutSection from './_components/AboutSection';
import StatementSection from './_components/StatementSection';
import PortfolioSection from './_components/PortfolioSection';
import FAQSection from './_components/FAQSection';
import Footer from './_components/Footer';
import AboutSectionTwo from './_components/AboutSectionTwo';
import MentorSection from './_components/MentorSection';
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
      <Footer/>
    </>
  );
}