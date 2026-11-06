import { ProjectGrid } from "@/components/project-grid";
import { Section } from "@/components/section";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Things I'm building">
      <ProjectGrid projects={projects} />
    </Section>
  );
}
