import type { AnchorHTMLAttributes } from "react";

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
  href: string;
  /** Screen-reader hint appended to the link text. */
  newTabHint?: string;
};

/** Link that opens in a new tab, safely and with a screen-reader hint. */
export function ExternalLink({
  children,
  newTabHint = "(opens in a new tab)",
  ...props
}: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children} <span className="sr-only">{newTabHint}</span>
    </a>
  );
}
