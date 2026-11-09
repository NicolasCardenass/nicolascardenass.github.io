import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { en } from "@/lib/i18n/en";
import { getNavItems } from "@/lib/nav";
import { MobileNav } from "./mobile-nav";

function renderMenu() {
  return render(<MobileNav items={getNavItems(en.nav)} labels={en.nav} />);
}

describe("MobileNav", () => {
  it("opens and closes the menu, returning focus on Escape", async () => {
    const user = userEvent.setup();
    renderMenu();

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: "Projects" })).not.toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("href", "#projects");

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });

  it("closes after a link is chosen", async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    await user.click(screen.getByRole("link", { name: "About" }));

    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
