import type { Locale } from "./types";

export interface LegalSection {
  title: string;
  body?: string[];
  list?: string[];
  /** nota al final de la sección (p. ej. puntos pendientes de validación) */
  note?: string;
}

export interface LegalDoc {
  metaTitle: string;
  eyebrow: string;
  title: string;
  /** aviso de borrador (solo mientras el documento no esté vigente) */
  draft?: string;
  updated: string;
  intro: string;
  toc: string;
  sections: LegalSection[];
  back: string;
}

// BORRADOR · Política de tratamiento de datos personales (marco: Colombia, Ley 1581 de 2012).
// Describe el funcionamiento ACTUAL del sitio. Todo lo marcado con [pendiente] requiere validación del área legal
// antes de publicarse.
export const policies: Record<Locale, LegalDoc> = {
  es: {
    metaTitle: "Política de tratamiento de datos personales · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Política de tratamiento de datos personales.",
    updated: "Última actualización: 9 de octubre de 2026",
    intro:
      "En Sistemas y Aplicaciones en Línea S.A.S. queremos que sepas qué información recibimos cuando nos escribes desde este sitio, para qué la usamos, con quién se comparte y cómo puedes ejercer tus derechos como titular.",
    toc: "En esta página",
    sections: [
      {
        title: "Responsable del tratamiento",
        body: [
          "Sistemas y Aplicaciones en Línea S.A.S. (en adelante, «SAP en Línea») es la responsable del tratamiento de los datos personales recibidos a través de este sitio web.",
        ],
        list: [
          "Razón social: Sistemas y Aplicaciones en Línea S.A.S.",
          "NIT: [pendiente]",
          "Domicilio: [pendiente]",
          "Correo para consultas y reclamos: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Marco normativo",
        body: [
          "Esta política se elabora conforme al artículo 15 de la Constitución Política de Colombia, la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y las demás normas que los modifiquen o complementen.",
        ],
      },
      {
        title: "Datos personales que recopilamos",
        body: ["Solo recibimos los datos que escribes en el formulario de contacto:"],
        list: [
          "Obligatorios: nombre o razón social, correo electrónico, tipo de interés y mensaje.",
          "Opcional: teléfono o WhatsApp.",
          "Técnico: el idioma de la página desde la que nos escribes.",
        ],
        note: "No solicitamos datos sensibles (por ejemplo, salud, origen racial, orientación política o datos biométricos) ni datos de menores de edad. Te pedimos no incluirlos en el mensaje. Este sitio está dirigido a organizaciones y a personas mayores de edad.",
      },
      {
        title: "Finalidades del tratamiento",
        body: ["Usamos tus datos únicamente para:"],
        list: [
          "Atender y responder tu consulta o solicitud de contacto.",
          "Coordinar demostraciones de nuestras soluciones cuando las solicites.",
          "Brindarte información comercial sobre los productos y servicios por los que preguntes.",
          "Hacer seguimiento a tu solicitud en la etapa previa a una eventual relación contractual.",
          "Cumplir obligaciones legales y atender requerimientos de autoridades competentes.",
        ],
        note: "Cualquier finalidad adicional, como el envío de novedades, requerirá tu autorización previa y expresa.",
      },
      {
        title: "Autorización",
        body: [
          "Al marcar la casilla «Acepto el tratamiento de mis datos personales» y enviar el formulario, otorgas tu autorización previa, expresa e informada para el tratamiento descrito en esta política.",
          "Puedes revocarla o solicitar la supresión de tus datos en cualquier momento, salvo cuando exista un deber legal o contractual que lo impida.",
        ],
      },
      {
        title: "Principios aplicables",
        body: ["El tratamiento se rige por los principios de la Ley 1581 de 2012:"],
        list: [
          "Legalidad: el tratamiento se ajusta a la ley y a sus normas reglamentarias.",
          "Finalidad: los datos se usan solo para los fines informados.",
          "Libertad: el tratamiento requiere tu consentimiento previo, expreso e informado.",
          "Veracidad o calidad: la información debe ser veraz, completa y actualizada.",
          "Transparencia: puedes saber en cualquier momento qué datos tenemos de ti.",
          "Acceso y circulación restringida: solo acceden a los datos las personas autorizadas.",
          "Seguridad: se aplican medidas para evitar pérdida, adulteración o uso no autorizado.",
          "Confidencialidad: quienes intervienen en el tratamiento deben mantener la reserva de la información.",
        ],
      },
      {
        title: "Derechos del titular",
        body: ["Como titular de los datos tienes derecho a:"],
        list: [
          "Conocer, actualizar y rectificar tus datos personales.",
          "Solicitar prueba de la autorización otorgada.",
          "Ser informado sobre el uso que se ha dado a tus datos.",
          "Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.",
          "Revocar la autorización y/o solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías.",
          "Acceder de forma gratuita a tus datos personales objeto de tratamiento.",
        ],
      },
      {
        title: "Cómo ejercer tus derechos",
        body: [
          "Escríbenos a contacto@sapenlinea.com.co indicando tu nombre completo, un medio de contacto, tu documento de identificación y la descripción clara de tu solicitud.",
        ],
        list: [
          "Consultas: se responden en un máximo de diez (10) días hábiles, prorrogables por cinco (5) días hábiles más con aviso de los motivos de la demora.",
          "Reclamos (corrección, actualización, supresión o revocatoria): se responden en un máximo de quince (15) días hábiles, prorrogables por ocho (8) días hábiles más. Si el reclamo está incompleto, te pediremos completarlo dentro de los cinco (5) días siguientes.",
          "Si no estás conforme con la respuesta, puedes acudir a la Superintendencia de Industria y Comercio una vez agotado el trámite ante SAP en Línea.",
        ],
      },
      {
        title: "Transferencia y transmisión de datos",
        body: [
          "No vendemos ni cedemos tus datos. Los datos del formulario pueden ser procesados por proveedores que nos prestan servicios (por ejemplo, alojamiento del sitio, recepción de formularios y correo electrónico) bajo deberes de confidencialidad y seguridad.",
        ],
      },
      {
        title: "Seguridad de la información",
        body: [
          "Adoptamos medidas técnicas, humanas y administrativas razonables para proteger los datos contra pérdida, acceso o uso no autorizado, como la conexión cifrada (HTTPS), la validación de los datos recibidos y el acceso restringido al personal autorizado.",
        ],
      },
      {
        title: "Conservación",
        body: [
          "Conservamos tus datos mientras sean necesarios para las finalidades descritas y durante los plazos exigidos por la ley. Después se suprimen o se anonimizan.",
        ],
      },
      {
        title: "Cookies, almacenamiento local y terceros",
        body: [
          "Este sitio no usa cookies de analítica, publicidad ni seguimiento. Solo utiliza el almacenamiento local de tu navegador para recordar tus preferencias:",
        ],
        list: [
          "theme: tu elección de tema claro u oscuro. Permanece hasta que borres los datos del sitio.",
          "lang: el idioma que elegiste (español, inglés o portugués). Permanece hasta que borres los datos del sitio.",
        ],
        note: "Para mostrar la tipografía, el sitio carga fuentes desde Google Fonts (fonts.googleapis.com y fonts.gstatic.com); al hacerlo, Google puede recibir tu dirección IP y datos técnicos del navegador. Si en el futuro se incorporan herramientas de medición u otras cookies no esenciales, esta sección se actualizará y se solicitará tu consentimiento antes de usarlas.",
      },
      {
        title: "Vigencia y cambios",
        body: [
          "Esta política rige desde el 9 de octubre de 2026. Publicaremos en esta página cualquier cambio sustancial y, cuando la ley lo exija, lo comunicaremos a los titulares.",
        ],
      },
    ],
    back: "Volver al inicio",
  },
  en: {
    metaTitle: "Personal Data Processing Policy · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Personal data processing policy.",
    updated: "Last updated: October 9, 2026",
    intro:
      "At Sistemas y Aplicaciones en Línea S.A.S. we want you to know what information we receive when you write to us from this site, what we use it for, who it is shared with and how you can exercise your rights as a data subject.",
    toc: "On this page",
    sections: [
      {
        title: "Data controller",
        body: [
          "Sistemas y Aplicaciones en Línea S.A.S. (“SAP en Línea”) is the controller of the personal data received through this website.",
        ],
        list: [
          "Company name: Sistemas y Aplicaciones en Línea S.A.S.",
          "Tax ID (NIT): [pending]",
          "Registered address: [pending]",
          "Email for inquiries and complaints: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Legal framework",
        body: [
          "This policy is prepared in accordance with article 15 of the Colombian Constitution, Statutory Law 1581 of 2012, Decree 1377 of 2013 (compiled in Decree 1074 of 2015) and any rules that amend or complement them.",
        ],
      },
      {
        title: "Personal data we collect",
        body: ["We only receive the data you enter in the contact form:"],
        list: [
          "Required: name or company name, email address, type of interest and message.",
          "Optional: phone or WhatsApp number.",
          "Technical: the language of the page you write from.",
        ],
        note: "We do not ask for sensitive data (for example health, racial origin, political orientation or biometric data) or data of minors. Please do not include them in your message. This site is aimed at organizations and adults.",
      },
      {
        title: "Purposes of processing",
        body: ["We use your data only to:"],
        list: [
          "Handle and answer your inquiry or contact request.",
          "Arrange demos of our solutions when you ask for them.",
          "Give you commercial information about the products and services you ask about.",
          "Follow up on your request in the stage before a possible contractual relationship.",
          "Comply with legal obligations and respond to requests from competent authorities.",
        ],
        note: "Any additional purpose, such as sending news, will require your prior and express authorization.",
      },
      {
        title: "Authorization",
        body: [
          "By ticking “I accept the processing of my personal data” and submitting the form, you give your prior, express and informed authorization for the processing described in this policy.",
          "You may revoke it or request the deletion of your data at any time, unless a legal or contractual duty prevents it.",
        ],
      },
      {
        title: "Applicable principles",
        body: ["Processing is governed by the principles of Law 1581 of 2012:"],
        list: [
          "Legality: processing complies with the law and its regulations.",
          "Purpose: data is used only for the purposes stated.",
          "Freedom: processing requires your prior, express and informed consent.",
          "Accuracy: information must be truthful, complete and up to date.",
          "Transparency: you can find out at any time what data we hold about you.",
          "Restricted access and circulation: only authorized people can access the data.",
          "Security: measures are applied to prevent loss, alteration or unauthorized use.",
          "Confidentiality: everyone involved in processing must keep the information confidential.",
        ],
      },
      {
        title: "Your rights as a data subject",
        body: ["As a data subject you have the right to:"],
        list: [
          "Access, update and correct your personal data.",
          "Request proof of the authorization you gave.",
          "Be informed about how your data has been used.",
          "File complaints with the Superintendence of Industry and Commerce (SIC) for violations of the law.",
          "Revoke the authorization and/or request deletion of your data when principles, rights and guarantees are not respected.",
          "Access your processed personal data free of charge.",
        ],
      },
      {
        title: "How to exercise your rights",
        body: [
          "Write to contacto@sapenlinea.com.co stating your full name, a way to contact you, your ID document and a clear description of your request.",
        ],
        list: [
          "Inquiries: answered within a maximum of ten (10) business days, extendable by five (5) more business days with notice of the reasons for the delay.",
          "Complaints (correction, update, deletion or revocation): answered within a maximum of fifteen (15) business days, extendable by eight (8) more business days. If the complaint is incomplete, we will ask you to complete it within the following five (5) days.",
          "If you are not satisfied with the answer, you may go to the Superintendence of Industry and Commerce once the procedure with SAP en Línea has been exhausted.",
        ],
      },
      {
        title: "Transfers and transmissions of data",
        body: [
          "We do not sell or assign your data. The form data may be processed by providers that give us services (for example site hosting, form handling and email) under duties of confidentiality and security.",
        ],
      },
      {
        title: "Information security",
        body: [
          "We adopt reasonable technical, human and administrative measures to protect data against loss, unauthorized access or use, such as an encrypted connection (HTTPS), validation of the data received and restricted access for authorized staff.",
        ],
      },
      {
        title: "Retention",
        body: [
          "We keep your data as long as it is needed for the purposes described and for the periods required by law. Afterwards it is deleted or anonymized.",
        ],
      },
      {
        title: "Cookies, local storage and third parties",
        body: [
          "This site does not use analytics, advertising or tracking cookies. It only uses your browser's local storage to remember your preferences:",
        ],
        list: [
          "theme: your choice of light or dark theme. It stays until you clear the site's data.",
          "lang: the language you chose (Spanish, English or Portuguese). It stays until you clear the site's data.",
        ],
        note: "To display the typography, the site loads fonts from Google Fonts (fonts.googleapis.com and fonts.gstatic.com); when doing so, Google may receive your IP address and technical browser data. If measurement tools or other non-essential cookies are added in the future, this section will be updated and your consent will be requested before using them.",
      },
      {
        title: "Effective date and changes",
        body: [
          "This policy is effective from October 9, 2026. We will publish any substantial change on this page and, where the law requires it, notify data subjects.",
        ],
      },
    ],
    back: "Back to home",
  },
  pt: {
    metaTitle: "Política de Tratamento de Dados Pessoais · Sistemas y Aplicaciones en Línea S.A.S.",
    eyebrow: "Legal",
    title: "Política de tratamento de dados pessoais.",
    updated: "Última atualização: 9 de outubro de 2026",
    intro:
      "Na Sistemas y Aplicaciones en Línea S.A.S. queremos que você saiba quais informações recebemos quando você nos escreve por este site, para que as usamos, com quem são compartilhadas e como você pode exercer seus direitos como titular.",
    toc: "Nesta página",
    sections: [
      {
        title: "Responsável pelo tratamento",
        body: [
          "A Sistemas y Aplicaciones en Línea S.A.S. («SAP en Línea») é a responsável pelo tratamento dos dados pessoais recebidos por meio deste site.",
        ],
        list: [
          "Razão social: Sistemas y Aplicaciones en Línea S.A.S.",
          "NIT (identificação fiscal): [pendente]",
          "Endereço: [pendente]",
          "E-mail para consultas e reclamações: contacto@sapenlinea.com.co",
        ],
      },
      {
        title: "Marco normativo",
        body: [
          "Esta política é elaborada de acordo com o artigo 15 da Constituição Política da Colômbia, a Lei Estatutária 1581 de 2012, o Decreto 1377 de 2013 (compilado no Decreto 1074 de 2015) e as demais normas que os modifiquem ou complementem.",
        ],
      },
      {
        title: "Dados pessoais que coletamos",
        body: ["Recebemos apenas os dados que você informa no formulário de contato:"],
        list: [
          "Obrigatórios: nome ou razão social, e-mail, tipo de interesse e mensagem.",
          "Opcional: telefone ou WhatsApp.",
          "Técnico: o idioma da página a partir da qual você nos escreve.",
        ],
        note: "Não solicitamos dados sensíveis (por exemplo, saúde, origem racial, orientação política ou dados biométricos) nem dados de menores de idade. Pedimos que não os inclua na mensagem. Este site é direcionado a organizações e a pessoas maiores de idade.",
      },
      {
        title: "Finalidades do tratamento",
        body: ["Usamos seus dados apenas para:"],
        list: [
          "Atender e responder à sua consulta ou solicitação de contato.",
          "Agendar demonstrações de nossas soluções quando você as solicitar.",
          "Enviar informações comerciais sobre os produtos e serviços que você consultar.",
          "Acompanhar sua solicitação na etapa anterior a uma eventual relação contratual.",
          "Cumprir obrigações legais e atender a requisições de autoridades competentes.",
        ],
        note: "Qualquer finalidade adicional, como o envio de novidades, exigirá sua autorização prévia e expressa.",
      },
      {
        title: "Autorização",
        body: [
          "Ao marcar a caixa «Aceito o tratamento dos meus dados pessoais» e enviar o formulário, você concede sua autorização prévia, expressa e informada para o tratamento descrito nesta política.",
          "Você pode revogá-la ou solicitar a exclusão de seus dados a qualquer momento, exceto quando houver um dever legal ou contratual que o impeça.",
        ],
      },
      {
        title: "Princípios aplicáveis",
        body: ["O tratamento segue os princípios da Lei 1581 de 2012:"],
        list: [
          "Legalidade: o tratamento respeita a lei e seus regulamentos.",
          "Finalidade: os dados são usados apenas para os fins informados.",
          "Liberdade: o tratamento exige seu consentimento prévio, expresso e informado.",
          "Veracidade ou qualidade: a informação deve ser verdadeira, completa e atualizada.",
          "Transparência: você pode saber a qualquer momento quais dados temos sobre você.",
          "Acesso e circulação restrita: somente pessoas autorizadas acessam os dados.",
          "Segurança: são aplicadas medidas para evitar perda, alteração ou uso não autorizado.",
          "Confidencialidade: quem participa do tratamento deve manter sigilo da informação.",
        ],
      },
      {
        title: "Direitos do titular",
        body: ["Como titular dos dados, você tem direito a:"],
        list: [
          "Conhecer, atualizar e corrigir seus dados pessoais.",
          "Solicitar prova da autorização concedida.",
          "Ser informado sobre o uso que foi dado aos seus dados.",
          "Apresentar reclamações à Superintendência de Indústria e Comércio (SIC) por violações à lei.",
          "Revogar a autorização e/ou solicitar a exclusão de seus dados quando os princípios, direitos e garantias não forem respeitados.",
          "Acessar gratuitamente seus dados pessoais objeto de tratamento.",
        ],
      },
      {
        title: "Como exercer seus direitos",
        body: [
          "Escreva para contacto@sapenlinea.com.co informando seu nome completo, um meio de contato, seu documento de identificação e a descrição clara da sua solicitação.",
        ],
        list: [
          "Consultas: respondidas em no máximo dez (10) dias úteis, prorrogáveis por mais cinco (5) dias úteis, com aviso dos motivos do atraso.",
          "Reclamações (correção, atualização, exclusão ou revogação): respondidas em no máximo quinze (15) dias úteis, prorrogáveis por mais oito (8) dias úteis. Se a reclamação estiver incompleta, pediremos que você a complete nos cinco (5) dias seguintes.",
          "Se não estiver satisfeito com a resposta, você pode recorrer à Superintendência de Indústria e Comércio após esgotar o trâmite junto à SAP en Línea.",
        ],
      },
      {
        title: "Transferência e transmissão de dados",
        body: [
          "Não vendemos nem cedemos seus dados. Os dados do formulário podem ser processados por fornecedores que nos prestam serviços (por exemplo, hospedagem do site, recebimento de formulários e e-mail) sob deveres de confidencialidade e segurança.",
        ],
      },
      {
        title: "Segurança da informação",
        body: [
          "Adotamos medidas técnicas, humanas e administrativas razoáveis para proteger os dados contra perda, acesso ou uso não autorizado, como conexão criptografada (HTTPS), validação dos dados recebidos e acesso restrito à equipe autorizada.",
        ],
      },
      {
        title: "Conservação",
        body: [
          "Conservamos seus dados enquanto forem necessários para as finalidades descritas e pelos prazos exigidos em lei. Depois, eles são excluídos ou anonimizados.",
        ],
      },
      {
        title: "Cookies, armazenamento local e terceiros",
        body: [
          "Este site não usa cookies de análise, publicidade nem rastreamento. Ele utiliza apenas o armazenamento local do seu navegador para lembrar suas preferências:",
        ],
        list: [
          "theme: sua escolha de tema claro ou escuro. Permanece até você apagar os dados do site.",
          "lang: o idioma que você escolheu (espanhol, inglês ou português). Permanece até você apagar os dados do site.",
        ],
        note: "Para exibir a tipografia, o site carrega fontes do Google Fonts (fonts.googleapis.com e fonts.gstatic.com); ao fazê-lo, o Google pode receber seu endereço IP e dados técnicos do navegador. Se no futuro forem incorporadas ferramentas de medição ou outros cookies não essenciais, esta seção será atualizada e seu consentimento será solicitado antes de usá-los.",
      },
      {
        title: "Vigência e alterações",
        body: [
          "Esta política vigora a partir de 9 de outubro de 2026. Publicaremos nesta página qualquer alteração substancial e, quando a lei exigir, a comunicaremos aos titulares.",
        ],
      },
    ],
    back: "Voltar ao início",
  },
};

/** Ruta de la política (un slug por idioma). */
export const policySlug: Record<Locale, string> = {
  es: "politica-de-datos",
  en: "data-policy",
  pt: "politica-de-dados",
};

export function policyPath(locale: Locale): string {
  return `/${locale}/${policySlug[locale]}/`;
}
