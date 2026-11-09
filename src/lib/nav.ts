import type { Dictionary } from "./i18n";

export type NavItem = { href: string; label: string };

export function getNavItems(nav: Dictionary["nav"]): NavItem[] {
  return [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];
}
