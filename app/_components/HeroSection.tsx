import Section from "./Section";

export default function HeroSection() {
  return (
    <Section id="hero" bg="bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/0 to-transparent" />

      <div className="z-10 flex flex-col items-center w-full">
        <div className="text-center max-w-2xl mb-12">
          <h1 className="mb-4 text-4xl font-black text-brand-dark md:text-5xl lg:text-6xl">
            for the love of making.
          </h1>

          <p className="mb-6 text-lg text-gray-700 md:text-xl">
            Every Thursday @ 6 PM
          </p>

          <p className="mb-8 text-gray-600">
            bringing you together with student founders to innovate on new
            ideas.
          </p>

          <a
            href="#signup"
            className="inline-block rounded-md bg-[#022851] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 border border-transparent hover:bg-white hover:text-[#022851] hover:border-black"
          >
            Sign Up
          </a>
        </div>
      </div>
    </Section>
  );
}
