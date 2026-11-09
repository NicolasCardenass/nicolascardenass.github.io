import { describe, expect, it } from "vitest";
import { collectTags, filterByTag, projects, repoUrl, type Project } from "./projects";

const sample: Project[] = [
  {
    slug: "a",
    title: "A",
    description: { en: "", pt: "" },
    tags: ["Web", "AI"],
    status: "planned",
  },
  {
    slug: "b",
    title: "B",
    description: { en: "", pt: "" },
    tags: ["AI", "Python"],
    status: "in-progress",
  },
  {
    slug: "c",
    title: "C",
    description: { en: "", pt: "" },
    tags: ["Python", "AI", "CLI"],
    status: "completed",
  },
];

describe("collectTags", () => {
  it("returns unique tags ordered by frequency, then alphabetically", () => {
    expect(collectTags(sample)).toEqual(["AI", "Python", "CLI", "Web"]);
  });

  it("returns an empty list when there are no projects", () => {
    expect(collectTags([])).toEqual([]);
  });
});

describe("filterByTag", () => {
  it("returns every project when no tag is selected", () => {
    expect(filterByTag(sample, null)).toBe(sample);
  });

  it("keeps only projects with the selected tag", () => {
    expect(filterByTag(sample, "Python").map((p) => p.slug)).toEqual(["b", "c"]);
  });

  it("returns an empty list for an unknown tag", () => {
    expect(filterByTag(sample, "Rust")).toEqual([]);
  });
});

describe("project data", () => {
  it("uses unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("builds repository URLs from the GitHub profile", () => {
    expect(repoUrl({ slug: "docs-rag" })).toBe("https://github.com/NicolasCardenass/docs-rag");
  });
});
