import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-bg px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-text md:text-6xl">
            {site.name}.
          </h1>
          <h2 className="mb-6 font-display text-2xl font-semibold text-subtext md:text-4xl">
            I build full-stack web apps, from database to deploy.
          </h2>
          <p className="mb-8 max-w-lg text-subtext">
            I&apos;m a Full-Stack Developer at TARS, based in Londrina, Brazil. I
            work across the Node ecosystem (Next.js, NestJS and Prisma), and
            I&apos;m digging deeper into the infrastructure that ships it all:
            Docker, Cloudflare and the cloud.
          </p>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-accent px-6 py-3 text-accent transition duration-300 hover:bg-accent hover:text-on-accent"
          >
            Check out my Github!
          </a>
        </div>
      </div>
    </section>
  );
}
