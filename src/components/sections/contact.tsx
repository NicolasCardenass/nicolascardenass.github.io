import { ExternalLink } from "@/components/external-link";
import { Section } from "@/components/section";
import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

type ContactProps = { dict: Dictionary };

export function Contact({ dict }: ContactProps) {
  return (
    <Section id="contact" eyebrow={dict.contact.eyebrow} title={dict.contact.title}>
      <div className="border-border bg-surface rounded-2xl border p-8 sm:p-10">
        <p className="text-muted max-w-2xl text-lg leading-relaxed">{dict.contact.text}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="bg-accent text-accent-foreground inline-flex h-11 items-center rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90"
          >
            {dict.contact.sayHello}
          </a>
          <ExternalLink
            href={site.githubUrl}
            newTabHint={dict.common.opensInNewTab}
            className="border-border hover:border-foreground/40 inline-flex h-11 items-center rounded-full border px-6 text-sm font-medium transition-colors"
          >
            github.com/{site.githubUser}
          </ExternalLink>
        </div>
        <p className="text-muted mt-6 font-mono text-sm">{site.email}</p>
      </div>
    </Section>
  );
}
