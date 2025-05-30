import Section from "./Section";
import { instrumentSerif, instrumentSans } from "../_components/fonts";

export default function HeroSection() {
  return (
    <Section id="hero" bg="bg-[#FEFFF3]" fullHeight={false}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/0 to-transparent" />

      <div className="z-10 flex flex-col items-center justify-center w-full h-[60vh]">
        <div className="text-center max-w-2xl">
          <p className={`mb-[30px] text-[30px] font-bold text-[#7A40FF] leading-[29.527px] ${instrumentSans.className}`}>
            Every Thursday @ 6 PM
          </p>

          <h1 className={`mb-[30px] text-[70px] font-bold text-black leading-[70px] ${instrumentSans.className}`}>
            for the love of making.
          </h1>
          <p
            className={`mb-[60px] text-black text-[30px] leading-[28px] tracking-[0.03em] font-normal text-center mx-auto ${instrumentSerif.className}`}
          >
            bringing you together with student
            <br />
            founders to innovate on new ideas.
          </p>

          <a
            href="https://ucdhacknight.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block rounded-full bg-[#7A40FF] px-6 py-2 text-[30px] leading-[52.671px] font-bold text-white text-center transition-all duration-200 hover:bg-[#5A2FD6] hover:shadow-lg ${instrumentSans.className}`}
          >
            Register Now
          </a>
        </div>
      </div>
    </Section>
  );
}
