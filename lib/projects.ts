export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  content: string;
};

// fake data for now
export const projects: Project[] = [
  {
    slug: "stride",
    title: "Stride",
    description: "AI-powered study buddy built in a night.",
    thumbnail: "/images/stride.png",
    content:
      "### Stride\n\nStride helps students focus by blocking distractions…",
  },
  {
    slug: "agrisense",
    title: "AgriSense",
    description: "IoT sensors that optimise irrigation on campus farms.",
    thumbnail: "/images/agrisense.png",
    content: "### AgriSense\n\nAgriSense collects soil-moisture data and…",
  },
];
