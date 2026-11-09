import { ExternalLink } from "@/components/external-link";
import { format, type Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

type SiteFooterProps = { dict: Dictionary };

export function SiteFooter({ dict }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="container-page text-muted flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <p>{format(dict.footer.rights, { year, name: site.name })}</p>
        <nav aria-label={dict.footer.label}>
          <ul className="flex items-center gap-4">
            <li>
              <ExternalLink
                href={site.githubUrl}
                newTabHint={dict.common.opensInNewTab}
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </ExternalLink>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
                {dict.footer.email}
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-foreground transition-colors">
                {dict.footer.backToTop}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
