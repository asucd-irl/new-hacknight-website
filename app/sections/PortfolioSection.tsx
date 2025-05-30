import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import { instrumentSerif } from "../_components/fonts";

export default function PortfolioSection() {
  const displayedProjects = projects.slice(0, 6);

  return (
    <Section id="portfolio" bg="bg-[#FEFFF3]" fullHeight={false}>
      <h2 className="text-6xl font-bold mb-15 text-left w-full">
        Featured <span className="text-[#7A40FF]">Projects</span>
      </h2>

      <div className="grid grid-cols-3 gap-x-12 gap-y-16 w-full">
        {displayedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-full aspect-square bg-[#F1F1F1] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-3 flex items-center justify-center">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="max-w-[75%] max-h-[75%] p-4 object-contain"
                />
              ) : (
                <div className="w-full h-full bg-[#F1F1F1]" />
              )}
            </div>

            <h3
              className={`text-2xl ${instrumentSerif.className} text-gray-900 group-hover:text-purple-600 transition-colors text-center`}
            >
              {project.title}
            </h3>
          </Link>
        ))}
      </div>
    </Section>
  );
}
