// Aparición progresiva al hacer scroll (estilo apple.com): los bloques entran con fundido + desplazamiento suave.
// Mejora progresiva: sin JavaScript (o con "reducir movimiento") todo el contenido se ve de inmediato.
const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function show(el: HTMLElement) {
  el.classList.add("is-visible");
  // Tras la entrada se quita la transición para no retrasar hover/foco del propio elemento.
  window.setTimeout(() => el.setAttribute("data-revealed", ""), 1600);
}

if (reduceMotion || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible", "revealed"));
} else {
  // Escalonado: los hijos de [data-stagger] entran uno tras otro (por columna si el contenedor es un grid).
  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
    const style = getComputedStyle(parent);
    const cols = style.display === "grid" ? Math.max(1, style.gridTemplateColumns.split(" ").length) : 1;
    const kids = Array.from(parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]"));
    kids.forEach((el, i) => {
      const step = cols > 1 ? i % cols : Math.min(i, 5);
      el.style.setProperty("--reveal-delay", `${step * 90}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  items.forEach((el) => observer.observe(el));
}
