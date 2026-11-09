"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { format, type Dictionary, type Locale } from "@/lib/i18n";
import { collectTags, filterByTag, type Project } from "@/lib/projects";

type ProjectGridProps = {
  projects: readonly Project[];
  locale: Locale;
  labels: Dictionary["projects"];
  newTabHint: string;
};

export function ProjectGrid({ projects, locale, labels, newTabHint }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const tags = collectTags(projects);
  const visible = filterByTag(projects, activeTag);

  return (
    <div>
      <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
        <FilterButton active={activeTag === null} onClick={() => setActiveTag(null)}>
          {labels.all}
        </FilterButton>
        {tags.map((tag) => (
          <FilterButton
            key={tag}
            active={activeTag === tag}
            onClick={() => setActiveTag((current) => (current === tag ? null : tag))}
          >
            {tag}
          </FilterButton>
        ))}
      </div>

      <p className="text-muted mt-4 text-sm" aria-live="polite">
        {format(labels.showing, { visible: visible.length, total: projects.length })}
        {activeTag !== null && (
          <>
            {" "}
            {labels.tagged} <span className="text-foreground font-medium">{activeTag}</span>
          </>
        )}
      </p>

      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard
              project={project}
              locale={locale}
              labels={labels}
              newTabHint={newTabHint}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

type FilterButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function FilterButton({ active, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
