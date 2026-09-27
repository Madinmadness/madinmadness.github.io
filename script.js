// Avisa o CSS que o JS está rodando (as animações de "aparecer ao rolar"
// só escondem o conteúdo quando o JS existe pra mostrar de volta)
document.documentElement.classList.add("js");

// ===== TEXTOS EM INGLÊS, PORTUGUÊS E ESPANHOL (edite aqui) =====
// Cada chave é o valor do data-i18n no index.html
const textos = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact 💌",
    "hero.hello": "Hiii! 👋 I'm",
    "hero.desc": "Passionate about technology, information security and building little things that solve real problems ✨",
    "hero.projects": "See projects 🚀",
    "hero.contact": "Contact me 💌",
    "about.title": "About me",
    "about.p1": "I'm Mad, a <strong>freelance cybersecurity professional</strong> who also enjoys <strong>development</strong>. I love understanding how things work on the inside — and how they can break!",
    "about.p2": "I'm currently studying bug bounty, Python automation and cloud infrastructure. Write a little about your journey, education and dreams here. 🌷",
    "about.years": "year in cybersec",
    "about.projects": "programs tested",
    "about.certs": "IT degree",
    "skills.title": "Skills",
    "skills.security": "Security",
    "skills.dev": "Development",
    "skills.infra": "Infrastructure",
    "skills.networks": "TCP/IP Networking",
    "projects.title": "Projects",
    "p1.title": "Bug Bounty Hunting",
    "p1.desc": "Hunting vulnerabilities on HackerOne across 20+ programs — SaaS, e-commerce, travel, fintech and crypto.",
    "p1.link": "View profile →",
    "p2.title": "Recon &amp; Attack Surface",
    "p2.desc": "Mapping subdomains, endpoints and hidden features before testing, with organized notes for every target.",
    "p2.tag": "Automation",
    "p3.title": "Vulnerability Reports",
    "p3.desc": "Reports with clear reproduction steps, proof of concept, impact and fix suggestions — always following responsible disclosure.",
    "exp.title": "Experience &amp; Education",
    "exp.1.period": "2025 — present",
    "exp.1.title": "Freelance Cybersecurity Professional",
    "exp.1.desc": "Independent work on web application security testing, vulnerability assessment and bug bounty programs.",
    "exp.2.period": "Education",
    "exp.2.title": "Degree in Information Technology",
    "exp.2.desc": "A solid foundation in networks, systems and programming.",
    "exp.3.period": "Courses",
    "exp.3.title": "Udemy Courses",
    "exp.3.desc": "Continuous learning in cybersecurity and ethical hacking.",
    "contact.title": "Let's talk?",
    "contact.desc": "I'm open to new opportunities and collaborations. Say hi!",
    "contact.send": "Send e-mail",
    "contact.copy": "Copy e-mail 📋",
    "contact.copied": "E-mail copied! 💌",
    "footer.made": "Made with 💖 by",
    frases: [
      "Security Analyst 🔐",
      "Developer 💻",
      "Bug hunter 🐞",
      "Coca-Cola lover 🥤",
    ],
  },
  pt: {
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.contact": "Contato 💌",
    "hero.hello": "Oiii! 👋 eu sou",
    "hero.desc": "Apaixonada por tecnologia, segurança da informação e por construir coisinhas que resolvem problemas de verdade ✨",
    "hero.projects": "Ver projetos 🚀",
    "hero.contact": "Fale comigo 💌",
    "about.title": "Sobre mim",
    "about.p1": "Sou a Mad, <strong>profissional autônoma de cibersegurança</strong> que também curte <strong>desenvolvimento</strong>. Adoro entender como as coisas funcionam por dentro — e como elas podem quebrar!",
    "about.p2": "Atualmente estudo bug bounty, automação com Python e infraestrutura em nuvem. Escreva aqui um pouquinho da sua trajetória, formação e sonhos. 🌷",
    "about.years": "ano na área",
    "about.projects": "programas testados",
    "about.certs": "diploma em TI",
    "skills.title": "Habilidades",
    "skills.security": "Segurança",
    "skills.dev": "Desenvolvimento",
    "skills.infra": "Infraestrutura",
    "skills.networks": "Redes TCP/IP",
    "projects.title": "Projetos",
    "p1.title": "Caça a Bugs (Bug Bounty)",
    "p1.desc": "Caçando vulnerabilidades no HackerOne em mais de 20 programas — SaaS, e-commerce, viagens, fintech e cripto.",
    "p1.link": "Ver perfil →",
    "p2.title": "Recon &amp; Superfície de Ataque",
    "p2.desc": "Mapeamento de subdomínios, endpoints e funcionalidades escondidas antes dos testes, com anotações organizadas para cada alvo.",
    "p2.tag": "Automação",
    "p3.title": "Relatórios de Vulnerabilidade",
    "p3.desc": "Relatórios com passos claros de reprodução, prova de conceito, impacto e sugestão de correção — sempre com divulgação responsável.",
    "exp.title": "Experiência &amp; Formação",
    "exp.1.period": "2025 — atual",
    "exp.1.title": "Profissional Autônoma de Cibersegurança",
    "exp.1.desc": "Trabalho independente com testes de segurança em aplicações web, análise de vulnerabilidades e programas de bug bounty.",
    "exp.2.period": "Formação",
    "exp.2.title": "Diploma em Tecnologia da Informação",
    "exp.2.desc": "Uma base sólida em redes, sistemas e programação.",
    "exp.3.period": "Cursos",
    "exp.3.title": "Cursos na Udemy",
    "exp.3.desc": "Estudo contínuo em cibersegurança e hacking ético.",
    "contact.title": "Vamos conversar?",
    "contact.desc": "Estou aberta a novas oportunidades e parcerias. Manda um oi!",
    "contact.send": "Enviar e-mail",
    "contact.copy": "Copiar e-mail 📋",
    "contact.copied": "E-mail copiado! 💌",
    "footer.made": "Feito com 💖 por",
    frases: [
      "Analista de Segurança 🔐",
      "Desenvolvedora 💻",
      "Caçadora de bugs 🐞",
      "Amante de coca-cola 🥤",
    ],
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto 💌",
    "hero.hello": "¡Holaa! 👋 soy",
    "hero.desc": "Apasionada por la tecnología, la seguridad de la información y por crear cositas que resuelven problemas reales ✨",
    "hero.projects": "Ver proyectos 🚀",
    "hero.contact": "Contáctame 💌",
    "about.title": "Sobre mí",
    "about.p1": "Soy Mad, <strong>profesional independiente de ciberseguridad</strong> a quien también le encanta el <strong>desarrollo</strong>. ¡Me encanta entender cómo funcionan las cosas por dentro — y cómo pueden romperse!",
    "about.p2": "Actualmente estudio bug bounty, automatización con Python e infraestructura en la nube. Escribe aquí un poquito sobre tu trayectoria, formación y sueños. 🌷",
    "about.years": "año en el área",
    "about.projects": "programas probados",
    "about.certs": "título en TI",
    "skills.title": "Habilidades",
    "skills.security": "Seguridad",
    "skills.dev": "Desarrollo",
    "skills.infra": "Infraestructura",
    "skills.networks": "Redes TCP/IP",
    "projects.title": "Proyectos",
    "p1.title": "Caza de Bugs (Bug Bounty)",
    "p1.desc": "Cazando vulnerabilidades en HackerOne en más de 20 programas — SaaS, e-commerce, viajes, fintech y cripto.",
    "p1.link": "Ver perfil →",
    "p2.title": "Recon &amp; Superficie de Ataque",
    "p2.desc": "Mapeo de subdominios, endpoints y funcionalidades ocultas antes de las pruebas, con notas organizadas para cada objetivo.",
    "p2.tag": "Automatización",
    "p3.title": "Reportes de Vulnerabilidades",
    "p3.desc": "Reportes con pasos claros de reproducción, prueba de concepto, impacto y sugerencias de corrección — siempre con divulgación responsable.",
    "exp.title": "Experiencia &amp; Formación",
    "exp.1.period": "2025 — actualidad",
    "exp.1.title": "Profesional Independiente de Ciberseguridad",
    "exp.1.desc": "Trabajo independiente en pruebas de seguridad de aplicaciones web, análisis de vulnerabilidades y programas de bug bounty.",
    "exp.2.period": "Formación",
    "exp.2.title": "Título en Tecnología de la Información",
    "exp.2.desc": "Una base sólida en redes, sistemas y programación.",
    "exp.3.period": "Cursos",
    "exp.3.title": "Cursos en Udemy",
    "exp.3.desc": "Aprendizaje continuo en ciberseguridad y hacking ético.",
    "contact.title": "¿Hablamos?",
    "contact.desc": "Estoy abierta a nuevas oportunidades y colaboraciones. ¡Escríbeme!",
    "contact.send": "Enviar e-mail",
    "contact.copy": "Copiar e-mail 📋",
    "contact.copied": "¡E-mail copiado! 💌",
    "footer.made": "Hecho con 💖 por",
    frases: [
      "Analista de Seguridad 🔐",
      "Desarrolladora 💻",
      "Cazadora de bugs 🐞",
      "Amante de la coca-cola 🥤",
    ],
  },
};

