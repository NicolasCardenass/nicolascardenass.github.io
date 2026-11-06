import { site } from "./site";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export type Project = {
  /** Repository name on GitHub, also used as a stable key. */
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  status: ProjectStatus;
};

export const projects: readonly Project[] = [
  {
    slug: "nicolascardenass.github.io",
    title: "Portfolio",
    description:
      "This website: a statically exported Next.js site with light/dark themes, deployed to GitHub Pages through CI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web"],
    status: "in-progress",
  },
  {
    slug: "docs-rag",
    title: "Docs RAG",
    description:
      "Chat with your documents: upload PDFs and ask questions answered by an LLM, grounded with retrieval and source citations.",
    tags: ["AI", "Python", "FastAPI", "Next.js"],
    status: "planned",
  },
  {
    slug: "finflow",
    title: "FinFlow",
    description:
      "Personal finance manager with accounts, budgets and reports: REST API, web dashboard and a mobile app.",
    tags: ["Full-stack", "NestJS", "PostgreSQL", "Mobile"],
    status: "planned",
  },
  {
    slug: "ai-agent-api",
    title: "AI Agent API",
    description:
      "LLM agent that plans and calls tools (weather, currency, notes, calculator) with streaming and step tracing.",
    tags: ["AI", "Python", "FastAPI", "API"],
    status: "planned",
  },
  {
    slug: "realtime-chat",
    title: "Realtime Chat",
    description:
      "Real-time chat with rooms, presence, typing indicators and read receipts, scaled horizontally with Redis.",
    tags: ["Full-stack", "WebSockets", "Redis", "Mobile"],
    status: "planned",
  },
  {
    slug: "atp-pl4-toolkit",
    title: "ATP PL4 Toolkit",
    description:
      "Python package and CLI to read ATP/ATPDraw simulation results, compute transient metrics and plot waveforms.",
    tags: ["Python", "CLI", "Engineering", "Data"],
    status: "planned",
  },
  {
    slug: "transient-ai",
    title: "Transient AI",
    description:
      "API that turns electromagnetic transient simulation results into technical reports written by an LLM.",
    tags: ["AI", "Python", "FastAPI", "Engineering"],
    status: "planned",
  },
  {
    slug: "maint-tracker",
    title: "Maint Tracker",
    description:
      "Maintenance work-order system with preventive plans, MTBF/MTTR indicators and QR-code asset lookup on mobile.",
    tags: ["Full-stack", "Django", "React", "Mobile"],
    status: "planned",
  },
];

export function repoUrl(project: Pick<Project, "slug">): string {
  return `${site.githubUrl}/${project.slug}`;
}

export const statusLabel: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

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
