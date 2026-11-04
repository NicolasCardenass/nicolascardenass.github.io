import { Section } from "@/components/section";

const facts = [
  {
    label: "Education",
    value: "B.Sc. in Electrical Engineering — Federal University of Uberlândia (UFU)",
  },
  { label: "Focus", value: "Web applications, APIs and LLM-powered tools" },
  { label: "Also into", value: "Embedded systems, control, IoT and data analysis" },
] as const;

export function About() {
  return (
    <Section id="about" eyebrow="01. About" title="About me">
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="text-muted space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m an Electrical Engineering student with a strong interest in software
            engineering. I enjoy building complete applications: web front-ends, back-end APIs and
            tools that put large language models to practical use.
          </p>
          <p>
            Engineering taught me to think in systems: define the problem, model it, measure the
            result and iterate. I bring the same mindset to code, with a focus on clear
            architecture, automated tests and software that is easy to run and maintain.
          </p>
          <p>
            Outside of pure software I enjoy projects where code meets hardware, such as
            microcontrollers, sensors and feedback control.
          </p>
        </div>

        <dl className="border-border bg-surface h-fit space-y-5 rounded-2xl border p-6">
          {facts.map((fact) => (
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
