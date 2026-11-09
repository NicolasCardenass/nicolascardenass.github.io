import { htmlLang, localePath, type Dictionary, type Locale } from "@/lib/i18n";
import { getNavItems } from "@/lib/nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

type SiteHeaderProps = { dict: Dictionary; locale: Locale };

export function SiteHeader({ dict, locale }: SiteHeaderProps) {
  const navItems = getNavItems(dict.nav);
  const otherLocale: Locale = locale === "en" ? "pt" : "en";

  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          nicolas<span className="text-accent">.</span>cardenas
        </a>
        <nav aria-label={dict.nav.label} className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={localePath[otherLocale]}
            hrefLang={htmlLang[otherLocale]}
            lang={htmlLang[otherLocale]}
            className="border-border text-muted hover:text-foreground hover:border-foreground/40 inline-flex h-9 items-center rounded-full border px-3 font-mono text-xs font-semibold transition-colors"
          >
            {dict.language.switchLabel}
            <span className="sr-only"> — {dict.language.switchDescription}</span>
          </a>
          <ThemeToggle labels={dict.theme} />
          <MobileNav
            items={navItems}
            labels={{ openMenu: dict.nav.openMenu, closeMenu: dict.nav.closeMenu }}
          />
        </nav>
      </div>
    </header>
  );
}
