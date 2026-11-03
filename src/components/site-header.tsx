import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          nicolas<span className="text-accent">.</span>cardenas
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
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
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
