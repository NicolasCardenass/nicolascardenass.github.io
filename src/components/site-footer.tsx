import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="container-page text-muted flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <p>
          © {year} {site.name}. Released under the MIT License.
        </p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
                Email
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-foreground transition-colors">
                Back to top ↑
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
