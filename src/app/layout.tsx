import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Nicolas Cardenas",
  description: "Portfolio of Nicolas Cardenas — software, AI and systems projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className="h-full scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-background text-foreground flex min-h-full flex-col font-sans antialiased">
        <a
          href="#main"
          className="bg-accent text-accent-foreground sr-only rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
