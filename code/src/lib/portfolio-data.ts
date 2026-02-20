// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Experience {
  id: string;
  roleKey: string;
  company: string;
  companyUrl?: string;
  periodKey: string;
  descriptionKeys: string[];
  tags: string[];
  imageAsset?: string; // import name used in component
}

export interface Education {
  id: string;
  degreeKey: string;
  institution: string;
  period: string;
  highlightKeys?: string[];
}

export interface Course {
  id: string;
  name: string;
  institution: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  lattes: string;
  itchio: string;
  location: string;
}

// ─── Static data (language-agnostic) ─────────────────────────────────────────

export const contact: ContactInfo = {
  email: "christiandoramo@gmail.com",
  github: "https://github.com/christiandoramo",
  linkedin: "https://www.linkedin.com/in/christian-oliveira-299795260/",
  lattes: "http://lattes.cnpq.br/4927003245312811",
  itchio: "https://chrisodev.itch.io/",
  location: "Recife, PE — Brasil",
};

export const skills: Skill[] = [
  {
    category: "Front End",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "MUI", "Styled Components"],
  },
  {
    category: "Back End",
    items: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker"],
  },
  {
    category: "Testes & QA",
    items: ["Jest", "Selenium", "BDD / Gherkin", "Testes E2E"],
  },
  {
    category: "Outros",
    items: ["Git", "Python", "C#", "Java", "Spring Boot", "Unity", "Godot", "AWS"],
  },
];

// Experiences — translatable text is stored as keys used in LanguageContext
export const experiences: Experience[] = [
  {
    id: "sigpar",
    roleKey: "exp.sigpar.role",
    company: "Instituto IPÊ — UFRPE",
    companyUrl: "https://www.ufrpe.br/",
    periodKey: "exp.sigpar.period",
    descriptionKeys: [
      "exp.sigpar.desc1",
      "exp.sigpar.desc2",
    ],
    tags: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "TypeScript", "React"],
    imageAsset: "ipe",
  },
  {
    id: "merx",
    roleKey: "exp.merx.role",
    company: "Merx Energia",
    companyUrl: "https://www.merxenergia.com.br/",
    periodKey: "exp.merx.period",
    descriptionKeys: [
      "exp.merx.desc1",
      "exp.merx.desc2",
      "exp.merx.desc3",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "Redis", "MUI", "Bull", "AWS SDK"],
    imageAsset: "merx",
  },
  {
    id: "foodrec",
    roleKey: "exp.foodrec.role",
    company: "UFRPE / Olhar180",
    companyUrl: "https://www.ufrpe.br/",
    periodKey: "exp.foodrec.period",
    descriptionKeys: [
      "exp.foodrec.desc1",
      "exp.foodrec.desc2",
    ],
    tags: ["React", "Node.js", "TypeScript", "MySQL", "AWS", "Scrum", "Python"],
    imageAsset: "olhar180",
  },
];

export const projects: Project[] = [
  {
    id: "offflix",
    titleKey: "proj.offflix.title",
    descriptionKey: "proj.offflix.desc",
    tags: ["TypeScript", "React", "Vite", "TailwindCSS"],
    githubUrl: "https://github.com/christiandoramo/Offflix",
  },
  {
    id: "food-explorer",
    titleKey: "proj.foodexplorer.title",
    descriptionKey: "proj.foodexplorer.desc",
    tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/christiandoramo/FoodExplorer",
  },
  {
    id: "gameficato",
    titleKey: "proj.gameficato.title",
    descriptionKey: "proj.gameficato.desc",
    tags: ["TypeScript", "NestJS", "Clean Arch", "Microsserviços"],
    githubUrl: "https://github.com/christiandoramo/gameficato-online",
  },
  {
    id: "sagan",
    titleKey: "proj.sagan.title",
    descriptionKey: "proj.sagan.desc",
    tags: ["TypeScript", "NestJS", "PostgreSQL", "React"],
    githubUrl: "https://github.com/christiandoramo/sagan",
  },
  {
    id: "marvel-wiki",
    titleKey: "proj.marvel.title",
    descriptionKey: "proj.marvel.desc",
    tags: ["TypeScript", "React", "API REST"],
    githubUrl: "https://github.com/christiandoramo/Marvel-Comics-Mini-Wiki",
  },
  {
    id: "rocket-movies",
    titleKey: "proj.rocketmovies.title",
    descriptionKey: "proj.rocketmovies.desc",
    tags: ["JavaScript", "Node.js", "SQLite", "React"],
    githubUrl: "https://github.com/christiandoramo/RocketMovies",
  },
  {
    id: "erp-sales",
    titleKey: "proj.erpsales.title",
    descriptionKey: "proj.erpsales.desc",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/christiandoramo/ERP-sales",
  },
  {
    id: "landing-page",
    titleKey: "proj.landing.title",
    descriptionKey: "proj.landing.desc",
    tags: ["HTML", "CSS", "Responsive"],
    githubUrl: "https://github.com/christiandoramo",
  },
];

