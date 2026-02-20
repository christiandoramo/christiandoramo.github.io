import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skills, languages } from "@/lib/portfolio-data";
import { contact } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Globe, TestTube, Wrench, Gamepad2, ExternalLink } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Front End": <Code2 size={16} />,
  "Back End": <Globe size={16} />,
  "Testes & QA": <TestTube size={16} />,
  "Outros": <Wrench size={16} />,
};

export function AboutSection() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const bioRef = useScrollReveal<HTMLDivElement>();
  const skillsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">{t("about.label")}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t("about.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div ref={bioRef} className="section-reveal-left space-y-5">
            <p className="text-foreground/85 leading-relaxed text-base">{t("about.bio1")}</p>
            <p className="text-muted-foreground leading-relaxed text-base">{t("about.bio2")}</p>
            <p className="text-muted-foreground leading-relaxed text-base">{t("about.bio3")}</p>

            {/* Game Dev Hobby */}
            <div className="glass-card rounded-xl p-4 border border-primary/20 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Gamepad2 size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{t("about.hobbies.label")}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("about.hobbies.games")}</p>
                <a
                  href={contact.itchio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-2 hover:underline"
                >
                  chrisodev.itch.io <ExternalLink size={11} />
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-foreground/70 mb-3 uppercase tracking-wider">
                {t("about.languages.label")}
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <span
                    key={l.nameKey}
                    className="px-3 py-1.5 rounded-lg bg-muted text-sm text-foreground/80"
                  >
                    <span className="font-medium">{t(l.nameKey)}</span>
                    <span className="text-muted-foreground"> · {t(l.levelKey)}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="section-reveal-right space-y-5">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="glass-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-3">
                  {categoryIcons[skill.category]}
                  {skill.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-150"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
