export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Text available in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

/** Path of the home page for each locale (trailing slash matches the static export). */
export const localePath: Record<Locale, string> = {
  en: "/",
  pt: "/pt/",
};

/** Value used in the `<html lang>` attribute. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
};
