import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa6";
import { experiences } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading number="02">Experience</SectionHeading>

        <div>
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;
            return (
              <div key={`${exp.company}-${exp.role}`} className="flex gap-5">
                {/* Nó + linha conectora */}
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface shadow-sm">
                    {exp.logo ? (
                      <Image
                        src={asset(exp.logo)}
                        alt={`${exp.company} logo`}
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    ) : (
                      <FaLaptopCode className="text-lg text-accent" />
                    )}
                  </span>
                  {!isLast && (
                    <span aria-hidden className="mt-2 w-px flex-1 bg-border" />
                  )}
                </div>

                {/* Conteúdo */}
                <div className={isLast ? "pt-1" : "pb-10 pt-1"}>
                  <h3 className="font-display text-xl font-semibold text-text">
                    {exp.role}
                  </h3>
                  <p className="mb-2 font-mono text-sm text-muted">
                    {exp.period} · {exp.company}
                  </p>
                  <p className="text-subtext">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
