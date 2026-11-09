import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/globals.css";
import type { ReactNode } from "react";
import { getDictionary, htmlLang, type Locale } from "@/lib/i18n";
import { themeInitScript } from "@/lib/theme";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
};

/** HTML shell shared by the root layout of every locale. */
export function RootDocument({ locale, children }: RootDocumentProps) {
  const dict = getDictionary(locale);

  return (
    <html
      lang={htmlLang[locale]}
      data-theme="dark"
      suppressHydrationWarning
      className="h-full scroll-smooth"
    >
      {/* Rendered by a root layout (App Router), where a plain <head> is supported. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans antialiased">
        <a
          href="#main"
          className="bg-accent text-accent-foreground sr-only rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          {dict.common.skipToContent}
        </a>
        <SiteHeader dict={dict} locale={locale} />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter dict={dict} />
      </body>
    </html>
  );
}
