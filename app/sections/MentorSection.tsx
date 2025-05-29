import Section from "./Section";
import { mentors } from "../data/mentors";
import Image from "next/image";

export default function MentorSection() {
  return (
    <Section id="mentor" bg="bg-[#FEFFF3]">
      <div className="w-full px-[120px] flex flex-col gap-32">
        <h1 className="text-[90px] font-bold">
          Our <span className="text-[#7A40FF]">Mentors</span>
        </h1>
        
        <div className="flex flex-col gap-32">
          {mentors.map((mentor, index) => (
            <div 
              key={mentor.name}
              className={`flex items-center gap-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-5xl font-medium">{mentor.name}</h2>
                  <div className="relative aspect-square w-full max-w-[400px] rounded-[25px] overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-2xl leading-relaxed">{mentor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
