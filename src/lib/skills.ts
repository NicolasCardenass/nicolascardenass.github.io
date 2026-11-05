export type SkillGroup = {
  title: string;
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "C/C++"],
  },
  {
    title: "Front-end & Mobile",
    skills: ["React", "Next.js", "Tailwind CSS", "React Native", "Expo"],
  },
  {
    title: "Back-end & Data",
    skills: ["Node.js", "NestJS", "Fastify", "FastAPI", "Django", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    title: "AI & LLMs",
    skills: ["LLM APIs", "RAG", "Embeddings", "Tool calling", "Ollama"],
  },
  {
    title: "Tooling & DevOps",
    skills: ["Git", "GitHub Actions", "Docker", "Linux / WSL", "Vitest", "pytest"],
  },
  {
    title: "Engineering",
    skills: ["MATLAB", "ATP / ATPDraw", "ESP32", "Power BI", "AutoCAD", "SCADA"],
  },
];
