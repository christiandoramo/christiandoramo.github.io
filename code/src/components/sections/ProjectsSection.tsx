import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, ImageOff } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  TypeScript: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  React: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
  "Next.js": "bg-foreground/10 text-foreground/70 border-border",
  "Node.js": "bg-green-500/15 text-green-400 border-green-500/25",
  JavaScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  PostgreSQL: "bg-indigo-500/15 text-indigo-400 border-indigo-500/25",
  NestJS: "bg-red-500/15 text-red-400 border-red-500/25",
  MySQL: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  SQLite: "bg-orange-400/15 text-orange-300 border-orange-400/25",
  Jest: "bg-green-500/15 text-green-400 border-green-500/25",
  "API REST": "bg-purple-500/15 text-purple-400 border-purple-500/25",
  "Clean Arch": "bg-teal-500/15 text-teal-400 border-teal-500/25",
  Microsserviços: "bg-pink-500/15 text-pink-400 border-pink-500/25",
  Vite: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  TailwindCSS: "bg-sky-500/15 text-sky-400 border-sky-500/25",
  Docker: "bg-blue-600/15 text-blue-400 border-blue-600/25",
  HTML: "bg-orange-500/15 text-orange-400 border-orange-500/25",
  CSS: "bg-blue-400/15 text-blue-300 border-blue-400/25",
  Responsive: "bg-teal-400/15 text-teal-300 border-teal-400/25",
};

const getTagStyle = (tag: string) =>
  tagColors[tag] ?? "bg-muted text-muted-foreground border-border";

export function ProjectsSection() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const total = projects.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 3500);
    return () => clearInterval(intervalRef.current);
  }, [next, paused]);

  const visible = [-1, 0, 1].map((offset) => (current + offset + total) % total);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {t("projects.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t("projects.title")}</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            {t("projects.subtitle")}
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile: single card */}
          <div className="w-full md:hidden">
            <ProjectCard project={projects[current]} active />
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden md:flex w-full gap-4">
            {visible.map((idx, i) => (
              <div
                key={projects[idx].id}
                className={cn(
                  "flex-1 transition-all duration-500",
                  i === 1 ? "scale-100 opacity-100" : "scale-95 opacity-60"
                )}
              >
                <ProjectCard project={projects[idx]} active={i === 1} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                  aria-label={`Projeto ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  active,
}: {
  project: (typeof projects)[0];
  active: boolean;
}) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "glass-card rounded-2xl flex flex-col h-full shadow-card transition-all duration-300 overflow-hidden",
        active && "shadow-elevated border-primary/20"
      )}
    >
      {/* Image placeholder */}
      <div className="w-full h-36 bg-muted/50 flex items-center justify-center border-b border-border/50 relative overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={t(project.titleKey)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ImageOff size={28} />
            <span className="text-xs">{t("projects.placeholder")}</span>
          </div>
        )}
        {/* GitHub link overlay */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors border border-border/50"
            aria-label="Ver no GitHub"
          >
            <Github size={15} />
          </a>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-base font-display leading-snug">{t(project.titleKey)}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t(project.descriptionKey)}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn("px-2 py-0.5 rounded-md text-xs font-medium border", getTagStyle(tag))}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
            >
              <ExternalLink size={12} />
              {t("projects.repo")}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary hover:underline font-medium"
            >
              <ExternalLink size={12} />
              {t("projects.demo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
