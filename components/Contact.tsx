import { FaLinkedinIn, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa6";
import { site } from "@/lib/data";

const socials = [
  { icon: FaLinkedinIn, href: site.linkedinUrl, label: "LinkedIn", hover: "hover:bg-brand" },
  { icon: FaInstagram, href: site.instagramUrl, label: "Instagram", hover: "hover:bg-pink-500" },
  { icon: FaEnvelope, href: `mailto:${site.email}`, label: "Email", hover: "hover:bg-gray-700" },
  { icon: FaGithub, href: site.githubUrl, label: "GitHub", hover: "hover:bg-gray-900" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h2>
        <p className="mx-auto mb-12 max-w-2xl text-gray-600">
          I&apos;m currently looking for new opportunities and would love to hear
          from you. Whether you have a question or just want to say hi, I&apos;ll
          do my best to get back to you!
        </p>

        <div className="mb-12 flex justify-center space-x-6">
          {socials.map(({ icon: Icon, href, label, hover }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow-md transition duration-300 hover:text-white ${hover}`}
            >
              <Icon />
            </a>
          ))}
        </div>

        <a
          href={`mailto:${site.email}`}
          className="inline-block rounded-md border border-brand bg-brand px-6 py-3 text-white transition duration-300 hover:bg-white hover:text-brand"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
