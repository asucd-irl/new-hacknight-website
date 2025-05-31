import Section from "./Section";
import { mentors } from "../data/mentors";
import Image from "next/image";
import { instrumentSerif } from "../_components/fonts";

export default function MentorSection() {
  return (
    <Section id="mentor" bg="bg-[#FEFFF3]" fullHeight={false}>
      <h1 className="text-[80px] font-bold mb-16 w-full">
        Meet our <span className="text-[#7A40FF]">Mentors</span>
      </h1>

      <div className="grid grid-cols-3 gap-x-12 w-full">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="flex flex-col items-center gap-6">
            <h2 className="text-3xl font-medium text-center h-[4rem] flex items-center">
              {mentor.name}
            </h2>
            <div className="relative aspect-square w-full rounded-[25px] overflow-hidden">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover"
              />
            </div>
            <p
              className={`text-lg leading-relaxed text-center whitespace-pre-line ${instrumentSerif.className}`}
            >
              {mentor.bio}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
