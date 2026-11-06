import { Section } from "@/components/section";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="04. Contact" title="Get in touch">
      <div className="border-border bg-surface rounded-2xl border p-8 sm:p-10">
        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          I&apos;m open to internships and junior software engineering opportunities, as well as
          collaborations on interesting projects. The fastest way to reach me is by email.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="bg-accent text-accent-foreground inline-flex h-11 items-center rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Say hello
          </a>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-foreground/40 inline-flex h-11 items-center rounded-full border px-6 text-sm font-medium transition-colors"
          >
            github.com/{site.githubUser}
          </a>
        </div>
        <p className="text-muted mt-6 font-mono text-sm">{site.email}</p>
      </div>
    </Section>
  );
}