// Configuração de cada idioma: sigla no botão, lang do HTML e título da aba
const idiomas = {
  en: { sigla: "EN", lang: "en", titulo: "Mad | Portfolio" },
  pt: { sigla: "PT", lang: "pt-BR", titulo: "Mad | Portfólio" },
  es: { sigla: "ES", lang: "es", titulo: "Mad | Portafolio" },
};

// Só aceita "en", "pt" ou "es" (hasOwnProperty evita valores estranhos
// como "constructor" ou "__proto__", que quebrariam o site)
function idiomaValido(codigo) {
  return typeof codigo === "string" && Object.prototype.hasOwnProperty.call(idiomas, codigo);
}

// Idioma do navegador do visitante: "pt-BR" → "pt", "es-AR" → "es"...
// Se não for português nem espanhol, fica em inglês
function idiomaDoNavegador() {
  const lista = navigator.languages || [navigator.language || "en"];
  for (const l of lista) {
    const codigo = l.toLowerCase().slice(0, 2);
    if (idiomaValido(codigo)) return codigo;
  }
  return "en";
}

// 1º a escolha salva da pessoa, 2º o idioma do navegador
let idioma = null;
try {
  idioma = localStorage.getItem("idioma");
} catch (e) {}
if (!idiomaValido(idioma)) idioma = idiomaDoNavegador();

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

