import Section from "./Section";

export default function HeroSection() {
  return (
    <Section id="hero" bg="bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-brand/0 to-transparent" />

      <div className="z-10 max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-black text-brand-dark md:text-5xl lg:text-6xl">
          for the love of making.
        </h1>

        <p className="mb-6 text-lg text-gray-700 md:text-xl">
          Every Thursday&nbsp;&bull;&nbsp;6 – 8&nbsp;PM
        </p>

        <p className="mb-8 text-gray-600">
          Bringing our community together with student hackers to innovate on
          one idea.
        </p>
      </div>
    </Section>
  );
}
