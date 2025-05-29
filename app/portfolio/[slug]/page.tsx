import Link from "next/link";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { instrumentSerif, instrumentSans } from "../../_components/fonts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FEFFF3] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/#portfolio"
            className={`inline-flex items-center text-[#B3B3B3] hover:text-purple-700 font-medium text-lg ${instrumentSerif.className}`}
          >
            ← Back to Portfolio
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 ${instrumentSerif.className}`}
          >
            {project.title}
          </h1>
          <p
            className={`text-2xl md:text-3xl text-gray-600 mb-12 ${instrumentSerif.className}`}
          >
            {project.description}
          </p>

          {/* Key Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-left">
            {project.team && (
              <div>
                <h3
                  className={`text-base font-medium text-gray-500 mb-3 ${instrumentSerif.className}`}
                >
                  FOUNDERS
                </h3>
                <div className="space-y-2">
                  {project.team.map((member, index) => (
                    <p
                      key={index}
                      className={`text-gray-900 text-lg ${instrumentSerif.className}`}
                    >
                      {member.name}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {project.yearFounded && (
              <div>
                <h3
                  className={`text-base font-medium text-gray-500 mb-3 ${instrumentSerif.className}`}
                >
                  YEAR FOUNDED
                </h3>
                <p
                  className={`text-gray-900 text-lg ${instrumentSerif.className}`}
                >
                  {project.yearFounded}
                </p>
              </div>
            )}
            {project.category && (
              <div>
                <h3
                  className={`text-base font-medium text-gray-500 mb-3 ${instrumentSerif.className}`}
                >
                  CATEGORY
                </h3>
                <p
                  className={`text-gray-900 text-lg ${instrumentSerif.className}`}
                >
                  {project.category}
                </p>
              </div>
            )}
            {project.teamSize && (
              <div>
                <h3
                  className={`text-base font-medium text-gray-500 mb-3 ${instrumentSerif.className}`}
                >
                  TEAM SIZE
                </h3>
                <p
                  className={`text-gray-900 text-lg ${instrumentSerif.className}`}
                >
                  {project.teamSize}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mb-16">
          <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span
                  className={`text-gray-500 text-3xl font-semibold ${instrumentSerif.className}`}
                >
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            <div>
              <h2
                className={`text-3xl md:text-4xl font-semibold text-gray-900 mb-8 ${instrumentSerif.className}`}
              >
                About
              </h2>
              <div className="prose prose-lg max-w-none">
                <div
                  className={`text-black leading-relaxed space-y-8 text-lg md:text-xl ${instrumentSans.className}`}
                >
                  {project.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {project.website && (
              <div>
                <h2
                  className={`text-3xl md:text-4xl font-semibold text-gray-900 mb-8 ${instrumentSerif.className}`}
                >
                  Website
                </h2>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-purple-600 hover:text-purple-700 font-medium text-xl ${instrumentSans.className}`}
                >
                  {project.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-16">
          <Link
            href="/#portfolio"
            className={`bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full transition-colors duration-300 text-xl ${instrumentSans.className}`}
          >
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
