import type { Locale } from "./config";
import type { Dictionary } from "./dictionary";
import { en } from "./en";
import { pt } from "./pt";

export * from "./config";
export type { Dictionary } from "./dictionary";
export { format } from "./format";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
