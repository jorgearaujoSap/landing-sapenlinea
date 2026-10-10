// Cambio de idioma que conserva la sección actual (/es/#nosotros -> /en/#nosotros) y recuerda la preferencia.
const sectionIds = ["inicio", "especialidad", "soluciones", "beneficios", "capacidades", "nosotros", "faq", "contacto"];

function currentSection(): string {
  let current = "";
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 140) current = id;
  }
  return current;
}

document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const lang = link.dataset.langLink!;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* almacenamiento no disponible */
    }
    const id = currentSection();
    if (id && id !== "inicio") {
      e.preventDefault();
      window.location.href = `/${lang}/#${id}`;
    }
  });
});

// Cierra el menú desplegable al hacer clic fuera o con Escape.
const menu = document.querySelector<HTMLDetailsElement>("[data-lang-menu]");
document.addEventListener("click", (e) => {
  if (menu?.open && !menu.contains(e.target as Node)) menu.open = false;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.open) {
    menu.open = false;
    menu.querySelector("summary")?.focus();
  }
});
