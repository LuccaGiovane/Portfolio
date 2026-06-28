import Image from "next/image";
import { projects, site } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading>My Work</SectionHeading>

        {projects.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
            <p className="text-lg font-medium text-gray-700">
              New projects in the works 🚧
            </p>
            <p className="mx-auto mt-2 max-w-md text-gray-500">
              I&apos;m currently building a few things I&apos;m genuinely excited
              about. They&apos;ll land here soon. In the meantime, my code lives
              on GitHub.
            </p>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md border border-brand px-6 py-3 text-brand transition duration-300 hover:bg-brand hover:text-white"
            >
              Visit my GitHub
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={asset(project.image)}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md border border-brand px-4 py-2 text-sm text-brand transition duration-300 hover:bg-brand hover:text-white"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
