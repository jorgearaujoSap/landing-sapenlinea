import { es } from "./es";
import { en } from "./en";
import { pt } from "./pt";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en", "pt"];

/** Metadatos por idioma: nombre propio (no depender de banderas), código HTML y `og:locale`. */
export const localeMeta: Record<Locale, { name: string; htmlLang: string; og: string }> = {
  es: { name: "Español", htmlLang: "es-CO", og: "es_CO" },
  en: { name: "English", htmlLang: "en", og: "en_US" },
  pt: { name: "Português", htmlLang: "pt-BR", og: "pt_BR" },
};

const dictionaries: Record<Locale, Dictionary> = { es, en, pt };

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

/** Ruta de un idioma, con sección opcional: `/en/#contacto`. */
export function localizedPath(locale: Locale, hash = ""): string {
  return `/${locale}/${hash ? `#${hash}` : ""}`;
}

/** Sustituye `{name}` en las cadenas de interfaz. */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}
