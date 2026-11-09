import { Section } from "@/components/section";
import type { Dictionary } from "@/lib/i18n";

type AboutProps = { dict: Dictionary };

export function About({ dict }: AboutProps) {
  const { about } = dict;

  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="text-muted space-y-4 text-lg leading-relaxed">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="border-border bg-surface h-fit space-y-5 rounded-2xl border p-6">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-accent font-mono text-xs tracking-wider uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
