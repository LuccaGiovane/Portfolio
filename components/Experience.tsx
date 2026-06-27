import Image from "next/image";
import { FaLaptopCode } from "react-icons/fa6";
import { experiences } from "@/lib/data";
import { asset } from "@/lib/asset";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="flex flex-col gap-6 md:flex-row">
              <div className="flex justify-center md:w-1/4 md:justify-start">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                  {exp.logo ? (
                    <Image
                      src={asset(exp.logo)}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  ) : (
                    <FaLaptopCode className="text-3xl text-brand" />
                  )}
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="mb-2 text-gray-600">
                  {exp.period} | {exp.company}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