function aplicarIdioma(novo) {
  idioma = novo;
  const t = textos[idioma];

  document.documentElement.lang = idiomas[idioma].lang;
  document.title = idiomas[idioma].titulo;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const texto = t[el.dataset.i18n];
    if (texto) el.innerHTML = texto;
  });

  // o botão mostra o idioma atual
  langBtn.textContent = `🌐 ${idiomas[idioma].sigla}`;
  langMenu.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === idioma);
  });

  // recomeça a digitação no idioma novo
  fraseAtual = 0;
  letra = 0;
  apagando = false;
}

function abrirMenuIdioma(abrir) {
  langMenu.classList.toggle("open", abrir);
  langBtn.setAttribute("aria-expanded", abrir);
}

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  abrirMenuIdioma(!langMenu.classList.contains("open"));
});

langMenu.querySelectorAll("button").forEach((botao) => {
  botao.addEventListener("click", () => {
    aplicarIdioma(botao.dataset.lang);
    abrirMenuIdioma(false);
    try {
      localStorage.setItem("idioma", idioma);
    } catch (e) {}
  });
});

// fecha o menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang")) abrirMenuIdioma(false);
});

// Esc fecha os menus abertos (acessibilidade pra quem usa teclado)
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (langMenu.classList.contains("open")) {
    abrirMenuIdioma(false);
    langBtn.focus();
  }
  if (navLinks.classList.contains("open")) {
    fecharMenuCelular();
    menuBtn.focus();
  }
});

// ===== EFEITO DE DIGITAÇÃO =====
// (as frases ficam em textos.en.frases, textos.pt.frases e textos.es.frases, lá em cima)
const typingEl = document.getElementById("typing");
let fraseAtual = 0;
let letra = 0;
let apagando = false;

aplicarIdioma(idioma);

// Quem pediu menos movimento no sistema vê a frase parada, sem digitação
const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function digitar() {
  if (menosMovimento) {
    typingEl.textContent = textos[idioma].frases[0];
    setTimeout(digitar, 500); // acompanha se trocar de idioma
    return;
  }

  const frases = textos[idioma].frases;
  const texto = frases[fraseAtual];
  // Array.from separa certo os emojis
  const letras = Array.from(texto);

  letra += apagando ? -1 : 1;
  typingEl.textContent = letras.slice(0, letra).join("");

  let espera = apagando ? 45 : 90;

  if (!apagando && letra === letras.length) {
    espera = 1600; // pausa com a frase completa
    apagando = true;
  } else if (apagando && letra === 0) {
    apagando = false;
    fraseAtual = (fraseAtual + 1) % frases.length;
    espera = 400;
  }

  setTimeout(digitar, espera);
}
digitar();

// ===== TEMA CLARO / ESCURO =====
const themeBtn = document.getElementById("theme-btn");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  themeBtn.textContent = tema === "dark" ? "☀️" : "🌙";
}

let temaSalvo = null;
try {
  temaSalvo = localStorage.getItem("tema");
} catch (e) {}

aplicarTema(temaSalvo === "light" ? "light" : "dark");

