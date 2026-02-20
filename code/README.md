# Christian Oliveira — Portfolio

Portfólio pessoal de Christian Oliveira, Desenvolvedor de Software Júnior e estudante de Ciência da Computação na UFRPE.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- **Node.js** ≥ 18 ou **Bun** ≥ 1.0

### Passo a Passo

```bash
# 1. Clone o repositório
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Instale as dependências
npm install
# ou, se tiver Bun:
bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou:
bun run dev
```

Acesse **http://localhost:5173** no navegador.

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`. Pode ser servido por qualquer servidor estático (Nginx, Vercel, Netlify, etc.).

---

## 📧 Formulário de Contato

O formulário usa a abordagem **`mailto:`** — ao clicar em "Enviar", o navegador abre o cliente de e-mail padrão (Gmail, Outlook, etc.) com o assunto e corpo já preenchidos para `christiandoramo@gmail.com`.

### Sem configuração adicional necessária para uso básico.

Se quiser envio direto via API (sem depender do cliente de e-mail do visitante), opções recomendadas:

| Serviço | Gratuito? | Como usar |
|---|---|---|
| [EmailJS](https://emailjs.com) | Sim (200/mês) | Adicione `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` e `VITE_EMAILJS_PUBLIC_KEY` em `.env` e integre no `ContactSection.tsx` |
| [Resend](https://resend.com) | Sim (100/dia) | Requer backend (Edge Function / API Route) |
| [Formspree](https://formspree.io) | Sim (50/mês) | Substitua a lógica do form pelo endpoint do Formspree |

---

## 🌐 Internacionalização (i18n)

Suporta **Português Brasileiro** (padrão) e **Inglês**, com seletor no navbar. O idioma é salvo em `localStorage` com a chave `portfolio-lang`.

Para adicionar traduções, edite `src/contexts/LanguageContext.tsx` — o objeto `translations` contém todas as strings por chave.

---

## 🎨 Tema Claro / Escuro

Controlado via `ThemeContext`, persistido em `localStorage` com a chave `portfolio-theme`. Padrão: preferência do sistema (fallback: escuro).

---

## 🖼️ Substituição de Imagens (Projetos & Experiências)

Os cards exibem um **placeholder** até as imagens reais serem adicionadas.

### Para projetos

Edite `src/lib/portfolio-data.ts` e adicione `imageUrl`:

```ts
{
  id: "offflix",
  // ...
  imageUrl: "/images/offflix-preview.png", // coloque em public/images/
}
```

### Para experiências

Adicione a imagem em `src/assets/`, importe em `ExperienceSection.tsx` e mapeie no `assetMap`:

```ts
import minhaEmpresaImg from "@/assets/minha-empresa.png";
const assetMap = { minha_empresa: minhaEmpresaImg };
```

No `portfolio-data.ts`, defina `imageAsset: "minha_empresa"` na experiência correspondente.

---

## 🛠️ Tecnologias

- **React 18** + **TypeScript** + **Vite**
- **TailwindCSS** + design tokens customizados
- **Shadcn/ui** — componentes base
- **Lucide React** — ícones
- i18n próprio via Context API + `localStorage`
- Intersection Observer API para animações de scroll

---

## 📁 Estrutura de Pastas

```
src/
├── assets/          # Imagens (retrato, logos de empresas)
├── components/
│   ├── sections/    # HeroSection, AboutSection, ProjectsSection, ...
│   ├── ui/          # Componentes Shadcn
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── contexts/
│   ├── ThemeContext.tsx
│   └── LanguageContext.tsx  # i18n + traduções PT/EN
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   ├── portfolio-data.ts    # Dados do portfólio
│   └── utils.ts
└── pages/
    └── Index.tsx
```
