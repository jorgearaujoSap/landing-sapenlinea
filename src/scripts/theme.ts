// Alternar tema claro / oscuro y recordar la preferencia.
const toggle = document.getElementById("themeToggle");

toggle?.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    /* almacenamiento no disponible */
  }
});
