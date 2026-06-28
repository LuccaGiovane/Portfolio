import Image from "next/image";
import { projects, site } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

export default function Work() {
  return (
    <section id="work" className="bg-bg-alt px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading number="03">My Work</SectionHeading>

        {projects.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border bg-surface px-6 py-16 text-center">
            <p className="text-lg font-medium text-text">
              New projects in the works 🚧
            </p>
            <p className="mx-auto mt-2 max-w-md text-subtext">
              I&apos;m currently building a few things I&apos;m genuinely excited
              about. They&apos;ll land here soon. In the meantime, my code lives
              on GitHub.
            </p>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md border border-accent px-6 py-3 text-accent transition duration-300 hover:bg-accent hover:text-on-accent"
            >
              Visit my GitHub
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-lg border border-border bg-surface transition duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                <div className="relative h-48 w-full bg-bg-alt">
                  <Image
                    src={asset(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-display text-xl font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-subtext">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md border border-accent px-4 py-2 text-sm text-accent transition duration-300 hover:bg-accent hover:text-on-accent"
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
