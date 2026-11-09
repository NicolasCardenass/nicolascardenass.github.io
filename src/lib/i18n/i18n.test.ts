import { describe, expect, it } from "vitest";
import { en } from "./en";
import { format } from "./format";
import { pt } from "./pt";

/** Collects the key paths of an object, e.g. "nav.about". */
function keyPaths(value: unknown, prefix = ""): string[] {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return [prefix];
  return Object.entries(value).flatMap(([key, child]) =>
    keyPaths(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe("format", () => {
  it("replaces placeholders with values", () => {
    expect(format("Showing {visible} of {total}", { visible: 2, total: 8 })).toBe("Showing 2 of 8");
  });

  it("leaves unknown placeholders untouched", () => {
    expect(format("Hello {name}", {})).toBe("Hello {name}");
  });
});

describe("dictionaries", () => {
  it("define the same keys in every language", () => {
    expect(keyPaths(pt).sort()).toEqual(keyPaths(en).sort());
  });

  it("have the same number of about paragraphs and facts", () => {
    expect(pt.about.paragraphs).toHaveLength(en.about.paragraphs.length);
    expect(pt.about.facts).toHaveLength(en.about.facts.length);
  });
});
