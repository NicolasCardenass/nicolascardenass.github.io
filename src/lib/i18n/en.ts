import type { Dictionary } from "./dictionary";

export const en: Dictionary = {
  meta: {
    title: "Nicolas Cardenas — Software, AI & Systems",
    description:
      "Portfolio of Nicolas Cardenas, Electrical Engineering student building web applications, APIs and AI-powered tools.",
  },
  common: {
    skipToContent: "Skip to content",
    opensInNewTab: "(opens in a new tab)",
  },
  nav: {
    label: "Main",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  language: {
    switchLabel: "PT",
    switchDescription: "Ler em português",
  },
  hero: {
    greeting: "Hi, my name is",
    role: "Electrical Engineering student · Software, AI & Systems",
    pitch:
      "I build web applications, APIs and AI-powered tools, bringing an engineer's way of thinking about systems, signals and reliability into software.",
    viewProjects: "View projects",
    location: "Brazil",
  },
  about: {
    eyebrow: "01. About",
    title: "About me",
    paragraphs: [
      "I'm an Electrical Engineering student with a strong interest in software engineering. I enjoy building complete applications: web front-ends, back-end APIs and tools that put large language models to practical use.",
      "Engineering taught me to think in systems: define the problem, model it, measure the result and iterate. I bring the same mindset to code, with a focus on clear architecture, automated tests and software that is easy to run and maintain.",
      "Outside of pure software I enjoy projects where code meets hardware, such as microcontrollers, sensors and feedback control.",
    ],
    facts: [
      {
        label: "Education",
        value: "B.Sc. in Electrical Engineering — Federal University of Uberlândia (UFU)",
      },
      { label: "Focus", value: "Web applications, APIs and LLM-powered tools" },
      { label: "Also into", value: "Embedded systems, control, IoT and data analysis" },
    ],
  },
  skills: {
    eyebrow: "02. Skills",
    title: "Tech stack",
    groupSkillsLabel: "{group} skills",
  },
  projects: {
    eyebrow: "03. Projects",
    title: "Things I'm building",
    filterLabel: "Filter projects by tag",
    all: "All",
    showing: "Showing {visible} of {total} projects",
    tagged: "tagged",
    technologies: "Technologies",
    viewRepository: "View repository",
    status: {
      completed: "Completed",
      "in-progress": "In progress",
      planned: "Planned",
    },
  },
  contact: {
    eyebrow: "04. Contact",
    title: "Get in touch",
    text: "I'm open to internships and junior software engineering opportunities, as well as collaborations on interesting projects. The fastest way to reach me is by email.",
    sayHello: "Say hello",
  },
  footer: {
    label: "Footer",
    rights: "© {year} {name}. Released under the MIT License.",
    email: "Email",
    backToTop: "Back to top ↑",
  },
};
