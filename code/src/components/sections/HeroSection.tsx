import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, MapPin } from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import retrato from "@/assets/retrato.png";

export function HeroSection() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const texts = [
      t("hero.typing.1"),
      t("hero.typing.2"),
      t("hero.typing.3"),
    ];
    let idx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = texts[idx];
      const el = document.getElementById("typing-text");
      if (!el) return;

      if (!deleting) {
        el.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          idx = (idx + 1) % texts.length;
        }
      }
      timeout = setTimeout(type, deleting ? 40 : 80);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, [t]);

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-hero-bg opacity-90" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/8 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="mx-auto mb-8 animate-float">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/60 shadow-glow animate-pulse-glow overflow-hidden">
              <img
                src={retrato}
                alt="Christian Oliveira"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-background" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6 section-reveal visible">
          <MapPin size={12} />
          {t("hero.badge")}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display tracking-tight">
          Christian Oliveira
        </h1>
        <div className="h-8 mb-6 flex items-center justify-center gap-1 text-lg md:text-xl text-muted-foreground font-medium">
          <span id="typing-text" className="gradient-text" />
          <span ref={cursorRef} className="gradient-text animate-[blink_1s_ease-in-out_infinite]">|</span>
        </div>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary-bg text-primary-foreground font-semibold text-sm shadow-glow hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            <Github size={16} />
            {t("hero.github")}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-200"
          >
            <Linkedin size={16} />
            {t("hero.linkedin")}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground font-semibold text-sm hover:text-foreground hover:border-foreground/30 hover:scale-105 transition-all duration-200"
          >
            <Mail size={16} />
            {t("hero.contact")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-primary transition-colors duration-200 animate-bounce"
        aria-label={t("hero.scroll")}
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
