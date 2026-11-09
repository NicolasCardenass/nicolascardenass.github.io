import type { Metadata, Viewport } from "next";
import { getDictionary, htmlLang, locales, localePath, ogLocale, type Locale } from "./i18n";
import { ogImage } from "./og";
import { site } from "./site";

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = localePath[locale];

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${site.name}`,
    },
    description: dict.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.githubUrl }],
    creator: site.name,
    keywords: [
      "Nicolas Cardenas",
      "software engineer",
      "web developer",
      "TypeScript",
      "Next.js",
      "Python",
      "AI",
      "LLM",
      "electrical engineering",
      "portfolio",
    ],
    alternates: {
      canonical: path,
      languages: {
        ...Object.fromEntries(locales.map((l) => [htmlLang[l], localePath[l]])),
        "x-default": localePath.en,
      },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage.url],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};
