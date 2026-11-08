import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { THEME_STORAGE_KEY } from "@/lib/theme";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  it("switches between dark and light and persists the choice", async () => {
    const user = userEvent.setup();
    document.documentElement.setAttribute("data-theme", "dark");
    render(<ThemeToggle />);

    await user.click(screen.getByRole("button", { name: /switch to light theme/i }));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");

    await user.click(screen.getByRole("button", { name: /switch to dark theme/i }));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
  });
});
