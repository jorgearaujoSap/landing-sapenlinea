// Acordeón de preguntas frecuentes con apertura y cierre suaves.
// Base: <details> nativo (accesible y funcional sin JS). Con JS se anima la altura con la Web Animations API
// y se mantiene un único elemento abierto a la vez.
const DURATION = 480;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const items = Array.from(document.querySelectorAll<HTMLDetailsElement>("details[data-faq-item]"));

// El atributo `name` cerraría los demás de golpe, sin animación: la exclusividad se gestiona aquí.
items.forEach((d) => d.removeAttribute("name"));

const running = new WeakMap<HTMLDetailsElement, Animation[]>();

function collapsedHeight(details: HTMLDetailsElement, summary: HTMLElement): number {
  const s = getComputedStyle(details);
  return summary.offsetHeight + parseFloat(s.paddingTop) + parseFloat(s.paddingBottom) + parseFloat(s.borderTopWidth) + parseFloat(s.borderBottomWidth);
}

function animateItem(details: HTMLDetailsElement, open: boolean) {
  const summary = details.querySelector<HTMLElement>("summary")!;
  const content = details.querySelector<HTMLElement>("[data-faq-content]");

  running.get(details)?.forEach((a) => a.cancel());
  const startHeight = details.offsetHeight;

  if (open) details.open = true;
  details.removeAttribute("data-closing");
  if (!open) details.setAttribute("data-closing", "");

  const endHeight = open ? details.scrollHeight : collapsedHeight(details, summary);
  if (reduceMotion) {
    details.open = open;
    details.removeAttribute("data-closing");
    return;
  }

  details.style.overflow = "hidden";
  const height = details.animate({ height: [`${startHeight}px`, `${endHeight}px`] }, { duration: DURATION, easing: EASING, fill: "forwards" });
  const fade = content?.animate(
    open
      ? [{ opacity: 0, transform: "translateY(-8px)" }, { opacity: 1, transform: "none" }]
      : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(-8px)" }],
    { duration: open ? DURATION : DURATION * 0.6, easing: EASING, fill: "both" },
  );
  running.set(details, [height, ...(fade ? [fade] : [])]);

  // Se finaliza una sola vez: con `onfinish` y, como respaldo, con un temporizador
  // (en pestañas/paneles sin fotogramas los eventos de animación pueden retrasarse).
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    window.clearTimeout(timer);
    details.open = open;
    details.removeAttribute("data-closing");
    details.style.overflow = "";
    height.cancel(); // libera el estado final retenido por fill: forwards
    fade?.cancel();
    running.delete(details);
  };
  const timer = window.setTimeout(finish, DURATION + 60);
  height.onfinish = finish;
  height.oncancel = () => {
    done = true;
    window.clearTimeout(timer);
    details.style.overflow = "";
  };
}

items.forEach((details) => {
  details.querySelector("summary")?.addEventListener("click", (e) => {
    e.preventDefault();
    const willOpen = !details.open || details.hasAttribute("data-closing");
    if (willOpen) {
      items.filter((o) => o !== details && o.open && !o.hasAttribute("data-closing")).forEach((o) => animateItem(o, false));
    }
    animateItem(details, willOpen);
  });
});