export const education: Education[] = [
  {
    id: "ufrpe",
    degreeKey: "edu.ufrpe.degree",
    institution: "Universidade Federal Rural de Pernambuco (UFRPE)",
    period: "Jun/2022 — Dez/2026",
    highlightKeys: ["edu.ufrpe.h1", "edu.ufrpe.h2", "edu.ufrpe.h3"],
  },
  {
    id: "etepac",
    degreeKey: "edu.etepac.degree",
    institution: "ETEPAC — Escola Técnica Estadual Prof. Antônio Carlos Gomes",
    period: "Jul/2021 — Dez/2022",
    highlightKeys: ["edu.etepac.h1", "edu.etepac.h2"],
  },
];

export const courses: Course[] = [
  {
    id: "explorer",
    name: "Explorer",
    institution: "Rocketseat",
    year: "Nov/2024",
    credentialId: "dc30e7db-1fbd-434c-a449-32fa6a25565b",
    credentialUrl: "https://app.rocketseat.com.br/certificates/dc30e7db-1fbd-434c-a449-32fa6a25565b",
  },
  {
    id: "deploy-rs",
    name: "Deploy",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "6fd1d220-ddfe-4f3b-be4c-b0629d34e43c",
    credentialUrl: "https://app.rocketseat.com.br/certificates/6fd1d220-ddfe-4f3b-be4c-b0629d34e43c",
  },
  {
    id: "integracao-rs",
    name: "Integração Backend com Frontend",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "242d6e90-4b7e-4239-958e-b530c9057999",
    credentialUrl: "https://app.rocketseat.com.br/certificates/242d6e90-4b7e-4239-958e-b530c9057999",
  },
  {
    id: "frontend-rs",
    name: "Frontend",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "c13bd9a9-f686-4cb5-b0ee-4543f4af972e",
    credentialUrl: "https://app.rocketseat.com.br/certificates/c13bd9a9-f686-4cb5-b0ee-4543f4af972e",
  },
  {
    id: "backend-rs",
    name: "Backend",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "701a7554-22ba-4037-a190-4500678dd289",
    credentialUrl: "https://app.rocketseat.com.br/certificates/701a7554-22ba-4037-a190-4500678dd289",
  },
  {
    id: "git-rs",
    name: "Git e Github básico",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "cf64cb72-238d-447e-8b96-d06c999eaa71",
  },
  {
    id: "js-rs",
    name: "JavaScript",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "54790c72-d92d-422e-be88-36fc10ee8394",
  },
  {
    id: "html-rs",
    name: "HTML e CSS",
    institution: "Rocketseat",
    year: "Mai/2024",
    credentialId: "cff7f1ea-e00f-443c-a152-e5b259026b83",
  },
  {
    id: "java-udemy",
    name: "Java COMPLETO: Do Zero ao Profissional + Projetos",
    institution: "Udemy",
    year: "Jul/2023",
    credentialId: "UC-e4341d71-cc3f-4ad4-afd3-677aab6dcfe4",
    credentialUrl: "https://www.udemy.com/certificate/UC-e4341d71-cc3f-4ad4-afd3-677aab6dcfe4/",
  },
  {
    id: "csharp-udemy",
    name: "C# COMPLETO — Programação Orientada a Objetos + Projetos",
    institution: "Udemy",
    year: "Jun/2023",
    credentialId: "UC-7e299128-40d2-4c66-8924-11d2b296d4c4",
    credentialUrl: "https://www.udemy.com/certificate/UC-7e299128-40d2-4c66-8924-11d2b296d4c4/",
  },
];

export const languages = [
  { nameKey: "lang.pt", levelKey: "lang.pt.level" },
  { nameKey: "lang.en", levelKey: "lang.en.level" },
  { nameKey: "lang.es", levelKey: "lang.es.level" },
];
