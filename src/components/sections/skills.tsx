import { Section } from "@/components/section";
import { skillGroups } from "@/lib/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="02. Skills" title="Tech stack">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="border-border bg-surface rounded-2xl border p-6">
            <h3 className="font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-border text-muted rounded-full border px-3 py-1 font-mono text-xs"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
