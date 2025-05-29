import Section from "./Section";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { instrumentSerif } from "../_components/fonts";

export default function PortfolioSection() {
  const displayedProjects = projects.slice(0, 6);

  return (
    <Section id="portfolio" bg="bg-[#FEFFF3]" fullHeight={false}>
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-6xl font-bold mb-15 text-left">
          Featured <span className="text-purple-600">Projects</span>
        </h2>

        <div className="grid grid-cols-3 gap-x-12 gap-y-16">
          {displayedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#F1F1F1] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-3 flex items-center justify-center">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
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
      </div>
    </Section>
  );
}
