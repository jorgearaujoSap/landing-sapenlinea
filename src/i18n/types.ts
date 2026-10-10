import type { IconName } from "../data/icons";

export type Locale = "es" | "en" | "pt";

interface IconCard {
  icon: IconName;
  title: string;
  description: string;
}

interface SectionText {
  eyebrow: string;
  title: string;
  description: string;
}

/**
 * Diccionario de contenido por idioma. `es.ts` es la redacción maestra (aprobada primero);
 * `en.ts` y `pt.ts` deben replicar exactamente esta forma.
 */
export interface Dictionary {
  meta: { title: string; description: string };
  ui: {
    skipLink: string;
    homeAria: string;
    navAria: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    theme: string;
    themeAria: string;
    demo: string;
    language: string;
    learnMore: string;
    learnMoreAria: string; // {name}
    logoAlt: string; // {name}
    mockupAlt: string; // {name}
    heroAlt: string;
    iteAlt: string;
    clientsAria: string;
  };
  nav: { id: string; label: string }[];
  hero: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  trust: SectionText & {
    areas: IconCard[];
    clientsTitle: string;
  };
  portfolio: SectionText;
  status: { disponible: string; desarrollo: string; propuesta: string };
  apps: Record<string, { category: string; description: string }>;
  benefits: SectionText & { items: IconCard[] };
  services: SectionText & { items: IconCard[]; cta: string };
  about: { eyebrow: string; title: string; text: string; imageAlt: string };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    form: {
      success: string;
      failure: string;
      optional: string;
      fields: {
        name: { label: string; placeholder: string; error: string; invalid: string };
        email: { label: string; placeholder: string; error: string; invalid: string };
        phone: { label: string; placeholder: string; invalid: string };
        interest: { label: string; placeholder: string; error: string; options: { value: string; label: string }[] };
        message: { label: string; placeholder: string; error: string; short: string };
        consent: { label: string; link: string; error: string };
      };
      submit: { idle: string; sending: string; success: string; failed: string };
    };
  };
  footer: {
    description: string;
    columns: { title: string; links: { href: string; label: string }[] }[];
    copyright: string;
  };
}
