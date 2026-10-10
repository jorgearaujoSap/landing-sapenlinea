// Formulario de contacto: validación en cliente por tipo de dato + estados
// (inicial, foco, error de validación, enviando, enviado, error de envío).
// El destino real se define con PUBLIC_CONTACT_ENDPOINT (ver .env.example). La validación definitiva,
// la protección anti-abuso (rate limit / captcha) y el saneamiento deben repetirse en ese endpoint:
// la validación del navegador mejora la experiencia, pero no es una barrera de seguridad.

type FieldEl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type Kind = "required" | "invalid";

const icons = {
  loader:
    '<svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9"/></svg>',
  ok: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m5 0l3 3l5-6"/></svg>',
  error:
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3v4m0 3v.01"/></svg>',
};

// ---- Reglas por tipo de dato -------------------------------------------------------------------------------------
const NAME_RE = /^[\p{L}\p{N}][\p{L}\p{M}\p{N}'’.,&\-/() ]*$/u; // nombre o razón social: letras (con tildes), números, espacios y . , & - / ( )
const EMAIL_RE =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;
const PHONE_CHARS_RE = /^\+?[0-9\s().-]+$/;
const MARKUP_RE = /[<>]/; // se rechazan etiquetas HTML en texto libre
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

type Rule = (value: string, el: FieldEl) => Kind | null;

const rules: Record<string, Rule> = {
  nombre: (v) => (!v ? "required" : v.length < 2 || v.length > 120 || !NAME_RE.test(v) ? "invalid" : null),
  email: (v) => (!v ? "required" : v.length > 254 || v.includes("..") || !EMAIL_RE.test(v) ? "invalid" : null),
  telefono: (v) => {
    if (!v) return null;
    const digits = v.replace(/\D/g, "");
    return !PHONE_CHARS_RE.test(v) || digits.length < 7 || digits.length > 15 ? "invalid" : null;
  },
  interes: (v, el) => {
    if (!v) return "required";
    const allowed = Array.from((el as HTMLSelectElement).options).map((o) => o.value).filter(Boolean);
    return allowed.includes(v) ? null : "invalid";
  },
  mensaje: (v) => (!v ? "required" : v.length < 10 ? "invalid" : v.length > 2000 || MARKUP_RE.test(v) || CONTROL_RE.test(v) ? "invalid" : null),
};

export function initContactForm() {
  const form = document.getElementById("contactForm") as HTMLFormElement | null;
  if (!form) return;

  const submit = document.getElementById("formSubmit") as HTMLButtonElement;
  const label = document.getElementById("formSubmitLabel") as HTMLElement;
  const icon = document.getElementById("formSubmitIcon") as HTMLElement;
  const success = document.getElementById("formSuccess") as HTMLElement;
  const failure = document.getElementById("formFailure") as HTMLElement;
  const endpoint = form.dataset.endpoint ?? "";

  const idleClasses = ["bg-brand", "hover:bg-brand-hover", "shadow-brand"];
  const okClasses = ["bg-success"];
  const failClasses = ["bg-danger"];

  function setButton(state: "idle" | "sending" | "success" | "failed") {
    form!.dataset.state = state;
    submit.disabled = state === "sending" || state === "success";
    submit.classList.remove(...idleClasses, ...okClasses, ...failClasses);
    submit.classList.add(...(state === "success" ? okClasses : state === "failed" ? failClasses : idleClasses));
    icon.classList.toggle("hidden", state === "idle");
    icon.innerHTML = state === "sending" ? icons.loader : state === "success" ? icons.ok : state === "failed" ? icons.error : "";
    // Textos localizados: los inyecta el servidor como data-msg-* según el idioma de la página.
    label.textContent = form!.dataset[`msg${state[0].toUpperCase()}${state.slice(1)}`] ?? "";
  }

  function showError(el: FieldEl, kind: Kind | null) {
    const wrap = el.closest<HTMLElement>("[data-field]");
    const msg = wrap?.querySelector<HTMLElement>("[data-error]");
    const text = msg?.querySelector<HTMLElement>("[data-error-text]");
    const valid = kind === null;
    el.setAttribute("aria-invalid", String(!valid));
    if (text && wrap && kind) text.textContent = (kind === "required" ? wrap.dataset.msgRequired : wrap.dataset.msgInvalid) || "";
    msg?.classList.toggle("hidden", valid);
    msg?.classList.toggle("flex", !valid);
  }

  function validateField(el: FieldEl): boolean {
    let kind: Kind | null = null;
    if (el instanceof HTMLInputElement && el.type === "checkbox") {
      kind = el.required && !el.checked ? "required" : null;
    } else {
      const value = el.value.trim();
      kind = rules[el.name] ? rules[el.name](value, el) : el.required && !value ? "required" : null;
    }
    showError(el, kind);
    return kind === null;
  }

  const fields = Array.from(form.querySelectorAll<FieldEl>("input:not([name=sitio_web]), textarea, select"));
  fields.forEach((el) => {
    // Teléfono: solo caracteres válidos mientras se escribe
    if (el.name === "telefono") {
      el.addEventListener("input", () => {
        const clean = el.value.replace(/(?!^\+)[^0-9\s().-]/g, "");
        if (clean !== el.value) el.value = clean;
      });
    }
    // Valida al salir del campo (si ya tiene contenido) y revalida al corregir
    el.addEventListener("blur", () => {
      const touched = el instanceof HTMLInputElement && el.type === "checkbox" ? false : el.value.trim() !== "";
      if (touched || el.getAttribute("aria-invalid") === "true") validateField(el);
    });
    const revalidate = () => el.getAttribute("aria-invalid") === "true" && validateField(el);
    el.addEventListener("input", revalidate);
    el.addEventListener("change", revalidate);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    success.hidden = true;
    failure.hidden = true;

    const results = fields.map(validateField);
    if (results.includes(false)) {
      fields.find((f) => f.getAttribute("aria-invalid") === "true")?.focus();
      return;
    }

    // Honeypot: si un bot lo rellena se simula el éxito sin enviar nada
    const trap = form.querySelector<HTMLInputElement>("input[name=sitio_web]");
    if (trap?.value) {
      setButton("success");
      success.hidden = false;
      return;
    }

    setButton("sending");
    try {
      if (!endpoint) throw new Error("PUBLIC_CONTACT_ENDPOINT no está configurado");
      const data = new FormData(form);
      const body = {
        nombre: String(data.get("nombre") ?? "").trim(),
        email: String(data.get("email") ?? "").trim().toLowerCase(),
        telefono: String(data.get("telefono") ?? "").trim(),
        interes: String(data.get("interes") ?? ""),
        mensaje: String(data.get("mensaje") ?? "").trim(),
        consentimiento: true,
        idioma: form.dataset.lang ?? "",
      };
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      fields.forEach((f) => f.removeAttribute("aria-invalid"));
      setButton("success");
      success.hidden = false;
    } catch (err) {
      console.error("[contacto]", err);
      setButton("failed");
      failure.hidden = false;
      // Permite reintentar
      submit.disabled = false;
    }
  });
}
