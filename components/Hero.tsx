import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { site } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 pt-32 pb-20">
      {/* Brilho de acento ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-5">
        <div className="animate-fade-in md:col-span-3">
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-text md:text-6xl">
            {site.name}.
          </h1>
          <h2 className="mb-6 font-display text-2xl font-semibold text-subtext md:text-4xl">
            I build full-stack web apps, from database to deploy.
          </h2>
          <p className="mb-8 max-w-lg text-subtext">
            I&apos;m a Full-Stack Developer at TARS, based in {site.location}. I
            work across the Node ecosystem (Next.js, NestJS and Prisma), and
            I&apos;m digging deeper into the infrastructure that ships it all:
            Docker, Cloudflare and the cloud.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-medium text-on-accent transition duration-300 hover:bg-accent-hover"
            >
              View my work
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text transition duration-300 hover:border-accent hover:text-accent"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center md:col-span-2 md:justify-end">
          <div className="relative flex items-end justify-center">
            {/* brilho mauve atrás do recorte */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
            />
            <Image
              src={asset(site.photo)}
              alt={`${site.name}, ${site.role}`}
              width={700}
              height={1050}
              priority
              className="relative z-10 h-80 w-auto object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_88%,transparent)] md:h-[26rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
