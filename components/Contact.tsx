import { FaLinkedinIn, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa6";
import { site, mailtoHref } from "@/lib/data";

const socials = [
  { icon: FaLinkedinIn, href: site.linkedinUrl, label: "LinkedIn" },
  { icon: FaInstagram, href: site.instagramUrl, label: "Instagram" },
  { icon: FaEnvelope, href: mailtoHref, label: "Email" },
  { icon: FaGithub, href: site.githubUrl, label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-bg px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-text">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-subtext">
          I&apos;m happy where I am right now, but I&apos;m always open to
          connecting with fellow developers and interesting people. Got a
          question or just want to say hi? My inbox is always open.
        </p>

        <div className="mb-12 flex justify-center gap-6">
          {socials.map(({ icon: Icon, href, label }) => {
            const isMail = href.startsWith("mailto:");
            return (
              <a
                key={label}
                href={href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-xl text-subtext transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <a
          href={mailtoHref}
          className="inline-block rounded-md bg-accent px-6 py-3 text-on-accent transition duration-300 hover:bg-accent-hover"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
