import type { Dictionary } from "./types";

// Redacción maestra (es-CO). Las respuestas de FAQ y los datos de contacto siguen pendientes de validación.
export const es: Dictionary = {
  meta: {
    title: "SAP en Línea · Soluciones web y móviles para tránsito",
    description:
      "Soluciones web y móviles para entidades y organizaciones, con especialización en tránsito, movilidad y gestión administrativa.",
  },
  ui: {
    skipLink: "Ir al contacto",
    homeAria: "Sistemas y Aplicaciones En Línea · Inicio",
    navAria: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
    theme: "Tema",
    themeAria: "Cambiar tema claro u oscuro",
    demo: "Solicitar demo",
    language: "Idioma",
    learnMore: "Conocer solución",
    learnMoreAria: "Conocer solución {name}",
    logoAlt: "Logo de {name}",
    mockupAlt: "Vista ilustrativa de {name}",
    heroAlt: "Vista aérea de una avenida urbana al atardecer con estelas de tráfico",
    iteAlt: "ITE · Intelligence Transit Ecosystem",
    clientsAria: "Logotipos de entidades que confían en nosotros",
  },
  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "soluciones", label: "Soluciones" },
    { id: "beneficios", label: "Beneficios" },
    { id: "nosotros", label: "Nosotros" },
    { id: "contacto", label: "Contacto" },
  ],
  hero: {
    title: "Tecnología que transforma la movilidad y simplifica la gestión.",
    description:
      "Desarrollamos soluciones digitales que ayudan a entidades y empresas a modernizar sus procesos, organizar información y mejorar sus operaciones.",
    primary: "Explorar soluciones",
    secondary: "Hablar con un asesor",
  },
  trust: {
    eyebrow: "Especialización",
    title: "Tecnología especializada en desafíos reales.",
    description:
      "Desarrollamos soluciones orientadas a las necesidades de entidades y organizaciones, con especial énfasis en tránsito, movilidad y gestión administrativa.",
    areas: [
      { icon: "route", title: "Tránsito", description: "Procesos y operación en campo" },
      { icon: "file-text", title: "Gestión administrativa", description: "Información y seguimiento" },
      { icon: "code", title: "Desarrollo de software", description: "Web y móvil a la medida" },
    ],
    clientsTitle: "Entidades que confían en nosotros",
  },
  portfolio: {
    eyebrow: "Portafolio",
    title: "Soluciones que impulsan una gestión más eficiente.",
    description:
      "Intelligence Transit Ecosystem (ITE): la suite de aplicativos enfocada en el control, la gestión y la optimización de la movilidad inteligente.",
  },
  status: { disponible: "Disponible", desarrollo: "En desarrollo", propuesta: "Propuesta" },
  apps: {
    sisdrinfa: { category: "Imposición de comparendos", description: "Sistema de imposición de comparendos mediante dispositivo PDA. Aplicación híbrida." },
    paico: { category: "Gestión operativa", description: "Sistema de gestión operativa." },
    transitcash: { category: "Trámites y recaudo", description: "Sistema de trámites, recaudos y liquidación." },
    fastturn: { category: "Atención y turnos", description: "Sistema de turnos para las oficinas de atención." },
    contravencional: { category: "Cobro coactivo", description: "Sistema completo de cobro coactivo." },
    sadypit: { category: "Fotodetección", description: "Sistema de gestión de fotodetección y validación de evidencias." },
    parkea: { category: "Zonas azules", description: "Aplicación móvil para zonas azules." },
    vigia: { category: "Vigilancia integrada", description: "Propuesta de vigilancia integrada e información automotor." },
  },
  benefits: {
    eyebrow: "Beneficios",
    title: "Tecnología que aporta valor a cada proceso.",
    description: "Nuestras soluciones buscan facilitar la gestión de información y apoyar operaciones más organizadas y eficientes.",
    items: [
      { icon: "bolt", title: "Eficiencia operativa", description: "Reducir la dependencia de actividades manuales donde el producto ofrezca digitalización." },
      { icon: "folder", title: "Organización de información", description: "Facilitar el acceso y la administración de los registros operativos." },
      { icon: "eye-search", title: "Seguimiento y trazabilidad", description: "Apoyar la consulta del estado y evolución de actividades o procesos." },
      { icon: "devices", title: "Experiencias digitales", description: "Facilitar tareas mediante herramientas web y móviles." },
      { icon: "rocket", title: "Evolución tecnológica", description: "Adoptar soluciones de acuerdo con las necesidades de cada organización." },
    ],
  },
  services: {
    eyebrow: "Capacidades",
    title: "Desarrollamos soluciones para nuevos desafíos.",
    description:
      "Combinamos desarrollo de software web y móvil con conocimiento de procesos operativos para construir herramientas orientadas a necesidades reales.",
    items: [
      { icon: "world", title: "Desarrollo web", description: "Plataformas digitales y sistemas accesibles desde navegadores." },
      { icon: "device-mobile", title: "Aplicaciones móviles", description: "Soluciones diseñadas para operar desde dispositivos móviles." },
      { icon: "code", title: "Software especializado", description: "Sistemas que responden a necesidades concretas de las organizaciones." },
    ],
    cta: "Cuéntanos tu proyecto",
  },
  about: {
    eyebrow: "Nosotros",
    title: "Conoce a Sistemas y Aplicaciones en Línea.",
    text: "Somos una empresa colombiana de desarrollo de software web y móvil enfocada en crear soluciones para procesos empresariales e institucionales. Nuestra especialización en tránsito, movilidad y gestión administrativa orienta la construcción de herramientas tecnológicas que buscan facilitar las operaciones de nuestros clientes.",
    imageAlt: "El equipo de Sistemas y Aplicaciones en Línea reunido en la oficina, con camisas polo institucionales.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes.",
    items: [
      {
        question: "¿Qué soluciones desarrolla SAP en Línea?",
        answer:
          "Desarrollamos software web y móvil para entidades y organizaciones, con especialización en tránsito, movilidad y gestión administrativa. Nuestro portafolio ITE incluye PAICO (gestión operativa), SISDRINFA (imposición de comparendos con PDA), SADYPIT (fotodetección y validación de evidencias), Contravencional (cobro coactivo), TransitCash (trámites, recaudos y liquidación) y FastTurn (turnos para oficinas de atención). PARKEA, para zonas azules, está en desarrollo y VIGÍA es una propuesta.",
      },
      {
        question: "¿Las plataformas están orientadas únicamente a organismos de tránsito?",
        answer:
          "Nuestra especialización está en tránsito, movilidad y gestión administrativa, por lo que muchas de nuestras soluciones atienden a organismos de tránsito y alcaldías. También desarrollamos software a la medida para otras entidades y empresas que necesitan digitalizar sus procesos: cuéntanos tu caso desde el formulario de contacto.",
      },
      {
        question: "¿Cómo puedo solicitar una demostración?",
        answer:
          "Escríbenos desde el formulario de contacto y elige «Solicitar demostración». Indícanos tu organización y el proceso que quieres mejorar, y nuestro equipo se comunicará contigo para coordinarla.",
      },
      {
        question: "¿Desarrollan aplicaciones web y móviles para necesidades específicas?",
        answer:
          "Sí. Además de nuestros productos, desarrollamos plataformas web, aplicaciones móviles y software especializado para necesidades concretas. Elige «Desarrollo de software» en el formulario de contacto y cuéntanos sobre tu proyecto.",
      },
      {
        question: "¿Cómo puedo obtener información comercial sobre un producto?",
        answer:
          "Elige «Consultar un producto» en el formulario de contacto e indícanos cuál te interesa. Nuestro equipo te orientará sobre las opciones disponibles para tu organización.",
      },
      {
        question: "¿La aplicación de zonas azules ya está disponible?",
        answer:
          "Todavía no. PARKEA, nuestra aplicación móvil para zonas azules, se encuentra en desarrollo. Si quieres conocer su estado, escríbenos desde el formulario de contacto.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos de tu próximo proyecto.",
    description:
      "Cuéntanos qué solución necesitas o qué proceso buscas mejorar. Nuestro equipo podrá orientarte sobre las opciones disponibles.",
    form: {
      success: "Gracias, recibimos tu solicitud. Te contactaremos pronto.",
      failure: "No pudimos enviar tu solicitud. Intenta de nuevo.",
      optional: "opcional",
      fields: {
        name: { label: "Nombre o razón social", placeholder: "Tu nombre o el de tu entidad", error: "Ingresa tu nombre o razón social", invalid: "Usa solo letras, números y signos básicos (. , & - / ( )), mínimo 2 caracteres" },
        email: { label: "Correo electrónico", placeholder: "nombre@entidad.gov.co", error: "Ingresa tu correo electrónico", invalid: "Ingresa un correo válido, por ejemplo nombre@entidad.gov.co" },
        phone: { label: "Teléfono o WhatsApp", placeholder: "+57 300 000 0000", invalid: "Usa solo números (7 a 15 dígitos); puedes incluir +, espacios o guiones" },
        interest: {
          label: "Tipo de interés",
          placeholder: "Selecciona una opción",
          error: "Selecciona un tipo de interés",
          options: [
            { value: "demo", label: "Solicitar demostración" },
            { value: "product", label: "Consultar un producto" },
            { value: "software", label: "Desarrollo de software" },
            { value: "general", label: "Información general" },
          ],
        },
        message: { label: "Mensaje", placeholder: "Cuéntanos qué necesitas", error: "Cuéntanos qué necesitas", short: "Escribe al menos 10 caracteres" },
        consent: { label: "Acepto el tratamiento de mis datos personales según la ", link: "Política de tratamiento de datos personales", error: "Debes aceptar el tratamiento de datos para enviar la solicitud" },
      },
      submit: { idle: "Enviar solicitud", sending: "Enviando…", success: "Solicitud enviada", failed: "Error de envío · Reintentar" },
    },
  },
  footer: {
    description:
      "Soluciones tecnológicas web y móviles para entidades y organizaciones, con especial énfasis en tránsito, movilidad y gestión administrativa.",
    columns: [
      { title: "Navegación", links: [] }, // se completa con `nav`
      {
        title: "Legal",
        links: [
          { href: "#", label: "Política de privacidad" },
          { href: "#", label: "Tratamiento de datos" },
          { href: "#", label: "Términos y condiciones" },
        ],
      },
      { title: "Contacto", links: [{ href: "mailto:contacto@sapenlinea.com.co", label: "contacto@sapenlinea.com.co" }] },
    ],
    copyright: "© 2026 Sistemas y Aplicaciones en Línea S.A.S. Todos los derechos reservados.",
  },
};
