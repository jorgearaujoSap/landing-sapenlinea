import type { Dictionary } from "./types";

// BORRADOR de traducción (en). Requiere revisión de calidad antes de aprobarse (README: no publicar traducciones sin control).
// Los nombres comerciales de productos y entidades conservan su denominación oficial.
export const en: Dictionary = {
  meta: {
    title: "SAP en Línea · Web and mobile traffic solutions",
    description:
      "Web and mobile solutions for public agencies and organizations, specialized in traffic, mobility and administrative management.",
  },
  ui: {
    skipLink: "Skip to contact",
    homeAria: "Sistemas y Aplicaciones En Línea · Home",
    navAria: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    theme: "Theme",
    themeAria: "Switch between light and dark theme",
    demo: "Request a demo",
    language: "Language",
    learnMore: "Explore solution",
    learnMoreAria: "Explore the {name} solution",
    logoAlt: "{name} logo",
    mockupAlt: "Illustrative view of {name}",
    heroAlt: "Aerial view of a city avenue at dusk with traffic light trails",
    iteAlt: "ITE · Intelligence Transit Ecosystem",
    clientsAria: "Logos of the organizations that trust us",
  },
  nav: [
    { id: "inicio", label: "Home" },
    { id: "soluciones", label: "Solutions" },
    { id: "beneficios", label: "Benefits" },
    { id: "nosotros", label: "About us" },
    { id: "contacto", label: "Contact" },
  ],
  hero: {
    title: "Technology that transforms mobility and simplifies management.",
    description:
      "We build digital solutions that help agencies and companies modernize their processes, organize information and improve their operations.",
    primary: "Explore solutions",
    secondary: "Talk to an advisor",
  },
  trust: {
    eyebrow: "Specialization",
    title: "Specialized technology for real challenges.",
    description:
      "We develop solutions tailored to the needs of agencies and organizations, with a special focus on traffic, mobility and administrative management.",
    areas: [
      { icon: "route", title: "Traffic", description: "Processes and field operations" },
      { icon: "file-text", title: "Administrative management", description: "Information and follow-up" },
      { icon: "code", title: "Software development", description: "Custom web and mobile" },
    ],
    clientsTitle: "Organizations that trust us",
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Solutions that drive more efficient management.",
    description:
      "Intelligence Transit Ecosystem (ITE): the suite of applications focused on the control, management and optimization of smart mobility.",
  },
  status: { disponible: "Available", desarrollo: "In development", propuesta: "Proposal" },
  apps: {
    sisdrinfa: { category: "Traffic citation issuing", description: "Traffic citation issuing system using a PDA device. Hybrid application." },
    paico: { category: "Operations management", description: "Operations management system." },
    transitcash: { category: "Procedures and payments", description: "Procedures, payment collection and settlement system." },
    fastturn: { category: "Service and queues", description: "Queue management system for service offices." },
    contravencional: { category: "Coercive collection", description: "Complete coercive collection system." },
    sadypit: { category: "Photo enforcement", description: "Photo-enforcement management and evidence validation system." },
    parkea: { category: "Blue zones", description: "Mobile app for blue-zone street parking." },
    vigia: { category: "Integrated surveillance", description: "Proposal for integrated surveillance and vehicle information." },
  },
  benefits: {
    eyebrow: "Benefits",
    title: "Technology that adds value to every process.",
    description: "Our solutions aim to make information management easier and to support more organized, efficient operations.",
    items: [
      { icon: "bolt", title: "Operational efficiency", description: "Reduce reliance on manual tasks wherever the product provides digitization." },
      { icon: "folder", title: "Information organization", description: "Make operational records easier to access and manage." },
      { icon: "eye-search", title: "Follow-up and traceability", description: "Support checking the status and progress of activities or processes." },
      { icon: "devices", title: "Digital experiences", description: "Make tasks easier with web and mobile tools." },
      { icon: "rocket", title: "Technological evolution", description: "Adopt solutions according to each organization's needs." },
    ],
  },
  services: {
    eyebrow: "Capabilities",
    title: "We build solutions for new challenges.",
    description:
      "We combine web and mobile software development with knowledge of operational processes to build tools aimed at real needs.",
    items: [
      { icon: "world", title: "Web development", description: "Digital platforms and systems accessible from the browser." },
      { icon: "device-mobile", title: "Mobile applications", description: "Solutions designed to run on mobile devices." },
      { icon: "code", title: "Specialized software", description: "Systems that respond to the specific needs of organizations." },
    ],
    cta: "Tell us about your project",
  },
  about: {
    eyebrow: "About us",
    title: "Meet Sistemas y Aplicaciones en Línea.",
    text: "We are a Colombian web and mobile software company focused on building solutions for business and institutional processes. Our specialization in traffic, mobility and administrative management guides the development of technology tools that aim to make our clients' operations easier.",
    imageAlt: "The Sistemas y Aplicaciones en Línea team gathered in the office, wearing company polo shirts.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    items: [
      {
        question: "What solutions does SAP en Línea develop?",
        answer:
          "We build web and mobile software for agencies and organizations, specialized in traffic, mobility and administrative management. Our ITE portfolio includes PAICO (operations management), SISDRINFA (traffic citation issuing with a PDA), SADYPIT (photo enforcement and evidence validation), Contravencional (coercive collection), TransitCash (procedures, payments and settlement) and FastTurn (queue management for service offices). PARKEA, for blue-zone parking, is in development and VIGÍA is a proposal.",
      },
      {
        question: "Are the platforms aimed only at traffic authorities?",
        answer:
          "Our specialization is traffic, mobility and administrative management, so many of our solutions serve traffic authorities and municipalities. We also build custom software for other agencies and companies that need to digitize their processes: tell us about your case through the contact form.",
      },
      {
        question: "How can I request a demo?",
        answer:
          "Write to us through the contact form and choose “Request a demo”. Tell us about your organization and the process you want to improve, and our team will get in touch to arrange it.",
      },
      {
        question: "Do you build web and mobile applications for specific needs?",
        answer:
          "Yes. Besides our products, we develop web platforms, mobile applications and specialized software for specific needs. Choose “Software development” in the contact form and tell us about your project.",
      },
      {
        question: "How can I get commercial information about a product?",
        answer:
          "Choose “Ask about a product” in the contact form and tell us which one interests you. Our team will guide you through the options available for your organization.",
      },
      {
        question: "Is the blue-zone parking app already available?",
        answer:
          "Not yet. PARKEA, our mobile app for blue-zone parking, is currently in development. If you would like to know its status, write to us through the contact form.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your next project.",
    description:
      "Tell us which solution you need or which process you want to improve. Our team will guide you through the available options.",
    form: {
      success: "Thank you, we received your request. We will contact you soon.",
      failure: "We could not send your request. Please try again.",
      optional: "optional",
      fields: {
        name: { label: "Name or company name", placeholder: "Your name or your organization's name", error: "Enter your name or company name", invalid: "Use only letters, numbers and basic symbols (. , & - / ( )), at least 2 characters" },
        email: { label: "Email address", placeholder: "name@organization.com", error: "Enter your email address", invalid: "Enter a valid email address, for example name@organization.com" },
        phone: { label: "Phone or WhatsApp", placeholder: "+57 300 000 0000", invalid: "Use digits only (7 to 15); you may include +, spaces or hyphens" },
        interest: {
          label: "Type of interest",
          placeholder: "Select an option",
          error: "Select a type of interest",
          options: [
            { value: "demo", label: "Request a demo" },
            { value: "product", label: "Ask about a product" },
            { value: "software", label: "Software development" },
            { value: "general", label: "General information" },
          ],
        },
        message: { label: "Message", placeholder: "Tell us what you need", error: "Tell us what you need", short: "Write at least 10 characters" },
        consent: { label: "I accept the processing of my personal data according to the ", link: "Personal Data Processing Policy", error: "You must accept the data processing to send your request" },
      },
      submit: { idle: "Send request", sending: "Sending…", success: "Request sent", failed: "Sending failed · Retry" },
    },
  },
  footer: {
    description:
      "Web and mobile technology solutions for agencies and organizations, with a special focus on traffic, mobility and administrative management.",
    columns: [
      { title: "Navigation", links: [] },
      {
        title: "Legal",
        links: [
          { href: "#", label: "Privacy policy" },
          { href: "#", label: "Data processing" },
          { href: "#", label: "Terms and conditions" },
        ],
      },
      { title: "Contact", links: [{ href: "mailto:contacto@sapenlinea.com.co", label: "contacto@sapenlinea.com.co" }] },
    ],
    copyright: "© 2026 Sistemas y Aplicaciones en Línea S.A.S. All rights reserved.",
  },
};
