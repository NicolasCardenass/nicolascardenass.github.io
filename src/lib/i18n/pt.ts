import type { Dictionary } from "./dictionary";

export const pt: Dictionary = {
  meta: {
    title: "Nicolas Cardenas — Software, IA e Sistemas",
    description:
      "Portfólio de Nicolas Cardenas, estudante de Engenharia Elétrica que desenvolve aplicações web, APIs e ferramentas com inteligência artificial.",
  },
  common: {
    skipToContent: "Pular para o conteúdo",
    opensInNewTab: "(abre em uma nova aba)",
  },
  nav: {
    label: "Principal",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  theme: {
    toLight: "Mudar para o tema claro",
    toDark: "Mudar para o tema escuro",
  },
  language: {
    switchLabel: "EN",
    switchDescription: "Read in English",
  },
  hero: {
    greeting: "Olá, meu nome é",
    role: "Estudante de Engenharia Elétrica · Software, IA e Sistemas",
    pitch:
      "Desenvolvo aplicações web, APIs e ferramentas com inteligência artificial, levando para o software o jeito de pensar da engenharia sobre sistemas, sinais e confiabilidade.",
    viewProjects: "Ver projetos",
    location: "Brasil",
  },
  about: {
    eyebrow: "01. Sobre",
    title: "Sobre mim",
    paragraphs: [
      "Sou estudante de Engenharia Elétrica com grande interesse em engenharia de software. Gosto de construir aplicações completas: interfaces web, APIs de back-end e ferramentas que usam modelos de linguagem (LLMs) para resolver problemas reais.",
      "A engenharia me ensinou a pensar em sistemas: definir o problema, modelar, medir o resultado e iterar. Levo a mesma mentalidade para o código, com foco em arquitetura clara, testes automatizados e software fácil de executar e manter.",
      "Fora do software puro, gosto de projetos em que o código encontra o hardware, como microcontroladores, sensores e controle realimentado.",
    ],
    facts: [
      {
        label: "Formação",
        value: "Bacharelado em Engenharia Elétrica — Universidade Federal de Uberlândia (UFU)",
      },
      { label: "Foco", value: "Aplicações web, APIs e ferramentas com LLMs" },
      { label: "Também curto", value: "Sistemas embarcados, controle, IoT e análise de dados" },
    ],
  },
  skills: {
    eyebrow: "02. Habilidades",
    title: "Tecnologias",
    groupSkillsLabel: "Habilidades de {group}",
  },
  projects: {
    eyebrow: "03. Projetos",
    title: "O que estou construindo",
    filterLabel: "Filtrar projetos por tag",
    all: "Todos",
    showing: "Mostrando {visible} de {total} projetos",
    tagged: "com a tag",
    technologies: "Tecnologias",
    viewRepository: "Ver repositório",
    status: {
      completed: "Concluído",
      "in-progress": "Em andamento",
      planned: "Planejado",
    },
  },
  contact: {
    eyebrow: "04. Contato",
    title: "Vamos conversar",
    text: "Estou aberto a estágios e oportunidades júnior em engenharia de software, além de colaborações em projetos interessantes. O jeito mais rápido de falar comigo é por e-mail.",
    sayHello: "Enviar e-mail",
  },
  footer: {
    label: "Rodapé",
    rights: "© {year} {name}. Publicado sob a Licença MIT.",
    email: "E-mail",
    backToTop: "Voltar ao topo ↑",
  },
};
