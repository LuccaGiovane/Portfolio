/**
 * Conteúdo do portfólio centralizado.
 * Edite aqui (texto, links, projetos, experiências) sem mexer nos componentes.
 */

import type { IconType } from "react-icons";
import {
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiDotnet,
  SiVuedotjs,
  SiPostgresql,
  SiDocker,
  SiRabbitmq,
  SiGit,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";

export const site = {
  name: "Lucca Giovane Gomes",
  shortName: "Lucca Gomes",
  initials: "LG",
  role: "Full-Stack Developer",
  location: "Londrina, Brazil",
  email: "contato.luccagomes@gmail.com",
  githubUrl: "https://github.com/LuccaGiovane",
  linkedinUrl: "https://www.linkedin.com/in/luccagiovane/",
  instagramUrl: "https://www.instagram.com/_luuuucca/",
  resumeFile: "/CV-LuccaGomes.pdf",
  photo: "/lucca.webp",
} as const;

// Abre o compose do Gmail em nova aba, com destinatário/assunto/corpo
// pré-preenchidos (mailto: dependeria de um cliente de email configurado).
export const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  site.email,
)}&su=${encodeURIComponent("Let's connect")}&body=${encodeURIComponent(
  "Hello Lucca,\n\n",
)}`;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type Skill = {
  name: string;
  icon: IconType; // componente de ícone (react-icons)
  // Cor de marca aplicada ao ícone no hover. Logos monocromáticos (Next.js,
  // Prisma) usam var(--text) para se adaptarem ao tema claro/escuro.
  color: string;
};

export type SkillGroup = {
  label: string;
  items: Skill[];
};

export const stack: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "var(--text)" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "Prisma", icon: SiPrisma, color: "var(--text)" },
    ],
  },
  {
    label: "Infra & Tools",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string; // imagem em /public; ausente => ícone genérico
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "TARS, Londrina",
    period: "May 2025 - Present",
    description:
      "I started as a Junior Full-Stack Developer, building and maintaining the company's products and internal systems. In early 2026 I was promoted to mid-level (Pleno), as the stack began moving to a Node ecosystem, with Next.js on the frontend, NestJS on the backend and Prisma as the ORM, alongside the existing Vue.js and C#/.NET codebase.",
    logo: "/images/TARS_logo.jpg",
  },
  {
    role: "Freelancer Backend Developer",
    company: "Londrina, Brazil",
    period: "August 2023 - May 2025",
    description:
      "Developed robust backends, user-friendly interfaces, and real-time visualizations for various clients using Python, Django, Java, and Spring Boot. Managed projects from requirements gathering to deployment, ensuring client satisfaction.",
  },
  {
    role: "Intern Backend Developer",
    company: "CSG International, Londrina",
    period: "February 2022 - August 2023",
    description:
      "Supported backend development with a focus on automated testing and technical problem-solving. Gained experience in collaborative development environments and learned industry best practices.",
    logo: "/images/CSG_Logo.png",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string; // poster do vídeo / fallback quando não há vídeo
  video?: string; // opcional: demo em vídeo (mp4), autoplay mudo em loop
  href: string; // demo do app do usuário (/login)
  adminHref?: string; // demo do painel da empresa (/admin)
  tags: string[];
  demo?: { email: string; password: string }; // credenciais de demonstração
};

// Enquanto a lista estiver vazia, a seção Work exibe um empty state.
export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A collaborative, multi-tenant task manager for companies. Each company gets its own private space to manage its people, departments and roles, then plans work on a drag-and-drop Kanban board and keeps it moving with comments, file attachments, real-time notifications and progress metrics. It's really two products in one: an admin panel for whoever runs the company, and a focused day-to-day app for the team, with backlog, board, list and completed views for every project. Built as a NestJS + Next.js monorepo and developed spec-first, with every feature backed by automated tests.",
    image: "/images/work/task/demo-TASK-img.png",
    video: "/images/work/task/demo-TASK.mp4",
    href: "https://demo-task-flow.vercel.app/login",
    adminHref: "https://demo-task-flow.vercel.app/admin",
    tags: [
      "Next.js",
      "React",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "RabbitMQ",
      "Turborepo",
    ],
    demo: { email: "guest@taskflow.com.br", password: "guest" },
  },
];
