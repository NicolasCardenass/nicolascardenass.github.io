import { Section } from "@/components/section";
import { format, type Dictionary, type Locale } from "@/lib/i18n";
import { skillGroups } from "@/lib/skills";

type SkillsProps = { dict: Dictionary; locale: Locale };

export function Skills({ dict, locale }: SkillsProps) {
  return (
    <Section id="skills" eyebrow={dict.skills.eyebrow} title={dict.skills.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.title.en} className="border-border bg-surface rounded-2xl border p-6">
            <h3 className="font-semibold">{group.title[locale]}</h3>
            <ul
              className="mt-4 flex flex-wrap gap-2"
              aria-label={format(dict.skills.groupSkillsLabel, { group: group.title[locale] })}
            >
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
