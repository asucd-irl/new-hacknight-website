import ImageCarousel from "../_components/ImageCarousel";
import Section from "./Section";

export default function CarouselSection() {
  return (
    <Section id="carousel" bg="bg-[#FEFFF3]" fullHeight={false} noPadding fullWidth>
      <ImageCarousel />
    </Section>
  );
} 