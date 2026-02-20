import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, FlaskConical, Gamepad2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { contact } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const { t } = useLanguage();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>();
  const infoRef = useScrollReveal<HTMLDivElement>();

  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Nome inválido (máx. 100 caracteres).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido.";
    if (!form.message.trim() || form.message.length < 10 || form.message.length > 1000)
      e.message = "Mensagem deve ter entre 10 e 1000 caracteres.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const subject = encodeURIComponent(`Contato via portfólio - ${form.name.trim()}`);
      const body = encodeURIComponent(
        `Nome: ${form.name.trim()}\nE-mail: ${form.email.trim()}\n\nMensagem:\n${form.message.trim()}`
      );
      window.location.href = `mailto:christiandoramo@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    },
  });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="section-reveal text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            {t("contact.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display">{t("contact.title")}</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div ref={infoRef} className="section-reveal-left space-y-4">
            <div className="glass-card rounded-2xl p-6 shadow-card space-y-5">
              <ContactLink
                icon={<Mail size={18} />}
                label={t("contact.email.label")}
                href={`mailto:${contact.email}`}
                text={contact.email}
              />
              <ContactLink
                icon={<Github size={18} />}
                label={t("contact.github.label")}
                href={contact.github}
                text="github.com/christiandoramo"
              />
              <ContactLink
                icon={<Linkedin size={18} />}
                label={t("contact.linkedin.label")}
                href={contact.linkedin}
                text="in/christian-oliveira-299795260"
              />
              <ContactLink
                icon={<FlaskConical size={18} />}
                label={t("contact.lattes.label")}
                href={contact.lattes}
                text="Currículo Lattes CNPq"
              />
              <ContactLink
                icon={<Gamepad2 size={18} />}
                label={t("contact.itchio.label")}
                href={contact.itchio}
                text="chrisodev.itch.io"
              />
              <div className="flex items-start gap-3 text-sm">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">
                    {t("contact.location.label")}
                  </p>
                  <span className="text-foreground font-medium">{contact.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center px-2">{t("contact.note")}</p>
          </div>

          {/* Form */}
          <div ref={formRef} className="section-reveal-right">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-card rounded-2xl p-6 shadow-card space-y-4"
            >
              <FormField label={t("contact.name")} error={errors.name}>
                <input
                  type="text"
                  placeholder={t("contact.name.placeholder")}
                  maxLength={100}
                  className={cn("portfolio-input", errors.name && "border-destructive")}
                  {...field("name")}
                />
              </FormField>

              <FormField label={t("contact.email")} error={errors.email}>
                <input
                  type="email"
                  placeholder={t("contact.email.placeholder")}
                  maxLength={255}
                  className={cn("portfolio-input", errors.email && "border-destructive")}
                  {...field("email")}
                />
              </FormField>

              <FormField label={t("contact.message")} error={errors.message}>
                <textarea
                  placeholder={t("contact.message.placeholder")}
                  rows={4}
                  maxLength={1000}
                  className={cn("portfolio-input resize-none", errors.message && "border-destructive")}
                  {...field("message")}
                />
                <p className="text-xs text-muted-foreground text-right mt-1">
                  {form.message.length}/1000
                </p>
              </FormField>

              {status === "success" && (
                <div className="flex items-center gap-2 text-green-500 text-sm bg-green-500/10 px-4 py-3 rounded-lg">
                  <CheckCircle2 size={16} />
                  {t("contact.success")}
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 px-4 py-3 rounded-lg">
                  <AlertCircle size={16} />
                  {t("contact.error")}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl gradient-primary-bg text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100 shadow-glow"
              >
                <Send size={16} />
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 text-sm hover:text-primary transition-colors group"
    >
      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-0.5">{label}</p>
        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
          {text}
        </span>
      </div>
    </a>
  );
}

function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground/80 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
