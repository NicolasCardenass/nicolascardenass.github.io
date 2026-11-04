import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

/** Page section with a consistent heading and an anchor target for the header nav. */
export function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="container-page scroll-mt-20 py-20">
      <p className="text-accent font-mono text-sm">{eyebrow}</p>
      <h2 id={headingId} className="mt-2 text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
