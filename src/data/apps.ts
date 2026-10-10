export type AppStatus = "disponible" | "desarrollo" | "propuesta";
export type MockupKind = "window" | "phones" | "pda" | "logo";

export interface App {
  slug: string;
  name: string;
  status: AppStatus;
  mockup: MockupKind;
  /** pantallas del mockup (rutas en /public) */
  screens: string[];
  /** dimensiones del logo (alto fijo 36 px en la tarjeta) */
  logo: { src: string; w: number; h: number };
  /** colores de brillo del fondo (paleta del logo) */
  glow: [string, string];
  /** proporción (ancho/alto) de la pantalla principal */
  ratio: number;
}

// Orden según el catálogo; los textos (categoría, descripción, estado) viven en src/i18n/* (VIGÍA aún no es un desarrollo; PARKEA está en desarrollo).
export const apps: App[] = [
  {
    slug: "sisdrinfa",
    name: "SISDRINFA",
    status: "disponible",
    mockup: "pda",
    screens: ["/assets/apps/sisdrinfa-pda.webp"],
    logo: { src: "/assets/apps/sisdrinfa-logo.webp", w: 480, h: 148 },
    glow: ["#F9A8D4", "#D946EF"],
    ratio: 865 / 1143,
  },
  {
    slug: "paico",
    name: "PAICO",
    status: "disponible",
    mockup: "window",
    screens: ["/assets/apps/paico-screen.webp"],
    logo: { src: "/assets/apps/paico-logo.webp", w: 360, h: 213 },
    glow: ["#3B82F6", "#5EEAD4"],
    ratio: 1400 / 609,
  },
  {
    slug: "transitcash",
    name: "TransitCash",
    status: "disponible",
    mockup: "window",
    screens: ["/assets/apps/transitcash-screen.webp"],
    logo: { src: "/assets/apps/transitcash-logo.webp", w: 480, h: 136 },
    glow: ["#3B82F6", "#D946EF"],
    ratio: 1400 / 733,
  },
  {
    slug: "fastturn",
    name: "FastTurn",
    status: "disponible",
    mockup: "window",
    screens: ["/assets/apps/fastturn-screen.webp"],
    logo: { src: "/assets/apps/fastturn-logo.webp", w: 480, h: 155 },
    glow: ["#5EEAD4", "#D946EF"],
    ratio: 1400 / 724,
  },
  {
    slug: "contravencional",
    name: "Contravencional",
    status: "disponible",
    mockup: "window",
    screens: ["/assets/apps/contravencional-screen.webp"],
    logo: { src: "/assets/apps/contravencional-logo.webp", w: 480, h: 150 },
    glow: ["#5EEAD4", "#3B82F6"],
    ratio: 1400 / 610,
  },
  {
    slug: "sadypit",
    name: "SADYPIT",
    status: "disponible",
    mockup: "window",
    screens: ["/assets/apps/sadypit-screen.webp"],
    logo: { src: "/assets/apps/sadypit-logo.webp", w: 480, h: 167 },
    glow: ["#D946EF", "#3B82F6"],
    ratio: 1400 / 605,
  },
  {
    slug: "parkea",
    name: "PARKEA",
    status: "desarrollo",
    mockup: "phones",
    screens: ["/assets/apps/parkea-map.webp", "/assets/apps/parkea-session.webp"],
    logo: { src: "/assets/apps/parkea-logo.webp", w: 480, h: 205 },
    glow: ["#5EEAD4", "#3B82F6"],
    ratio: 337 / 731,
  },
  {
    slug: "vigia",
    name: "VIGÍA",
    status: "propuesta",
    mockup: "logo",
    screens: [],
    logo: { src: "/assets/apps/vigia-logo.webp", w: 640, h: 320 },
    glow: ["#D946EF", "#5EEAD4"],
    ratio: 2,
  },
];
