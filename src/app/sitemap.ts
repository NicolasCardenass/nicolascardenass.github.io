import type { MetadataRoute } from "next";
import { htmlLang, locales, localePath } from "@/lib/i18n";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [htmlLang[locale], `${site.url}${localePath[locale]}`]),
  );

  return locales.map((locale) => ({
    url: `${site.url}${localePath[locale]}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
