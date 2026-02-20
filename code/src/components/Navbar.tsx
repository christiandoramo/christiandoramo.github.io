import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const NAV_KEYS = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.education", href: "#education" },
  { key: "nav.contact", href: "#contact" },
];

const LANGUAGES: { code: Language | "es"; label: string; disabled?: boolean }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES", disabled: true },
];

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_KEYS.map((i) => i.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = () => setLangOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [langOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-card shadow-card py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav("#hero")}
          className="font-display font-bold text-lg gradient-text select-none"
        >
          Christian Oliveira
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_KEYS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                active === item.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {t(item.key)}
            </button>
          ))}

          {/* Language selector */}
          <div className="ml-1 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 text-sm font-medium"
              aria-label="Selecionar idioma"
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 glass-card rounded-xl border border-border shadow-elevated py-1 min-w-[90px] z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    disabled={l.disabled}
                    onClick={() => {
                      if (!l.disabled && l.code !== "es") {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm transition-colors duration-150",
                      l.disabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : lang === l.code
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {l.label}
                    {l.disabled && (
                      <span className="ml-2 text-xs opacity-50">(em breve)</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Language toggle (compact on mobile) */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-border text-muted-foreground text-xs font-medium hover:text-primary hover:border-primary/50 transition-all"
            >
              <Globe size={12} />
              {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 glass-card rounded-xl border border-border shadow-elevated py-1 min-w-[90px] z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    disabled={l.disabled}
                    onClick={() => {
                      if (!l.disabled && l.code !== "es") {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm transition-colors duration-150",
                      l.disabled
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : lang === l.code
                        ? "text-primary font-semibold bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {l.label}
                    {l.disabled && <span className="ml-1 text-xs opacity-50">(em breve)</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-foreground p-1"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pb-4 pt-2 glass-card mt-2 mx-4 rounded-xl">
          {NAV_KEYS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={cn(
                "px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-200",
                active === item.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              {t(item.key)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
