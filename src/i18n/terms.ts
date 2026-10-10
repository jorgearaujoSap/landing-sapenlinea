import type { LegalDoc } from "./policy";
import type { Locale } from "./types";

// BORRADOR · Términos y condiciones de uso del sitio web.
// El sitio es informativo (no vende ni cobra en línea). Todo lo marcado con [pendiente] requiere validación del
// área legal antes de publicarse.
export const terms: Record<Locale, LegalDoc> = {
  es: {
    metaTitle: "Términos y condiciones de uso · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Términos y condiciones de uso del sitio.",
    updated: "Última actualización: 9 de octubre de 2026",
    intro:
      "Estos términos regulan el acceso y el uso de este sitio web. Al navegar por él o enviar el formulario de contacto aceptas lo que se describe a continuación.",
    toc: "En esta página",
    sections: [
      {
        title: "Titular del sitio",
        list: [
          "Razón social: Sistemas y Aplicaciones en Línea S.A.S. («SAP en Línea»).",
          "NIT: [pendiente]",
          "Domicilio: [pendiente]",
          "Correo de contacto: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Alcance y aceptación",
        body: [
          "Este sitio presenta de forma informativa a SAP en Línea, sus soluciones de software web y móvil y sus servicios de desarrollo. No es una tienda: no se realizan compras, pagos ni contratación en línea a través del sitio.",
          "Si no estás de acuerdo con estos términos, te pedimos no usar el sitio.",
        ],
      },
      {
        title: "Uso permitido",
        body: ["Te comprometes a usar el sitio de forma lícita y respetuosa. En particular, no debes:"],
        list: [
          "Usarlo para actividades ilegales, fraudulentas o que vulneren derechos de terceros.",
          "Intentar acceder sin autorización a sistemas, cuentas o información, ni alterar su funcionamiento.",
          "Enviar mediante el formulario información falsa, de terceros sin su permiso, spam o contenido ofensivo o malicioso.",
          "Automatizar el envío del formulario o sobrecargar el sitio con solicitudes masivas.",
          "Suplantar a otra persona o entidad.",
        ],
      },
      {
        title: "Carácter informativo del contenido",
        body: [
          "Las descripciones de productos, beneficios y servicios son informativas y pueden cambiar sin previo aviso. No constituyen una oferta vinculante ni una promesa de resultados.",
          "Las imágenes, capturas y maquetas de los aplicativos son ilustrativas y pueden no reflejar la versión vigente del producto. El estado de cada producto (disponible, en desarrollo o propuesta) puede variar: por ejemplo, PARKEA se encuentra en desarrollo y VIGÍA es una propuesta.",
          "Las condiciones comerciales, técnicas y de servicio de cualquier proyecto se acuerdan por separado y por escrito.",
        ],
      },
      {
        title: "Propiedad intelectual",
        body: [
          "El sitio, su diseño, textos, software, marcas, nombres y logotipos de SAP en Línea y de sus productos son propiedad de SAP en Línea o de sus licenciantes y están protegidos por las normas de propiedad intelectual.",
          "Los nombres y logotipos de entidades clientes o de terceros pertenecen a sus titulares y se muestran solo como referencia.",
          "No está permitido copiar, reproducir, distribuir, modificar o usar el contenido con fines comerciales sin autorización previa y por escrito.",
        ],
      },
      {
        title: "Formulario de contacto",
        body: [
          "Enviar el formulario no genera una relación contractual ni obliga a SAP en Línea a prestar un servicio. Intentaremos responder en un plazo razonable, sin que esto constituya una garantía de tiempos.",
          "Debes ingresar información veraz y actualizada. El tratamiento de tus datos personales se rige por nuestra Política de tratamiento de datos personales.",
        ],
      },
      {
        title: "Enlaces y servicios de terceros",
        body: [
          "El sitio puede incluir enlaces o recursos de terceros (por ejemplo, tipografías de Google Fonts). SAP en Línea no controla esos sitios o servicios y no responde por su contenido ni por sus políticas.",
        ],
      },
      {
        title: "Disponibilidad y límite de responsabilidad",
        body: [
          "Hacemos esfuerzos razonables para mantener el sitio disponible y sin errores, pero se ofrece «tal como está»: no garantizamos disponibilidad ininterrumpida ni la ausencia total de fallos.",
          "En la medida permitida por la ley, SAP en Línea no responde por daños indirectos derivados del uso o de la imposibilidad de usar el sitio, ni por decisiones tomadas con base en su contenido informativo. Esto no limita los derechos que la ley reconoce a los usuarios.",
        ],
      },
      {
        title: "Modificaciones",
        body: [
          "Podemos actualizar estos términos y el contenido del sitio en cualquier momento. La versión vigente es la publicada en esta página, con su fecha de actualización.",
        ],
      },
      {
        title: "Ley aplicable y jurisdicción",
        body: [
          "Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia se someterá a los jueces competentes de la República de Colombia.",
        ],
      },
      {
        title: "Contacto",
        body: ["Para dudas sobre estos términos escríbenos a contacto@sapenlinea.com.co."],
      },
    ],
    back: "Volver al inicio",
  },
  en: {
    metaTitle: "Terms and Conditions of Use · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Terms and conditions of use.",
    updated: "Last updated: October 9, 2026",
    intro:
      "These terms govern access to and use of this website. By browsing it or submitting the contact form you accept what is described below.",
    toc: "On this page",
    sections: [
      {
        title: "Site owner",
        list: [
          "Company name: Sistemas y Aplicaciones en Línea S.A.S. (“SAP en Línea”).",
          "Tax ID (NIT): [pending]",
          "Registered address: [pending]",
          "Contact email: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Scope and acceptance",
        body: [
          "This site presents SAP en Línea, its web and mobile software solutions and its development services for information purposes. It is not a store: no purchases, payments or contracting are made online through the site.",
          "If you do not agree with these terms, please do not use the site.",
        ],
      },
      {
        title: "Permitted use",
        body: ["You agree to use the site lawfully and respectfully. In particular, you must not:"],
        list: [
          "Use it for illegal or fraudulent activities or activities that infringe third-party rights.",
          "Try to access systems, accounts or information without authorization, or interfere with their operation.",
          "Submit through the form false information, third-party data without their permission, spam or offensive or malicious content.",
          "Automate form submissions or overload the site with mass requests.",
          "Impersonate another person or organization.",
        ],
      },
      {
        title: "Informational nature of the content",
        body: [
          "Descriptions of products, benefits and services are informational and may change without notice. They are not a binding offer or a promise of results.",
          "Images, screenshots and mockups of the applications are illustrative and may not reflect the current version of the product. The status of each product (available, in development or proposal) may change: for example, PARKEA is in development and VIGÍA is a proposal.",
          "The commercial, technical and service conditions of any project are agreed separately and in writing.",
        ],
      },
      {
        title: "Intellectual property",
        body: [
          "The site, its design, texts, software, trademarks, names and logos of SAP en Línea and its products belong to SAP en Línea or its licensors and are protected by intellectual property law.",
          "Names and logos of client organizations or third parties belong to their owners and are shown for reference only.",
          "Copying, reproducing, distributing, modifying or using the content for commercial purposes without prior written authorization is not allowed.",
        ],
      },
      {
        title: "Contact form",
        body: [
          "Submitting the form does not create a contractual relationship or oblige SAP en Línea to provide a service. We will try to answer within a reasonable time, which is not a guarantee of response times.",
          "You must enter truthful and up-to-date information. The processing of your personal data is governed by our Personal Data Processing Policy.",
        ],
      },
      {
        title: "Third-party links and services",
        body: [
          "The site may include third-party links or resources (for example, Google Fonts typography). SAP en Línea does not control those sites or services and is not responsible for their content or policies.",
        ],
      },
      {
        title: "Availability and limitation of liability",
        body: [
          "We make reasonable efforts to keep the site available and error-free, but it is provided “as is”: we do not guarantee uninterrupted availability or the complete absence of faults.",
          "To the extent permitted by law, SAP en Línea is not liable for indirect damages arising from the use of, or inability to use, the site, or for decisions made based on its informational content. This does not limit the rights that the law grants to users.",
        ],
      },
      {
        title: "Changes",
        body: [
          "We may update these terms and the site content at any time. The current version is the one published on this page, with its update date.",
        ],
      },
      {
        title: "Governing law and jurisdiction",
        body: [
          "These terms are governed by the laws of the Republic of Colombia. Any dispute will be submitted to the competent courts of the Republic of Colombia.",
        ],
      },
      {
        title: "Contact",
        body: ["For questions about these terms write to contacto@sapenlinea.com.co."],
      },
    ],
    back: "Back to home",
  },
  pt: {
    metaTitle: "Termos e Condições de Uso · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Termos e condições de uso do site.",
    updated: "Última atualização: 9 de outubro de 2026",
    intro:
      "Estes termos regulam o acesso e o uso deste site. Ao navegar por ele ou enviar o formulário de contato, você aceita o que está descrito a seguir.",
    toc: "Nesta página",
    sections: [
      {
        title: "Titular do site",
        list: [
          "Razão social: Sistemas y Aplicaciones en Línea S.A.S. («SAP en Línea»).",
          "NIT (identificação fiscal): [pendente]",
          "Endereço: [pendente]",
          "E-mail de contato: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Alcance e aceitação",
        body: [
          "Este site apresenta, de forma informativa, a SAP en Línea, suas soluções de software web e mobile e seus serviços de desenvolvimento. Não é uma loja: não são realizadas compras, pagamentos nem contratações on-line por meio do site.",
          "Se você não concorda com estes termos, pedimos que não use o site.",
        ],
      },
      {
        title: "Uso permitido",
        body: ["Você se compromete a usar o site de forma lícita e respeitosa. Em particular, não deve:"],
        list: [
          "Usá-lo para atividades ilegais, fraudulentas ou que violem direitos de terceiros.",
          "Tentar acessar sem autorização sistemas, contas ou informações, nem alterar seu funcionamento.",
          "Enviar pelo formulário informações falsas, dados de terceiros sem permissão, spam ou conteúdo ofensivo ou malicioso.",
          "Automatizar o envio do formulário ou sobrecarregar o site com solicitações em massa.",
          "Fazer-se passar por outra pessoa ou entidade.",
        ],
      },
      {
        title: "Caráter informativo do conteúdo",
        body: [
          "As descrições de produtos, benefícios e serviços são informativas e podem mudar sem aviso prévio. Não constituem oferta vinculante nem promessa de resultados.",
          "As imagens, capturas de tela e maquetes dos aplicativos são ilustrativas e podem não refletir a versão atual do produto. O estado de cada produto (disponível, em desenvolvimento ou proposta) pode variar: por exemplo, o PARKEA está em desenvolvimento e o VIGÍA é uma proposta.",
          "As condições comerciais, técnicas e de serviço de qualquer projeto são acordadas separadamente e por escrito.",
        ],
      },
      {
        title: "Propriedade intelectual",
        body: [
          "O site, seu design, textos, software, marcas, nomes e logotipos da SAP en Línea e de seus produtos pertencem à SAP en Línea ou a seus licenciantes e são protegidos pelas normas de propriedade intelectual.",
          "Os nomes e logotipos de órgãos clientes ou de terceiros pertencem a seus titulares e são exibidos apenas como referência.",
          "Não é permitido copiar, reproduzir, distribuir, modificar ou usar o conteúdo para fins comerciais sem autorização prévia e por escrito.",
        ],
      },
      {
        title: "Formulário de contato",
        body: [
          "O envio do formulário não gera relação contratual nem obriga a SAP en Línea a prestar um serviço. Procuraremos responder em prazo razoável, o que não constitui garantia de prazos.",
          "Você deve informar dados verdadeiros e atualizados. O tratamento dos seus dados pessoais é regido pela nossa Política de Tratamento de Dados Pessoais.",
        ],
      },
      {
        title: "Links e serviços de terceiros",
        body: [
          "O site pode incluir links ou recursos de terceiros (por exemplo, a tipografia do Google Fonts). A SAP en Línea não controla esses sites ou serviços e não se responsabiliza por seu conteúdo nem por suas políticas.",
        ],
      },
      {
        title: "Disponibilidade e limite de responsabilidade",
        body: [
          "Fazemos esforços razoáveis para manter o site disponível e sem erros, mas ele é oferecido «como está»: não garantimos disponibilidade ininterrupta nem a ausência total de falhas.",
          "Na medida permitida por lei, a SAP en Línea não responde por danos indiretos decorrentes do uso ou da impossibilidade de uso do site, nem por decisões tomadas com base em seu conteúdo informativo. Isso não limita os direitos que a lei reconhece aos usuários.",
        ],
      },
      {
        title: "Alterações",
        body: [
          "Podemos atualizar estes termos e o conteúdo do site a qualquer momento. A versão vigente é a publicada nesta página, com sua data de atualização.",
        ],
      },
      {
        title: "Lei aplicável e foro",
        body: [
          "Estes termos são regidos pelas leis da República da Colômbia. Qualquer controvérsia será submetida aos juízes competentes da República da Colômbia.",
        ],
      },
      {
        title: "Contato",
        body: ["Para dúvidas sobre estes termos, escreva para contacto@sapenlinea.com.co."],
      },
    ],
    back: "Voltar ao início",
  },
};

/** Ruta de los términos (un slug por idioma). */
export const termsSlug: Record<Locale, string> = {
  es: "terminos-y-condiciones",
  en: "terms-and-conditions",
  pt: "termos-e-condicoes",
};

export function termsPath(locale: Locale): string {
  return `/${locale}/${termsSlug[locale]}/`;
}
