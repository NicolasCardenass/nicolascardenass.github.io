import { site } from "./site";

/** Social preview image served from the `/og.png` route. */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.role}`,
} as const;
