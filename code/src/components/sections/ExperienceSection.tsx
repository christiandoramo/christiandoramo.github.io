import { useRef, useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ImageOff } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

// Lazy-import company images
import merxImg from "@/assets/merx.png";
import ipeImg from "@/assets/ipe-ufrpe.png";
import olhar180Img from "@/assets/olhar180.png";

const assetMap: Record<string, string> = {
  merx: merxImg,
  ipe: ipeImg,
  olhar180: olhar180Img,
};

export function ExperienceSection() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = experiences.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {t("experience.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t("experience.title")}</h2>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards stack */}
          <div className="relative overflow-hidden rounded-2xl">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={cn(
                  "transition-all duration-500 absolute inset-0",
                  i === current
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : i < current
                    ? "opacity-0 -translate-x-full pointer-events-none"
                    : "opacity-0 translate-x-full pointer-events-none"
                )}
              >
                <ExperienceCard exp={exp} />
              </div>
            ))}
            {/* Invisible clone for height */}
            <div className="invisible pointer-events-none">
              <ExperienceCard exp={experiences[0]} />
            </div>
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
              {experiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                  aria-label={`Experiência ${i + 1}`}
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

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const { t } = useLanguage();
  const companyImg = exp.imageAsset ? assetMap[exp.imageAsset] : undefined;

  return (
    <div className="glass-card rounded-2xl shadow-elevated border-primary/10 overflow-hidden">
      {/* Company image */}
      <div className="w-full h-40 bg-muted/40 flex items-center justify-center border-b border-border/50 overflow-hidden">
        {companyImg ? (
          <img
            src={companyImg}
            alt={exp.company}
            className="w-full h-full object-contain object-center p-3 md:p-4"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ImageOff size={28} />
            <span className="text-xs">{t("experience.placeholder")}</span>
          </div>
        )}
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="font-bold text-lg font-display mb-1">{t(exp.roleKey)}</h3>
            <div className="flex items-center gap-2">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
                >
                  {exp.company}
                  <ExternalLink size={11} />
                </a>
              ) : (
                <span className="text-primary font-medium text-sm">{exp.company}</span>
              )}
            </div>
          </div>
          <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
            {t(exp.periodKey)}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-3 mb-6">
          {exp.descriptionKeys.map((key, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {t(key)}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
