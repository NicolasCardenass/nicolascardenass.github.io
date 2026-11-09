import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import { ProjectGrid } from "./project-grid";

const projects: Project[] = [
  {
    slug: "web-app",
    title: "Web App",
    description: { en: "A web app", pt: "Um app web" },
    tags: ["Web"],
    status: "planned",
  },
  {
    slug: "ai-tool",
    title: "AI Tool",
    description: { en: "An AI tool", pt: "Uma ferramenta de IA" },
    tags: ["AI"],
    status: "completed",
  },
];

function renderGrid(locale: Locale = "en") {
  const dict = getDictionary(locale);
  return render(
    <ProjectGrid
      projects={projects}
      locale={locale}
      labels={dict.projects}
      newTabHint={dict.common.opensInNewTab}
    />,
  );
}

/** Titles of the rendered cards, without the screen-reader-only link hint. */
function visibleTitles() {
  return screen.getAllByRole("article").map((card) =>
    within(card)
      .getByRole("heading")
      .textContent?.replace(/ \(.*\)$/, ""),
  );
}

describe("ProjectGrid", () => {
  it("shows all projects by default", () => {
    renderGrid();

    expect(visibleTitles()).toEqual(["Web App", "AI Tool"]);
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/showing 2 of 2 projects/i)).toBeInTheDocument();
  });

  it("filters by tag and toggles the filter off on a second click", async () => {
    const user = userEvent.setup();
    renderGrid();

    const aiButton = screen.getByRole("button", { name: "AI" });
    await user.click(aiButton);
    expect(visibleTitles()).toEqual(["AI Tool"]);
    expect(aiButton).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText(/showing 1 of 2 projects/i)).toBeInTheDocument();

    await user.click(aiButton);
    expect(visibleTitles()).toEqual(["Web App", "AI Tool"]);
  });

  it("links each card to its repository in a new tab", () => {
    renderGrid();

    const link = screen.getByRole("link", { name: /ai tool/i });
    expect(link).toHaveAttribute("href", "https://github.com/NicolasCardenass/ai-tool");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders labels, descriptions and statuses in Portuguese", () => {
    renderGrid("pt");

    expect(screen.getByRole("button", { name: "Todos" })).toBeInTheDocument();
    expect(screen.getByText("Mostrando 2 de 2 projetos")).toBeInTheDocument();
    expect(screen.getByText("Uma ferramenta de IA")).toBeInTheDocument();
    expect(screen.getByText("Concluído")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ai tool\s+\(abre em uma nova aba\)/i }),
    ).toBeInTheDocument();
  });
});
