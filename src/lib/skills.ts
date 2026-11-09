import type { Localized } from "./i18n/config";

export type SkillGroup = {
  title: Localized;
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: { en: "Languages", pt: "Linguagens" },
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "C/C++"],
  },
  {
    title: { en: "Front-end & Mobile", pt: "Front-end e Mobile" },
    skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo"],
  },
  {
    title: { en: "Back-end & Data", pt: "Back-end e Dados" },
    skills: ["Node.js", "NestJS", "Fastify", "FastAPI", "Django", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: { en: "AI & LLMs", pt: "IA e LLMs" },
    skills: ["LLM APIs", "RAG", "Embeddings", "Tool calling", "Ollama"],
  },
  {
    title: { en: "Tooling & DevOps", pt: "Ferramentas e DevOps" },
    skills: ["Git", "GitHub Actions", "Docker", "Linux / WSL", "Vitest", "pytest"],
  },
  {
    title: { en: "Engineering", pt: "Engenharia" },
    skills: ["MATLAB", "ATP / ATPDraw", "ESP32", "Power BI", "AutoCAD", "SCADA"],
  },
];
