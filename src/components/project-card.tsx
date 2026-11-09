import { ExternalLink } from "@/components/external-link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { repoUrl, type Project, type ProjectStatus } from "@/lib/projects";

const statusStyles: Record<ProjectStatus, string> = {
  completed: "border-emerald-500/40 text-emerald-600 dark:text-emerald-400",
  "in-progress": "border-accent/40 text-accent",
  planned: "border-border text-muted",
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  labels: Dictionary["projects"];
  newTabHint: string;
};

export function ProjectCard({ project, locale, labels, newTabHint }: ProjectCardProps) {
  return (
    <article className="group border-border bg-surface hover:border-foreground/30 focus-within:ring-accent relative flex h-full flex-col rounded-2xl border p-6 transition-colors focus-within:ring-2">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">
          <ExternalLink
            href={repoUrl(project)}
            newTabHint={newTabHint}
            className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
          >
            {project.title}
          </ExternalLink>
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusStyles[project.status]}`}
        >
          {labels.status[project.status]}
        </span>
      </div>
      <p className="text-muted mt-3 flex-1 text-sm leading-relaxed">
        {project.description[locale]}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={labels.technologies}>
        {project.tags.map((tag) => (
          <li key={tag} className="text-muted font-mono text-xs">
            #{tag.toLowerCase().replace(/\s+/g, "-")}
          </li>
        ))}
      </ul>
      <span className="text-accent mt-5 inline-flex items-center gap-1 text-sm font-medium">
        {labels.viewRepository}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </article>
  );
}