themeBtn.addEventListener("click", () => {
  const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try {
    localStorage.setItem("tema", novo);
  } catch (e) {}
});

// ===== MENU DO CELULAR =====
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

function fecharMenuCelular() {
  navLinks.classList.remove("open");
  menuBtn.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", false);
}

menuBtn.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("open", aberto);
  menuBtn.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", fecharMenuCelular);
});

// ===== APARECER AO ROLAR + CONTADORES =====
function contar(el) {
  const alvo = Number(el.dataset.count);
  const duracao = 1200;
  const inicio = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    el.textContent = Math.round(alvo * progresso);
    if (progresso < 1) requestAnimationFrame(passo);
  }
  requestAnimationFrame(passo);
}

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add("visible");
      // tira o atraso depois que aparece, pro efeito de hover ficar rapidinho
      entrada.target.addEventListener("transitionend", () => {
        entrada.target.style.transitionDelay = "0s";
      }, { once: true });

      const numero = entrada.target.querySelector("[data-count]");
      if (numero) contar(numero);

      observer.unobserve(entrada.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  // pequeno atraso em cascata para itens lado a lado
  el.style.transitionDelay = `${(i % 3) * 0.1}s`;
  observer.observe(el);
});

// ===== LINK ATIVO NO MENU =====
const secoes = document.querySelectorAll("main section[id]");
const linksMenu = document.querySelectorAll(".nav-links a");

const secaoObserver = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      linksMenu.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${entrada.target.id}`);
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);
secoes.forEach((s) => secaoObserver.observe(s));

// ===== E-MAIL (montado pelo JS pra robôs de spam não pegarem no HTML) =====
const email = ["madinmadness", "wearehackerone.com"].join("@");
document.getElementById("send-email").href = `mailto:${email}`;

// ===== COPIAR E-MAIL =====
const toast = document.getElementById("toast");
let toastTimer;

function mostrarAviso(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("copy-email").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    mostrarAviso(textos[idioma]["contact.copied"]);
  } catch (err) {
    mostrarAviso(email);
  }
});

// ===== BOTÃO VOLTAR AO TOPO =====
const toTop = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 500);
}, { passive: true });

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== SAPINHOS QUANDO CLICA =====
const coisinhas = ["🐸", "🐸", "🐸", "🪷", "🍀"];

document.addEventListener("click", (e) => {
  if (menosMovimento) return;

  for (let i = 0; i < 6; i++) {
    const el = document.createElement("span");
    el.className = "pop";
    el.textContent = coisinhas[Math.floor(Math.random() * coisinhas.length)];
    el.style.left = `${e.clientX - 10}px`;
    el.style.top = `${e.clientY - 10}px`;

    const angulo = (Math.PI * 2 * i) / 6;
    el.style.setProperty("--dx", `${Math.cos(angulo) * 60}px`);
    el.style.setProperty("--dy", `${Math.sin(angulo) * 60}px`);

    document.body.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
  }
});

// ===== BOLHAS DE ÁGUA NO FUNDO =====
const bubbles = document.querySelector(".bubbles");

for (let i = 0; i < 18; i++) {
  const b = document.createElement("span");
  const tamanho = 12 + Math.random() * 50;
  b.className = "bubble";
  b.style.width = `${tamanho}px`;
  b.style.height = `${tamanho}px`;
  b.style.left = `${Math.random() * 100}%`;
  b.style.animationDuration = `${14 + Math.random() * 16}s`;
  b.style.animationDelay = `${-Math.random() * 30}s`;
  bubbles.appendChild(b);
}

// ===== VITÓRIAS-RÉGIAS BOIANDO =====
// posições nas laterais pra não ficar em cima do texto (left %, top %, tamanho px)
const folhas = [
  [2, 18, 90], [90, 30, 70], [4, 62, 60], [88, 78, 100], [46, 92, 55],
];
const pond = document.querySelector(".pond");

folhas.forEach(([x, y, tamanho], i) => {
  const folha = document.createElement("div");
  folha.className = "lilypad";
  folha.style.left = `${x}%`;
  folha.style.top = `${y}%`;
  folha.style.width = `${tamanho}px`;
  folha.style.setProperty("--r", `${Math.random() * 360}deg`);
  folha.style.animationDelay = `${-i * 1.3}s`;

  // algumas folhas ganham uma flor de lótus rosa
  if (i % 2 === 0) folha.innerHTML = "<span>🪷</span>";

  pond.appendChild(folha);
});

// ===== ANO NO RODAPÉ =====
document.getElementById("year").textContent = new Date().getFullYear();
