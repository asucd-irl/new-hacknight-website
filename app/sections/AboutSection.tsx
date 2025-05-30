import Section from "./Section";
import Image from "next/image";
import { instrumentSerif } from "../_components/fonts";

export default function AboutSection() {
  return (
    <Section id="about" bg="bg-[#FEFFF3]" fullHeight={true}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-16">
        <div className="flex-[1.2] max-w-3xl">
          <h1 className="text-5xl font-bold mb-8">
            Behind every breakthrough was a{" "}
            <span className="text-[#7A40FF]">community of builders.</span>
          </h1>
          <p className={`text-3xl mb-4 ${instrumentSerif.className}`}>
            We learn from each other, push limits, and celebrate wins together.
          </p>
          <p className={`text-3xl mb-10 ${instrumentSerif.className}`}>
            That&apos;s what this space is all about.
          </p>
          <p className="text-3xl font-bold">
            Community creates momentum.
            <br />
            Get close to it.
          </p>
        </div>
        <div className="flex-[1] flex justify-center">
          <div
            className="flex flex-col items-center justify-start -rotate-3 shadow-2xl border-2 border-[#BBBBBB] bg-white"
            style={{ width: 520, height: 460 }}
          >
            <Image
              src="/images/about.jpg"
              alt="About HackNights"
              width={488}
              height={388}
              className="object-contain w-[488px] h-[388px] mt-3"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
