import { stack } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-bg-alt px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>About</SectionHeading>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="mb-4 text-subtext">
              I&apos;m a 27-year-old full-stack developer from Londrina, Brazil,
              with a B.Sc. in Computer Science from the State University of
              Londrina (UEL, 2025).
            </p>
            <p className="mb-4 text-subtext">
              I&apos;m currently a mid-level Full-Stack Developer at TARS,
              building web applications across the Node ecosystem with Next.js,
              NestJS and Prisma. The web is where I feel at home, and I
              genuinely enjoy crafting sites and products that people actually
              use.
            </p>
            <p className="text-subtext">
              Lately I&apos;ve been expanding into infrastructure and DevOps
              (Docker, Cloudflare and cloud tooling), so I can take what I build
              all the way from idea to production. When I&apos;m not coding, I&apos;m
              usually exploring a new technology or learning something adjacent
              to the stack.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-6 font-display text-xl font-semibold text-text">
              Tech Stack
            </h3>
            <div className="space-y-6">
              {stack.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          style={{ "--brand": skill.color } as React.CSSProperties}
                          className="group inline-flex cursor-default items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-subtext transition-colors duration-300 hover:border-accent hover:text-text"
                        >
                          <Icon
                            className="h-4 w-4 transition-colors duration-300 group-hover:[color:var(--brand)]"
                            aria-hidden
                          />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
