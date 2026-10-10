// Iconos Tabler (vía Iconify), mismos que en el diseño de Figma.
export const iconPaths = {
  route: '<path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0M19 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8 12h5.5a3.5 3.5 0 0 0 0-7h-8a3.5 3.5 0 0 1 0-7H13"/>',
  "file-text":
    '<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2M9 9h1m-1 4h6m-6 4h6"/>',
  code: '<path d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>',
  bolt: '<path d="M13 3v7h6l-8 11v-7H5z"/>',
  folder: '<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>',
  "eye-search":
    '<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M12 18q-.492 0-.97-.05Q6.271 17.452 3 12q3.6-6 9-6q5.197 0 8.727 5.558M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"/>',
  devices:
    '<path d="M13 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z"/><path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9m3-9h2"/>',
  rocket:
    '<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3-5a9 9 0 0 0 6-8a3 3 0 0 0-3-3a9 9 0 0 0-8 6a6 6 0 0 0-5 3"/><path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/>',
  world:
    '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18"/>',
  "device-mobile": '<path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm5-1h2m-1 13v.01"/>',
  check: '<path d="m5 12l5 5L20 7"/>',
  "arrow-right": '<path d="M5 12h14m-6 6l6-6m-6-6l6 6"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  minus: '<path d="M5 12h14"/>',
  sun: '<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"/>',
  moon: '<path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/>',
  "chevron-down": '<path d="m6 9l6 6l6-6"/>',
  "menu-2": '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  "alert-circle": '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3v4m0 3v.01"/>',
  "circle-check": '<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m5 0l3 3l5-6"/>',
  loader: '<path d="M12 3a9 9 0 1 0 9 9"/>',
} as const;

export type IconName = keyof typeof iconPaths;

