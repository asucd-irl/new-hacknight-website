import Section from "./Section";

export default function VideoSection() {
  return (
    <Section id="video" bg="bg-[#FEFFF3]" noPadding>
      <div className="rounded-[25px] overflow-hidden aspect-video">
        <iframe
          src="https://www.youtube.com/embed/2lhQUQh8D7I?si=6pgdx73xcMQyADEn"
          title="hack nights"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Section>
  );
} 