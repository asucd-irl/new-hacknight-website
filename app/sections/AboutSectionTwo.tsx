import { instrumentSerif } from "../_components/fonts";
import Section from "./Section";
import Image from "next/image";

export default function AboutSectionTwo() {
  return (
    <Section id="about" bg="bg-[#FEFFF3]">
      <div className="w-full px-[120px] flex flex-col items-start gap-16">
        <h1 className="text-[90px] font-bold">
          Why <span className="text-[#7A40FF]">HackNights?</span>
        </h1>

        <p className={`text-4xl ${instrumentSerif.className} w-full`}>
          A weekly collection of the most innovative minds at Davis to build and
          share ideas together.
        </p>

        <div className="relative w-[100%] aspect-[12/7] rounded-[25px] overflow-hidden">
          <Image
            src="/images/abouttwo.png"
            alt="HackNights meeting"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
    </Section>
  );
}
