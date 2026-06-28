import { skills } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>About</SectionHeading>

        <div className="flex flex-col gap-12 md:flex-row">
          <div className="md:w-2/3">
            <p className="mb-4 text-gray-700">
              I&apos;m a 27-year-old full-stack developer from Londrina, Brazil,
              with a B.Sc. in Computer Science from the State University of
              Londrina (UEL, 2025).
            </p>
            <p className="mb-4 text-gray-700">
              I&apos;m currently a mid-level Full-Stack Developer at TARS,
              building web applications across the Node ecosystem with Next.js,
              NestJS and Prisma. The web is where I feel at home, and I
              genuinely enjoy crafting sites and products that people actually
              use.
            </p>
            <p className="text-gray-700">
              Lately I&apos;ve been expanding into infrastructure and DevOps
              (Docker, Cloudflare and cloud tooling), so I can take what I build
              all the way from idea to production. When I&apos;m not coding, I&apos;m
              usually exploring a new technology or learning something adjacent
              to the stack.
            </p>
          </div>

          <div className="md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                  >
                    <Icon
                      className="mb-2 text-4xl"
                      style={{ color: skill.color }}
                      aria-hidden
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
