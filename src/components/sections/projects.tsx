import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Things I'm building">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
