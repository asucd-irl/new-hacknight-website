import ImageCarousel from "./ImageCarousel";
import Section from "./Section";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <Section id="hero" bg="bg-[#FEFFF3]" fullHeight={false}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/0 to-transparent" />

      <div className="z-10 flex flex-col items-center w-full pt-16">
        <div className="text-center max-w-2xl mb-8">
          <p className="mb-2 text-xl font-bold text-[#7A40FF] md:text-2xl">
            Every Thursday @ 6 PM
          </p>

          <h1 className="mb-4 text-4xl font-black text-brand-dark md:text-5xl lg:text-6xl">
            for the love of making.
          </h1>
          <p
            className={`mb-8 mt-4 text-black max-w-[50ch] text-center mx-auto text-lg md:text-xl ${instrumentSerif.className}`}
          >
            bringing you together with student
            <br />
            founders to innovate on new ideas.
          </p>

          <a
            href="https://ucdhacknight.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#7A40FF] px-8 py-3 text-xl font-medium text-white transition-all duration-200 hover:bg-[#5A2FD6] hover:shadow-lg"
          >
            Register Now
          </a>
        </div>
        <div className="w-full mb-4 mx-auto">
          <ImageCarousel />
        </div>
      </div>
    </Section>
  );
}
