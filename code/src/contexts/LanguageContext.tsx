import { createContext, useContext, useEffect, useState } from "react";

export type Language = "pt" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  t: (k) => k,
});

// ─── Translations ─────────────────────────────────────────────────────────────

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Nav
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.education": "Formação",
    "nav.contact": "Contato",

    // Hero
    "hero.badge": "Recife, PE — Disponível para estágio",
    "hero.typing.1": "Desenvolvedor Full Stack",
    "hero.typing.2": "Estudante de Ciência da Computação",
    "hero.typing.3": "Apaixonado por desenvolvimento de jogos",
    "hero.description":
      "Estudante de Ciência da Computação na UFRPE, com experiência real em projetos fullstack. Buscando oportunidade de estágio em desenvolvimento de software.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.contact": "Contato",
    "hero.scroll": "Role para baixo",

    // About
    "about.label": "Sobre mim",
    "about.title": "Quem sou eu",
    "about.bio1":
      "Sou estudante de Ciência da Computação na UFRPE, cursando os últimos anos do bacharel. Minha jornada na programação começou no desenvolvimento de jogos e evoluiu para o desenvolvimento web fullstack.",
    "about.bio2":
      "Tenho experiência real em equipes de desenvolvimento, contribuindo em sistemas de produção com NestJS, Next.js, React e PostgreSQL. Gosto de entregar código limpo, seguindo boas práticas e metodologias ágeis.",
    "about.bio3":
      "Acredito que a tecnologia é uma ferramenta poderosa para transformar ideias em realidade, e estou sempre em busca de oportunidades para crescer e contribuir com projetos inovadores.",
    "about.hobbies.label": "Hobbies & Interesses",
    "about.hobbies.games":
      "Desenvolvedor de jogos indie com Unity, Roblox e Godot. Confira meu perfil no itch.io!",
    "about.languages.label": "Idiomas",

    // Languages
    "lang.pt": "Português",
    "lang.pt.level": "Nativo",
    "lang.en": "Inglês",
    "lang.en.level": "Intermediário (B1)",
    "lang.es": "Espanhol",
    "lang.es.level": "Básico",

    // Projects
    "projects.label": "Portfólio",
    "projects.title": "Projetos",
    "projects.subtitle":
      "Alguns dos projetos que desenvolvi — acadêmicos, profissionais e pessoais.",
    "projects.repo": "Ver repositório",
    "projects.demo": "Ver demo",
    "projects.placeholder": "Imagem em breve",

    // Project titles/descriptions
    "proj.offflix.title": "Offflix",
    "proj.offflix.desc":
      "Media center offline-first para rodar localmente. Gerencia filmes, jogos, músicas e livros direto do sistema de arquivos. Suporta emulação de jogos retro via EmulatorJS.",
    "proj.foodexplorer.title": "Food Explorer",
    "proj.foodexplorer.desc":
      "App de delivery com autenticação, gerenciamento de arquivos, banco de dados e pagamento com PIX/cartão via API Mercado Pago. Testes automatizados com TypeScript, Next.js e Node.js.",
    "proj.gameficato.title": "Gameficato Online",
    "proj.gameficato.desc":
      "Sistema em arquitetura limpa e microsserviços para acesso a jogos simples com premiações, voltado para B2B.",
    "proj.sagan.title": "Sagan",
    "proj.sagan.desc":
      "App para gerenciamento de eventos e artigos científicos com níveis de acesso, gestão de PDFs e participantes.",
    "proj.marvel.title": "Marvel Comics Mini Wiki",
    "proj.marvel.desc":
      "Buscador de heróis da Marvel desenvolvido como desafio em 3 dias, consumindo a API oficial da Marvel.",
    "proj.rocketmovies.title": "RocketMovies",
    "proj.rocketmovies.desc":
      "Aplicação web com fluxo de autenticação, serviço de arquivos e banco de dados desenvolvida com Node.js e React.js.",
    "proj.erpsales.title": "ERP Sales",
    "proj.erpsales.desc":
      "Sistema para gestão de produtos e cupons, bem como aplicação de descontos em processos de venda.",
    "proj.landing.title": "Landing Page",
    "proj.landing.desc":
      "Site tradicional para captação de público para vendas, desenvolvido manualmente com HTML e CSS responsivo.",

    // Experience
    "experience.label": "Trajetória",
    "experience.title": "Experiência Profissional",
    "experience.placeholder": "Logo da empresa",

    "exp.sigpar.role": "Desenvolvedor Web — Estágio",
    "exp.sigpar.period": "Mai/2025 — Jan/2025",
    "exp.sigpar.desc1":
      "Desenvolvimento do SIGPar, sistema de gestão de contratos e parcerias da UFRPE, com autenticação, geração de PDF e ferramentas de mensageria.",
    "exp.sigpar.desc2":
      "Stack: NestJS, Next.js, Prisma, PostgreSQL e TypeScript. Colaborei no design, levantamento de requisitos e configuração das tecnologias.",

    "exp.merx.role": "Software Developer — Estágio",
    "exp.merx.period": "Mar/2024 — Mai/2024",
    "exp.merx.desc1":
      "Colaborei no desenvolvimento e manutenção de sistemas front-end e back-end para a comercializadora de energia Merx.",
    "exp.merx.desc2":
      "Back End com NestJS, Prisma, Redis, Bull, AWS SDK e Nodemailer. Front End com Next.js, MUI, Recharts e react-pdf/renderer.",
    "exp.merx.desc3":
      "Gestão de banco de dados PostgreSQL, automações para leitura de documentos e integração com AWS.",

    "exp.foodrec.role": "Desenvolvedor Full Stack",
    "exp.foodrec.period": "Jul/2023 — Mai/2024",
    "exp.foodrec.desc1":
      "Desenvolvimento da plataforma FoodRec em parceria com a fábrica de software Olhar180: comparadora de preços entre apps de delivery.",
    "exp.foodrec.desc2":
      "Front End com React.js, Material UI e Styled Components. Back End com Node.js, TypeScript, MySQL, Sequelize e AWS. Metodologias ágeis (Scrum/Kanban).",

    // Education
    "education.label": "Aprendizado",
    "education.title": "Formação & Cursos",
    "education.academic": "Formação Acadêmica",
    "education.certs": "Certificações & Cursos",
    "education.credential": "Credencial",

    "edu.ufrpe.degree": "Bacharelado em Ciência da Computação",
    "edu.ufrpe.h1":
      "Aplicações web fullstack em equipe com TypeScript, React, Next.js, Node.js e PostgreSQL.",
    "edu.ufrpe.h2":
      "Projetos de extensão universitária e bolsa de desenvolvimento fullstack.",
    "edu.ufrpe.h3": "Projetos em C, Java, Assembly MIPS e metodologias ágeis.",

    "edu.etepac.degree": "Técnico em Desenvolvimento de Sistemas",
    "edu.etepac.h1":
      "Desenvolvimento web (HTML/CSS/JS/PHP) e mobile com Java no Android Studio.",
    "edu.etepac.h2":
      "Monitor voluntário no módulo de desenvolvimento de sistemas para dispositivos móveis.",

    // Contact
    "contact.label": "Vamos conversar",
    "contact.title": "Contato",
    "contact.subtitle":
      "Aberto a oportunidades de estágio em desenvolvimento de software. Entre em contato!",
    "contact.email.label": "E-mail",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",
    "contact.lattes.label": "Lattes CV",
    "contact.itchio.label": "Itch.io",
    "contact.location.label": "Localização",
    "contact.name": "Seu nome",
    "contact.email": "Seu e-mail",
    "contact.message": "Mensagem",
    "contact.name.placeholder": "João Silva",
    "contact.email.placeholder": "joao@email.com",
    "contact.message.placeholder": "Olá Christian, gostaria de conversar sobre...",
    "contact.send": "Enviar mensagem",
    "contact.sending": "Enviando...",
    "contact.success": "Abrindo seu cliente de e-mail para enviar!",
    "contact.error": "Algo deu errado. Tente novamente.",
    "contact.note":
      "O formulário abrirá seu cliente de e-mail (ex: Gmail, Outlook) para enviar a mensagem.",

    // Footer
    "footer.made": "Feito por Christian Oliveira",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Recife, PE — Available for internship",
    "hero.typing.1": "Full Stack Developer",
    "hero.typing.2": "Computer Science Student",
    "hero.typing.3": "Passionate about game development",
    "hero.description":
      "Computer Science student at UFRPE, with real experience in fullstack projects. Looking for a software development internship opportunity.",
    "hero.github": "GitHub",
    "hero.linkedin": "LinkedIn",
    "hero.contact": "Contact",
    "hero.scroll": "Scroll down",

    // About
    "about.label": "About me",
    "about.title": "Who I am",
    "about.bio1":
      "I'm a Computer Science student at UFRPE, in my final years of the bachelor's degree. My programming journey started in game development and evolved into full stack web development.",
    "about.bio2":
      "I have real experience in development teams, contributing to production systems with NestJS, Next.js, React and PostgreSQL. I enjoy delivering clean code following best practices and agile methodologies.",
    "about.bio3":
      "I believe technology is a powerful tool to turn ideas into reality, and I'm always looking for opportunities to grow and contribute to innovative projects.",
    "about.hobbies.label": "Hobbies & Interests",
    "about.hobbies.games":
      "Indie game developer with Unity, Roblox and Godot. Check out my itch.io profile!",
    "about.languages.label": "Languages",

    // Languages
    "lang.pt": "Portuguese",
    "lang.pt.level": "Native",
    "lang.en": "English",
    "lang.en.level": "Intermediate (B1)",
    "lang.es": "Spanish",
    "lang.es.level": "Basic",

    // Projects
    "projects.label": "Portfolio",
    "projects.title": "Projects",
    "projects.subtitle":
      "Some of the projects I've built — academic, professional and personal.",
    "projects.repo": "View repository",
    "projects.demo": "Live demo",
    "projects.placeholder": "Image coming soon",

    // Project titles/descriptions
    "proj.offflix.title": "Offflix",
    "proj.offflix.desc":
      "Offline-first media center designed to run locally. Manages movies, games, music, and books directly from the file system. Supports retro game emulation via EmulatorJS.",
    "proj.foodexplorer.title": "Food Explorer",
    "proj.foodexplorer.desc":
      "Delivery app with authentication, file handling, database, and PIX/credit card payment via Mercado Pago API. Automated tests with TypeScript, Next.js and Node.js.",
    "proj.gameficato.title": "Gameficato Online",
    "proj.gameficato.desc":
      "Clean architecture and microservices system for accessing simple games with rewards, targeting B2B clients.",
    "proj.sagan.title": "Sagan",
    "proj.sagan.desc":
      "App for managing scientific events and papers with access levels, PDF management and participant tracking.",
    "proj.marvel.title": "Marvel Comics Mini Wiki",
    "proj.marvel.desc":
      "Marvel hero search app built as a 3-day challenge, consuming the official Marvel API.",
    "proj.rocketmovies.title": "RocketMovies",
    "proj.rocketmovies.desc":
      "Web application with authentication flow, file service and database developed with Node.js and React.js.",
    "proj.erpsales.title": "ERP Sales",
    "proj.erpsales.desc":
      "System for product and coupon management, with discount application during sales processes.",
    "proj.landing.title": "Landing Page",
    "proj.landing.desc":
      "Traditional sales capture website built manually with responsive HTML and CSS.",

    // Experience
    "experience.label": "Journey",
    "experience.title": "Professional Experience",
    "experience.placeholder": "Company logo",

    "exp.sigpar.role": "Web Developer — Internship",
    "exp.sigpar.period": "May/2025 — Jan/2025",
    "exp.sigpar.desc1":
      "Development of SIGPar, UFRPE's contract and partnership management system, with authentication, PDF generation, and messaging tools.",
    "exp.sigpar.desc2":
      "Stack: NestJS, Next.js, Prisma, PostgreSQL and TypeScript. Collaborated on design, requirements gathering, and technology configuration.",

    "exp.merx.role": "Software Developer — Internship",
    "exp.merx.period": "Mar/2024 — May/2024",
    "exp.merx.desc1":
      "Collaborated on front-end and back-end system development and maintenance for Merx, an energy trading company.",
    "exp.merx.desc2":
      "Back End: NestJS, Prisma, Redis, Bull, AWS SDK and Nodemailer. Front End: Next.js, MUI, Recharts and react-pdf/renderer.",
    "exp.merx.desc3":
      "PostgreSQL database management, document reading automation, and AWS integration.",

    "exp.foodrec.role": "Full Stack Developer",
    "exp.foodrec.period": "Jul/2023 — May/2024",
    "exp.foodrec.desc1":
      "Development of FoodRec platform in partnership with software factory Olhar180: a price comparison tool across food delivery apps.",
    "exp.foodrec.desc2":
      "Front End: React.js, Material UI, Styled Components. Back End: Node.js, TypeScript, MySQL, Sequelize, AWS. Agile methodologies (Scrum/Kanban).",

    // Education
    "education.label": "Learning",
    "education.title": "Education & Courses",
    "education.academic": "Academic Education",
    "education.certs": "Certifications & Courses",
    "education.credential": "Credential",

    "edu.ufrpe.degree": "Bachelor's in Computer Science",
    "edu.ufrpe.h1":
      "Fullstack web applications in teams using TypeScript, React, Next.js, Node.js and PostgreSQL.",
    "edu.ufrpe.h2":
      "University extension projects and fullstack development scholarship.",
    "edu.ufrpe.h3": "Projects in C, Java, MIPS Assembly and agile methodologies.",

    "edu.etepac.degree": "Technical Degree in Systems Development",
    "edu.etepac.h1":
      "Web development (HTML/CSS/JS/PHP) and mobile with Java on Android Studio.",
    "edu.etepac.h2":
      "Volunteer tutor in the mobile systems development module.",

    // Contact
    "contact.label": "Let's talk",
    "contact.title": "Contact",
    "contact.subtitle":
      "Open to software development internship opportunities. Get in touch!",
    "contact.email.label": "E-mail",
    "contact.github.label": "GitHub",
    "contact.linkedin.label": "LinkedIn",
    "contact.lattes.label": "Lattes CV",
    "contact.itchio.label": "Itch.io",
    "contact.location.label": "Location",
    "contact.name": "Your name",
    "contact.email": "Your e-mail",
    "contact.message": "Message",
    "contact.name.placeholder": "John Smith",
    "contact.email.placeholder": "john@email.com",
    "contact.message.placeholder": "Hello Christian, I'd like to talk about...",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Opening your e-mail client to send!",
    "contact.error": "Something went wrong. Please try again.",
    "contact.note":
      "The form will open your e-mail client (e.g. Gmail, Outlook) to send the message.",

    // Footer
    "footer.made": "Made by Christian Oliveira",
  },
};

// ─── Provider ─────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("portfolio-lang") as Language | null;
      if (saved === "pt" || saved === "en") return saved;
    } catch {}
    return "pt";
  });

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("portfolio-lang", l);
    } catch {}
  };

  const t = (key: string): string =>
    translations[lang][key] ?? translations["pt"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
