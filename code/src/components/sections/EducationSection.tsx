import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { education, courses } from "@/lib/portfolio-data";

export function EducationSection() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const eduRef = useScrollReveal<HTMLDivElement>();
  const coursesRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {t("education.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t("education.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Academic Education */}
          <div ref={eduRef} className="section-reveal-left">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" size={20} />
              <h3 className="font-semibold text-lg font-display">{t("education.academic")}</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-sm leading-snug">{t(edu.degreeKey)}</h4>
                    <span className="text-xs text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded-md">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary text-xs font-medium mb-3">{edu.institution}</p>
                  {edu.highlightKeys && (
                    <ul className="space-y-1.5">
                      {edu.highlightKeys.map((key) => (
                        <li key={key} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div ref={coursesRef} className="section-reveal-right">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="text-primary" size={20} />
              <h3 className="font-semibold text-lg font-display">{t("education.certs")}</h3>
            </div>
            <div className="space-y-3 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="glass-card rounded-xl p-4 shadow-card hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <Award className="text-primary flex-shrink-0" size={14} />
                      <h4 className="font-semibold text-xs leading-snug truncate">{course.name}</h4>
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md whitespace-nowrap flex-shrink-0">
                      {course.year}
                    </span>
                  </div>
                  <p className="text-primary text-xs font-medium ml-5 mb-1">{course.institution}</p>
                  {course.credentialId && (
                    <div className="ml-5 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground font-mono">
                        {course.credentialId.slice(0, 20)}…
                      </span>
                      {course.credentialUrl && (
                        <a
                          href={course.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-0.5 text-xs"
                          aria-label={t("education.credential")}
                        >
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
