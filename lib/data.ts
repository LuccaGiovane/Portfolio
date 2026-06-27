/**
 * Conteúdo do portfólio centralizado.
 * Edite aqui (texto, links, projetos, experiências) sem mexer nos componentes.
 */

export const site = {
  name: "Lucca Giovane Gomes",
  shortName: "Lucca Gomes",
  initials: "LG",
  role: "Full-Stack Developer",
  email: "lucca.gomes@solintel.com.br",
  githubUrl: "https://github.com/LuccaGiovane",
  linkedinUrl: "https://www.linkedin.com/in/lucca-gomes/",
  instagramUrl: "https://www.instagram.com/",
  resumeFile: "/CV-LuccaGomes.pdf",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type Skill = {
  name: string;
  icon: string; // caminho relativo dentro de /public
};

export const skills: Skill[] = [
  { name: "Java", icon: "/icons/Java-icon.svg" },
  { name: "Python", icon: "/icons/Python-icon.svg" },
  { name: "C#/.NET", icon: "/icons/Csharp-icon.svg" },
  { name: "Vue.js", icon: "/icons/Vue-icon.svg" },
  { name: "Knockout", icon: "/icons/knockout-icon.svg" },
  { name: "JavaScript", icon: "/icons/Javascript-icon.svg" },
  { name: "Spring", icon: "/icons/Spring-icon.svg" },
  { name: "Django", icon: "/icons/Django-icon.svg" },
  { name: "Flask", icon: "/icons/Flask-icon.svg" },
  { name: "PostgreSQL", icon: "/icons/Postgres-icon.svg" },
  { name: "HTML5", icon: "/icons/Html-icon.svg" },
  { name: "CSS3", icon: "/icons/Css-icon.svg" },
  { name: "Git", icon: "/icons/Git-icon.svg" },
  { name: "C++", icon: "/icons/Cpp-icon.svg" },
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
    role: "Full Stack Developer Jr.",
    company: "TARS, Londrina",
    period: "May 2025 - Present",
    description:
      "Implement features and bug fixes in company systems and products using Vue.js and Knockout.js on the frontend and C#/.NET on the backend. Collaborate with cross-functional teams to deliver high-quality software solutions.",
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
  image: string;
  href: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "DriveOn",
    description:
      "A front-end application styled like Uber, built with pure HTML and CSS to demonstrate modern UI/UX principles for ride-sharing platforms.",
    image: "/images/driveOn.png",
    href: "https://github.com/LuccaGiovane",
    tags: ["HTML", "CSS", "UI/UX"],
  },
  {
    title: "Online Diary",
    description:
      "A platform for creating and managing personal diaries, built with Python/Django, SQLite for the database, and styled with Tailwind CSS for a clean, responsive interface.",
    image: "/images/diarioOnline.png",
    href: "https://github.com/LuccaGiovane",
    tags: ["Python", "Django", "Tailwind"],
  },
  {
    title: "ScreenMatch",
    description:
      "A marketplace for buying and renting media, developed with Java, Spring Boot, PostgreSQL and JPA. Features include user authentication, payment processing, and media streaming.",
    image: "/images/screenMatch.png",
    href: "https://github.com/LuccaGiovane",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
  },
];
