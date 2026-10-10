import type { Dictionary } from "./types";

// RASCUNHO de tradução (pt-BR). Requer revisão de qualidade antes de ser aprovado (README: sem traduções automáticas sem controle).
// Os nomes comerciais de produtos e entidades mantêm a denominação oficial.
export const pt: Dictionary = {
  meta: {
    title: "SAP en Línea · Soluções web e mobile para trânsito",
    description:
      "Soluções web e mobile para órgãos públicos e organizações, com especialização em trânsito, mobilidade e gestão administrativa.",
  },
  ui: {
    skipLink: "Ir para o contato",
    homeAria: "Sistemas y Aplicaciones En Línea · Início",
    navAria: "Principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menu: "Menu",
    theme: "Tema",
    themeAria: "Alternar entre tema claro e escuro",
    demo: "Solicitar demonstração",
    language: "Idioma",
    learnMore: "Conhecer solução",
    learnMoreAria: "Conhecer a solução {name}",
    logoAlt: "Logotipo de {name}",
    mockupAlt: "Visão ilustrativa de {name}",
    heroAlt: "Vista aérea de uma avenida urbana ao entardecer com rastros de luz do trânsito",
    iteAlt: "ITE · Intelligence Transit Ecosystem",
    clientsAria: "Logotipos das organizações que confiam em nós",
  },
  nav: [
    { id: "inicio", label: "Início" },
    { id: "soluciones", label: "Soluções" },
    { id: "beneficios", label: "Benefícios" },
    { id: "nosotros", label: "Sobre nós" },
    { id: "contacto", label: "Contato" },
  ],
  hero: {
    title: "Tecnologia que transforma a mobilidade e simplifica a gestão.",
    description:
      "Desenvolvemos soluções digitais que ajudam órgãos e empresas a modernizar seus processos, organizar informações e melhorar suas operações.",
    primary: "Explorar soluções",
    secondary: "Falar com um consultor",
  },
  trust: {
    eyebrow: "Especialização",
    title: "Tecnologia especializada para desafios reais.",
    description:
      "Desenvolvemos soluções voltadas às necessidades de órgãos e organizações, com ênfase especial em trânsito, mobilidade e gestão administrativa.",
    areas: [
      { icon: "route", title: "Trânsito", description: "Processos e operação em campo" },
      { icon: "file-text", title: "Gestão administrativa", description: "Informação e acompanhamento" },
      { icon: "code", title: "Desenvolvimento de software", description: "Web e mobile sob medida" },
    ],
    clientsTitle: "Organizações que confiam em nós",
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Soluções que impulsionam uma gestão mais eficiente.",
    description:
      "Intelligence Transit Ecosystem (ITE): a suíte de aplicativos voltada ao controle, à gestão e à otimização da mobilidade inteligente.",
  },
  status: { disponible: "Disponível", desarrollo: "Em desenvolvimento", propuesta: "Proposta" },
  apps: {
    sisdrinfa: { category: "Lavratura de autos de infração", description: "Sistema de lavratura de autos de infração por meio de dispositivo PDA. Aplicativo híbrido." },
    paico: { category: "Gestão operacional", description: "Sistema de gestão operacional." },
    transitcash: { category: "Serviços e arrecadação", description: "Sistema de serviços, arrecadação e liquidação." },
    fastturn: { category: "Atendimento e senhas", description: "Sistema de senhas para os postos de atendimento." },
    contravencional: { category: "Cobrança coercitiva", description: "Sistema completo de cobrança coercitiva." },
    sadypit: { category: "Fiscalização eletrônica", description: "Sistema de gestão de fiscalização eletrônica e validação de evidências." },
    parkea: { category: "Zonas azuis", description: "Aplicativo móvel para estacionamento em zonas azuis." },
    vigia: { category: "Vigilância integrada", description: "Proposta de vigilância integrada e informações veiculares." },
  },
  benefits: {
    eyebrow: "Benefícios",
    title: "Tecnologia que agrega valor a cada processo.",
    description: "Nossas soluções buscam facilitar a gestão da informação e apoiar operações mais organizadas e eficientes.",
    items: [
      { icon: "bolt", title: "Eficiência operacional", description: "Reduzir a dependência de atividades manuais onde o produto ofereça digitalização." },
      { icon: "folder", title: "Organização da informação", description: "Facilitar o acesso e a administração dos registros operacionais." },
      { icon: "eye-search", title: "Acompanhamento e rastreabilidade", description: "Apoiar a consulta do estado e da evolução de atividades ou processos." },
      { icon: "devices", title: "Experiências digitais", description: "Facilitar tarefas por meio de ferramentas web e mobile." },
      { icon: "rocket", title: "Evolução tecnológica", description: "Adotar soluções de acordo com as necessidades de cada organização." },
    ],
  },
  services: {
    eyebrow: "Capacidades",
    title: "Desenvolvemos soluções para novos desafios.",
    description:
      "Combinamos desenvolvimento de software web e mobile com conhecimento de processos operacionais para construir ferramentas voltadas a necessidades reais.",
    items: [
      { icon: "world", title: "Desenvolvimento web", description: "Plataformas digitais e sistemas acessíveis pelo navegador." },
      { icon: "device-mobile", title: "Aplicativos móveis", description: "Soluções projetadas para operar em dispositivos móveis." },
      { icon: "code", title: "Software especializado", description: "Sistemas que atendem às necessidades específicas das organizações." },
    ],
    cta: "Conte-nos sobre seu projeto",
  },
  about: {
    eyebrow: "Sobre nós",
    title: "Conheça a Sistemas y Aplicaciones en Línea.",
    text: "Somos uma empresa colombiana de desenvolvimento de software web e mobile, focada em criar soluções para processos empresariais e institucionais. Nossa especialização em trânsito, mobilidade e gestão administrativa orienta a construção de ferramentas tecnológicas que buscam facilitar as operações de nossos clientes.",
    imageAlt: "A equipe da Sistemas y Aplicaciones en Línea reunida no escritório, com camisas polo institucionais.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes.",
    items: [
      {
        question: "Quais soluções a SAP en Línea desenvolve?",
        answer:
          "Desenvolvemos software web e mobile para órgãos e organizações, com especialização em trânsito, mobilidade e gestão administrativa. Nosso portfólio ITE inclui PAICO (gestão operacional), SISDRINFA (lavratura de autos de infração com PDA), SADYPIT (fiscalização eletrônica e validação de evidências), Contravencional (cobrança coercitiva), TransitCash (serviços, arrecadação e liquidação) e FastTurn (senhas para postos de atendimento). O PARKEA, para zonas azuis, está em desenvolvimento e o VIGÍA é uma proposta.",
      },
      {
        question: "As plataformas são voltadas apenas a órgãos de trânsito?",
        answer:
          "Nossa especialização é em trânsito, mobilidade e gestão administrativa, por isso muitas de nossas soluções atendem órgãos de trânsito e prefeituras. Também desenvolvemos software sob medida para outros órgãos e empresas que precisam digitalizar seus processos: conte-nos seu caso pelo formulário de contato.",
      },
      {
        question: "Como posso solicitar uma demonstração?",
        answer:
          "Escreva para nós pelo formulário de contato e escolha “Solicitar demonstração”. Informe sua organização e o processo que deseja melhorar, e nossa equipe entrará em contato para agendá-la.",
      },
      {
        question: "Vocês desenvolvem aplicativos web e mobile para necessidades específicas?",
        answer:
          "Sim. Além de nossos produtos, desenvolvemos plataformas web, aplicativos móveis e software especializado para necessidades específicas. Escolha “Desenvolvimento de software” no formulário de contato e conte-nos sobre o seu projeto.",
      },
      {
        question: "Como posso obter informações comerciais sobre um produto?",
        answer:
          "Escolha “Consultar um produto” no formulário de contato e informe qual deles lhe interessa. Nossa equipe orientará você sobre as opções disponíveis para a sua organização.",
      },
      {
        question: "O aplicativo de zonas azuis já está disponível?",
        answer:
          "Ainda não. O PARKEA, nosso aplicativo móvel para zonas azuis, está em desenvolvimento. Se quiser saber como está o andamento, escreva para nós pelo formulário de contato.",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre o seu próximo projeto.",
    description:
      "Conte-nos qual solução você precisa ou qual processo deseja melhorar. Nossa equipe poderá orientá-lo sobre as opções disponíveis.",
    form: {
      success: "Obrigado, recebemos sua solicitação. Entraremos em contato em breve.",
      failure: "Não foi possível enviar sua solicitação. Tente novamente.",
      optional: "opcional",
      fields: {
        name: { label: "Nome ou razão social", placeholder: "Seu nome ou o da sua organização", error: "Informe seu nome ou razão social", invalid: "Use apenas letras, números e símbolos básicos (. , & - / ( )), mínimo de 2 caracteres" },
        email: { label: "E-mail", placeholder: "nome@organizacao.com.br", error: "Informe seu e-mail", invalid: "Informe um e-mail válido, por exemplo nome@organizacao.com.br" },
        phone: { label: "Telefone ou WhatsApp", placeholder: "+55 11 90000-0000", invalid: "Use apenas números (7 a 15 dígitos); pode incluir +, espaços ou hífens" },
        interest: {
          label: "Tipo de interesse",
          placeholder: "Selecione uma opção",
          error: "Selecione um tipo de interesse",
          options: [
            { value: "demo", label: "Solicitar demonstração" },
            { value: "product", label: "Consultar um produto" },
            { value: "software", label: "Desenvolvimento de software" },
            { value: "general", label: "Informações gerais" },
          ],
        },
        message: { label: "Mensagem", placeholder: "Conte-nos o que você precisa", error: "Conte-nos o que você precisa", short: "Escreva pelo menos 10 caracteres" },
        consent: { label: "Aceito o tratamento dos meus dados pessoais conforme a ", link: "Política de Tratamento de Dados Pessoais", error: "Você deve aceitar o tratamento de dados para enviar a solicitação" },
      },
      submit: { idle: "Enviar solicitação", sending: "Enviando…", success: "Solicitação enviada", failed: "Falha no envio · Tentar novamente" },
    },
  },
  footer: {
    description:
      "Soluções tecnológicas web e mobile para órgãos e organizações, com ênfase especial em trânsito, mobilidade e gestão administrativa.",
    columns: [
      { title: "Navegação", links: [] },
      {
        title: "Legal",
        links: [
          { href: "#", label: "Política de privacidade" },
          { href: "#", label: "Tratamento de dados" },
          { href: "#", label: "Termos e condições" },
        ],
      },
      { title: "Contato", links: [{ href: "mailto:contacto@sapenlinea.com.co", label: "contacto@sapenlinea.com.co" }] },
    ],
    copyright: "© 2026 Sistemas y Aplicaciones en Línea S.A.S. Todos os direitos reservados.",
  },
};
