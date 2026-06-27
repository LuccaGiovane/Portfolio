import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in">
          <p className="mb-4 text-brand">Hi, my name is</p>
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-6xl">
            {site.name}.
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-gray-700 md:text-4xl">
            I build things for the web.
          </h2>
          <p className="mb-8 max-w-lg text-gray-600">
            I&apos;m a Computer Science student at UEL with a passion for
            full-stack development. I enjoy creating efficient solutions using
            modern technologies, with a special affinity for Java and Python
            ecosystems.
          </p>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-brand px-6 py-3 text-brand transition duration-300 hover:bg-brand hover:text-white"
          >
            Check out my Github!
          </a>
        </div>
      </div>
    </section>
  );
}
