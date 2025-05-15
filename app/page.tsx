import AboutSection from "./_components/About/AboutSection";
import FAQSection from "./_components/FAQ/FAQSection";
import HeroSection from "./_components/Hero/HeroSection";
import PortfolioSection from "./_components/Portfolio/PortfolioSection";
import StatementSection from "./_components/Statement/StatementSection";

export default function Home() {
  return (
    <main className="w-full">
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="statement">
        <StatementSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </main>
  );
}
