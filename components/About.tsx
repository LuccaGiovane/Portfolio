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
              I&apos;m a 26-year-old developer born in Londrina, PR, currently
              pursuing my degree in Computer Science at UEL (State University of
              Londrina).
            </p>
            <p className="mb-4 text-gray-700">
              My journey in technology began with a curiosity about how things
              work, which evolved into a passion for building digital solutions.
              I&apos;m particularly interested in web development, where I can
              combine creativity with technical skills to create meaningful
              applications.
            </p>
            <p className="text-gray-700">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or enjoying a
              good cup of coffee while brainstorming my next project.
            </p>
          </div>

          <div className="md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold">Languages and Tools</h3>
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
