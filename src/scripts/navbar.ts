// Menú móvil: panel a pantalla completa que entra desde la derecha, con el contenido centrado.
// Los elementos del menú aparecen escalonados (ver `#mobileMenu > *` en global.css).
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

// Al hacer scroll el encabezado gana fondo y desenfoque para mantener el contraste sobre cualquier sección
// (también cuando el salto a un ancla es animado: el estado se actualiza en cada fotograma de scroll).
function updateScrolled() {
  navbar?.setAttribute("data-scrolled", String(window.scrollY > 8));
}
updateScrolled();
window.addEventListener("scroll", updateScrolled, { passive: true });

// Índice de cada elemento para el retraso escalonado de la animación
mobileMenu?.querySelectorAll<HTMLElement>(":scope > *").forEach((el, i) => el.style.setProperty("--i", String(i)));

function setMenu(open: boolean) {
  if (!mobileMenu || mobileMenu.dataset.open === String(open)) return;
  mobileMenu.dataset.open = String(open);
  mobileMenu.toggleAttribute("inert", !open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  openMenu?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("overflow-hidden", open);
  (open ? closeMenu : openMenu)?.focus({ preventScroll: true });
}

openMenu?.addEventListener("click", () => setMenu(true));
closeMenu?.addEventListener("click", () => setMenu(false));
mobileMenu?.querySelectorAll("[data-close-menu]").forEach((el) => el.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
// Si la ventana pasa a escritorio con el menú abierto, se cierra
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => e.matches && setMenu(false));
