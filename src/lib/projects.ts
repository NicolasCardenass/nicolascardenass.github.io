import type { Localized } from "./i18n/config";
import { site } from "./site";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  /** Repository name on GitHub, also used as a stable key. */
  slug: string;
  title: string;
  description: Localized;
  tags: readonly string[];
  status: ProjectStatus;
};

export const projects: readonly Project[] = [
  {
    slug: "nicolascardenass.github.io",
    title: "Portfolio",
    description: {
      en: "This website: a statically exported Next.js site with light/dark themes, deployed to GitHub Pages through CI.",
      pt: "Este site: um portfólio em Next.js exportado como site estático, com temas claro/escuro e publicado no GitHub Pages via CI.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web"],
    status: "in-progress",
  },
  {
    slug: "docs-rag",
    title: "Docs RAG",
    description: {
      en: "Chat with your documents: upload PDFs and ask questions answered by an LLM, grounded with retrieval and source citations.",
      pt: "Converse com seus documentos: envie PDFs e faça perguntas respondidas por um LLM, com busca semântica (RAG) e citação das fontes.",
    },
    tags: ["AI", "Python", "FastAPI", "Next.js"],
    status: "planned",
  },
  {
    slug: "finflow",
    title: "FinFlow",
    description: {
      en: "Personal finance manager with accounts, budgets and reports: REST API, web dashboard and a mobile app.",
      pt: "Gerenciador de finanças pessoais com contas, orçamentos e relatórios: API REST, painel web e aplicativo mobile.",
    },
    tags: ["Full-stack", "NestJS", "PostgreSQL", "Mobile"],
    status: "planned",
  },
  {
    slug: "ai-agent-api",
    title: "AI Agent API",
    description: {
      en: "LLM agent that plans and calls tools (weather, currency, notes, calculator) with streaming and step tracing.",
      pt: "Agente de LLM que planeja e usa ferramentas (clima, câmbio, notas, calculadora), com streaming e rastreamento de cada passo.",
    },
    tags: ["AI", "Python", "FastAPI", "API"],
    status: "planned",
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    description: {
      en: "Real-time chat with rooms, presence, typing indicators and read receipts, scaled horizontally with Redis.",
      pt: "Chat em tempo real com salas, presença, indicador de digitação e confirmação de leitura, escalado horizontalmente com Redis.",
    },
    tags: ["Full-stack", "WebSockets", "Redis", "Mobile"],
    status: "planned",
  },
  {
    slug: "atp-pl4-toolkit",
    title: "ATP PL4 Toolkit",
    description: {
      en: "Python package and CLI to read ATP/ATPDraw simulation results, compute transient metrics and plot waveforms.",
      pt: "Pacote Python e CLI para ler resultados de simulações do ATP/ATPDraw, calcular métricas de transitórios e plotar formas de onda.",
    },
    tags: ["Python", "CLI", "Engineering", "Data"],
    status: "planned",
  },
  {
    slug: "transient-ai",
    title: "Transient AI",
    description: {
      en: "API that turns electromagnetic transient simulation results into technical reports written by an LLM.",
      pt: "API que transforma resultados de simulações de transitórios eletromagnéticos em laudos técnicos escritos por um LLM.",
    },
    tags: ["AI", "Python", "FastAPI", "Engineering"],
    status: "planned",
  },
  {
    slug: "maint-tracker",
    title: "Maint Tracker",
    description: {
      en: "Maintenance work-order system with preventive plans, MTBF/MTTR indicators and QR-code asset lookup on mobile.",
      pt: "Sistema de ordens de manutenção com planos preventivos, indicadores MTBF/MTTR e consulta de ativos por QR code no celular.",
    },
    tags: ["Full-stack", "Django", "React", "Mobile"],
    status: "planned",
  },
];

export function repoUrl(project: Pick<Project, "slug">): string {
  return `${site.githubUrl}/${project.slug}`;
}

/** Unique tags across all projects, ordered by how many projects use them. */
export function collectTags(items: readonly Project[]): string[] {
  const counts = new Map<string, number>();
  for (const project of items) {
    for (const tag of project.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort(([tagA, countA], [tagB, countB]) => countB - countA || tagA.localeCompare(tagB))
    .map(([tag]) => tag);
}

/** Projects that include the given tag; `null` means no filter. */
export function filterByTag(items: readonly Project[], tag: string | null): readonly Project[] {
  return tag === null ? items : items.filter((project) => project.tags.includes(tag));
}
