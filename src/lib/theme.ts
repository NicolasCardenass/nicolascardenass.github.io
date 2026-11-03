export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs inline in <head> before the first paint, so the saved (or system)
 * theme is applied without a flash of the wrong colors.
 */
export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
