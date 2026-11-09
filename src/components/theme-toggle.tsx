"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY, isTheme, type Theme } from "@/lib/theme";

function readTheme(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return isTheme(current) ? current : "dark";
}

type ThemeToggleProps = {
  labels: { toLight: string; toDark: string };
};

export function ThemeToggle({ labels }: ThemeToggleProps) {
  // `null` until mounted: the real theme is only known in the browser.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Sync with the value applied by the inline script in <head>.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(readTheme());
  }, []);

  function toggle() {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable (private mode); the theme still applies for this visit.
    }
    setTheme(next);
  }

  const label = theme === "dark" ? labels.toLight : labels.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="border-border text-muted hover:text-foreground hover:border-foreground/40 inline-flex size-9 items-center justify-center rounded-full border transition-colors"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
