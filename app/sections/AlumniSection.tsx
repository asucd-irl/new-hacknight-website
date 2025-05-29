import { instrumentSans } from "../_components/fonts";
import Section from "./Section";
import Image from "next/image";

export default function AlumniSection() {
  return (
    <Section id="alumni" bg="bg-[#FEFFF3]">
      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto py-16 gap-22">
          <div className="flex-1 min-w-[300px]">
            <h2
              className={`text-6xl font-extrabold text-left mr-20 leading-tight ${instrumentSans.className}`}
            >
              HackNight Alumni
              <br />
              have raised <span className="text-[#7A40FF]">millions</span>
              <br />
              from investors
            </h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-56 h-56">
            <div className="flex items-center justify-center">
              <Image
                src="/images/yc.svg"
                alt="Logo 1"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/1984.svg"
                alt="Logo 2"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo3.svg"
                alt="Logo 3"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo4.svg"
                alt="Logo 4"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="w-[80%] mx-auto rounded-[25px] overflow-hidden aspect-video">
          <iframe
            src="https://www.youtube.com/embed/2lhQUQh8D7I?si=6pgdx73xcMQyADEn"
            title="hack nights"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
