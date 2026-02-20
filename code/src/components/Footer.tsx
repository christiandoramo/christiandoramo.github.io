import { Github, Linkedin, Mail, Heart, FlaskConical, Gamepad2 } from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/20 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Contact links row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${contact.email}`}
            aria-label="E-mail"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-medium"
          >
            <Mail size={15} />
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-medium"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-medium"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a
            href={contact.lattes}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lattes"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-medium"
          >
            <FlaskConical size={15} />
            Lattes
          </a>
          <a
            href={contact.itchio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Itch.io"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200 text-sm font-medium"
          >
            <Gamepad2 size={15} />
            Itch.io
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-6" />

        {/* Made by */}
        <p className="text-center text-muted-foreground text-sm flex items-center justify-center gap-1.5">
          <Heart size={13} className="text-primary" fill="currentColor" />
          {t("footer.made")} — 2026
        </p>
      </div>
    </footer>
  );
}
