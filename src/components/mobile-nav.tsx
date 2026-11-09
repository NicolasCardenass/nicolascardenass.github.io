"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/lib/nav";

/** Disclosure menu for small screens, where the inline nav is hidden. */
type MobileNavProps = {
  items: readonly NavItem[];
  labels: { openMenu: string; closeMenu: string };
};

export function MobileNav({ items, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={() => setOpen((value) => !value)}
        className="border-border text-muted hover:text-foreground inline-flex size-9 items-center justify-center rounded-full border transition-colors"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className="border-border bg-background absolute inset-x-0 top-16 border-b px-6 py-3"
      >
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-foreground block py-3 text-base transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
