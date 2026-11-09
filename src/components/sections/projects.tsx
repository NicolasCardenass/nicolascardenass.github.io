import { ProjectGrid } from "@/components/project-grid";
import { Section } from "@/components/section";
import type { Dictionary, Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

type ProjectsProps = { dict: Dictionary; locale: Locale };

export function Projects({ dict, locale }: ProjectsProps) {
  return (
    <Section id="projects" eyebrow={dict.projects.eyebrow} title={dict.projects.title}>
      <ProjectGrid
        projects={projects}
        locale={locale}
        labels={dict.projects}
        newTabHint={dict.common.opensInNewTab}
      />
    </Section>
  );
}
