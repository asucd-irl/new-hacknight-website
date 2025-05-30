import { instrumentSans } from "../_components/fonts";
import Section from "./Section";
import Image from "next/image";

export default function AboutSectionTwo() {
  return (
    <Section id="about" bg="bg-[#FEFFF3]">
      <div className="w-full px-[120px] flex flex-col items-start">
        <div className="flex flex-col gap-6 mb-10">
          <h1 className="text-[80px] font-bold">
            Why <span className="text-[#7A40FF]">HackNights?</span>
          </h1>
        </div>

        <div className="flex w-full gap-16 items-center">
          <div className="relative w-[55%] aspect-[4/3] rounded-[25px] overflow-hidden">
            <Image
              src="/images/abouttwo.png"
              alt="HackNights meeting"
              fill
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p className={`text-xl ${instrumentSans.className}`}>
              Born from a simple desire to create,{" "}
              <span className="font-bold text-[#7A40FF]">HackNights</span> began
              as a welcoming space for students to explore their creativity
              beyond the traditional classroom. It&apos;s not a hackathon, nor a
              club. Just an easygoing environment where innovation thrives
              naturally.
            </p>
            <p className={`text-xl ${instrumentSans.className}`}>
              Here, you&apos;re encouraged to fail, expreiment, learn, and do it
              all over again. Our community thrives on collaboration, where
              experienced builders, newcomers, and everyone in between
              contributes to Davis&apos; growing startup culture. Join us to
              bridge classroom concepts with real-world innovation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
