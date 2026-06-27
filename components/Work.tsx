import Image from "next/image";
import { projects } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading>My Work</SectionHeading>

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
      </div>
    </section>
  );
}
