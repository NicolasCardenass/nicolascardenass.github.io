import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import type { Project } from "@/lib/projects";
import { ProjectGrid } from "./project-grid";

const projects: Project[] = [
  { slug: "web-app", title: "Web App", description: "A web app", tags: ["Web"], status: "planned" },
  {
    slug: "ai-tool",
    title: "AI Tool",
    description: "An AI tool",
    tags: ["AI"],
    status: "completed",
  },
];

/** Titles of the rendered cards, without the screen-reader-only link hint. */
function visibleTitles() {
  return screen
    .getAllByRole("article")
    .map((card) =>
      within(card).getByRole("heading").textContent?.replace(" (opens in a new tab)", ""),
    );
}

describe("ProjectGrid", () => {
  it("shows all projects by default", () => {
    render(<ProjectGrid projects={projects} />);

    expect(visibleTitles()).toEqual(["Web App", "AI Tool"]);
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/showing 2 of 2 projects/i)).toBeInTheDocument();
  });

  it("filters by tag and toggles the filter off on a second click", async () => {
    const user = userEvent.setup();
    render(<ProjectGrid projects={projects} />);

    const aiButton = screen.getByRole("button", { name: "AI" });
    await user.click(aiButton);
    expect(visibleTitles()).toEqual(["AI Tool"]);
    expect(aiButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/showing 1 of 2 projects/i)).toBeInTheDocument();

    await user.click(aiButton);
    expect(visibleTitles()).toEqual(["Web App", "AI Tool"]);
  });

  it("links each card to its repository in a new tab", () => {
    render(<ProjectGrid projects={projects} />);

    const link = screen.getByRole("link", { name: /ai tool/i });
    expect(link).toHaveAttribute("href", "https://github.com/NicolasCardenass/ai-tool");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
