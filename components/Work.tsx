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
          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project, index) => {
              const mediaFirst = index % 2 === 0;
              return (
                <article
                  key={project.title}
                  className="group grid items-center gap-8 md:grid-cols-2 md:gap-12"
                >
                  {/* Mídia (vídeo com poster, ou imagem) */}
                  <div
                    className={`relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition duration-300 group-hover:border-accent ${
                      mediaFirst ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    {project.video ? (
                      <video
                        className="h-full w-full object-cover"
                        poster={asset(project.image)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${project.title} demo`}
                      >
                        <source src={asset(project.video)} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={asset(project.image)}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>

                  {/* Texto */}
                  <div
                    className={mediaFirst ? "md:order-2" : "md:order-1"}
                  >
                    <h3 className="font-display text-2xl font-semibold text-text md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-subtext">
                      {project.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
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
                      className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-on-accent transition duration-300 hover:opacity-90"
                    >
                      Live Demo
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
