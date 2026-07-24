const translations = {
  en: {
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",

    "hero.eyebrow": "Software Development Consultancy",
    "hero.title": "Better software, built on better process.",
    "hero.subtitle":
      "Greentech helps companies design, manage, and improve the way they build software — from process consulting to hands-on development and training.",
    "hero.primary": "Get in touch",
    "hero.secondary": "Explore services",

    "services.eyebrow": "What we do",
    "services.title": "Services",
    "services.lead":
      "Five focused offerings that cover the full lifecycle of building great software teams.",
    "services.s1.title": "Process Improvement Consulting",
    "services.s1.desc":
      "We analyze how your team builds software and deliver practical improvements that raise quality, speed, and predictability.",
    "services.s2.title": "Software Process Management",
    "services.s2.desc":
      "End-to-end management of your software creation process, keeping delivery transparent and on track from idea to release.",
    "services.s3.title": "Software Development",
    "services.s3.desc":
      "Custom software designed, built, and delivered by an experienced team — reliable, maintainable, and made to last.",
    "services.s4.title": "Developer Training",
    "services.s4.desc":
      "Hands-on training programs that level up software developers with modern practices and tools.",
    "services.s5.title": "Engineering Management Training",
    "services.s5.desc":
      "Training for software development managers: planning, leading teams, and running healthy delivery processes.",

    "about.eyebrow": "About us",
    "about.title": "Process-driven. People-focused.",
    "about.text":
      "Greentech LTDA is a consultancy dedicated to one thing: helping organizations build software well. We combine deep engineering experience with a practical, process-driven approach — so your team ships better software, faster, and keeps getting better at it.",
    "about.p1": "Practical recommendations, not shelf-ware reports",
    "about.p2": "Experienced engineers and managers",
    "about.p3": "Training designed for real day-to-day work",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your project",
    "contact.text":
      "Tell us where you are and where you want to go — we'll reply with how we can help.",
    "contact.send": "Send us an email",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    "footer.rights": "© 2026 Greentech LTDA. All rights reserved.",

    "meta.title": "Greentech LTDA — Software Development Consultancy",
  },

  pt: {
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.cta": "Fale conosco",

    "hero.eyebrow": "Consultoria em Desenvolvimento de Software",
    "hero.title": "Software melhor, construído sobre processos melhores.",
    "hero.subtitle":
      "A Greentech ajuda empresas a projetar, gerenciar e melhorar a forma como constroem software — da consultoria de processos ao desenvolvimento e treinamento.",
    "hero.primary": "Fale conosco",
    "hero.secondary": "Conheça os serviços",

    "services.eyebrow": "O que fazemos",
    "services.title": "Serviços",
    "services.lead":
      "Cinco frentes de atuação que cobrem todo o ciclo de construção de ótimos times de software.",
    "services.s1.title": "Consultoria em Melhoria de Processos",
    "services.s1.desc":
      "Analisamos como seu time desenvolve software e entregamos melhorias práticas que aumentam qualidade, velocidade e previsibilidade.",
    "services.s2.title": "Gerenciamento de Processo de Software",
    "services.s2.desc":
      "Gestão de ponta a ponta do seu processo de criação de software, mantendo a entrega transparente e no rumo certo, da ideia ao lançamento.",
    "services.s3.title": "Desenvolvimento de Software",
    "services.s3.desc":
      "Software sob medida projetado, construído e entregue por um time experiente — confiável, sustentável e feito para durar.",
    "services.s4.title": "Treinamento de Desenvolvedores",
    "services.s4.desc":
      "Programas de treinamento prático que elevam o nível de desenvolvedores de software com práticas e ferramentas modernas.",
    "services.s5.title": "Treinamento de Gestores de Desenvolvimento",
    "services.s5.desc":
      "Treinamento para gerentes de desenvolvimento de software: planejamento, liderança de times e condução de processos de entrega saudáveis.",

    "about.eyebrow": "Sobre nós",
    "about.title": "Guiados por processo. Focados em pessoas.",
    "about.text":
      "A Greentech LTDA é uma consultoria dedicada a uma coisa: ajudar organizações a construir software bem. Unimos experiência profunda em engenharia a uma abordagem prática e orientada a processos — para que seu time entregue software melhor, mais rápido, e continue evoluindo.",
    "about.p1": "Recomendações práticas, não relatórios de gaveta",
    "about.p2": "Engenheiros e gestores experientes",
    "about.p3": "Treinamentos pensados para o dia a dia real",

    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar sobre o seu projeto",
    "contact.text":
      "Conte onde você está e aonde quer chegar — responderemos com a forma como podemos ajudar.",
    "contact.send": "Enviar e-mail",
    "contact.copy": "Copiar",
    "contact.copied": "Copiado!",

    "footer.rights": "© 2026 Greentech LTDA. Todos os direitos reservados.",

    "meta.title": "Greentech LTDA — Consultoria em Desenvolvimento de Software",
  },
};

let currentLang = "en";

function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.title = dict["meta.title"];

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("greentech-lang", lang);
  } catch (_) {
    /* private mode — language just won't persist */
  }
}

document.querySelectorAll(".lang-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const copyBtn = document.getElementById("copy-email");
copyBtn.addEventListener("click", async () => {
  const email = document.getElementById("email-text").textContent.trim();

  try {
    await navigator.clipboard.writeText(email);
  } catch (_) {
    const ta = document.createElement("textarea");
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  const label = copyBtn.querySelector("[data-i18n]");
  copyBtn.classList.add("copied");
  label.textContent = translations[currentLang]["contact.copied"];
  setTimeout(() => {
    copyBtn.classList.remove("copied");
    label.textContent = translations[currentLang]["contact.copy"];
  }, 2000);
});

let saved = null;
try {
  saved = localStorage.getItem("greentech-lang");
} catch (_) {}

setLanguage(saved === "pt" ? "pt" : "en");
