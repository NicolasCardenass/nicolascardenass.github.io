import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import { buildMetadata } from "@/lib/metadata";

export { viewport } from "@/lib/metadata";

export const metadata = buildMetadata("pt");

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
