import type { ProjectStatus } from "../projects";

/**
 * All user-facing text of the site. Values are plain strings (templates use
 * `{placeholder}` syntax) so dictionaries can be passed to Client Components.
 */
export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  common: {
    skipToContent: string;
    opensInNewTab: string;
  };
  nav: {
    label: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  language: {
    /** Short label of the *other* language, shown on the switcher. */
    switchLabel: string;
    /** Screen-reader text appended to the switcher, written in the other language. */
    switchDescription: string;
  };
  hero: {
    greeting: string;
    role: string;
    pitch: string;
    viewProjects: string;
    location: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    facts: readonly { label: string; value: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    /** Template with a `{group}` placeholder. */
    groupSkillsLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    filterLabel: string;
    all: string;
    /** Template with `{visible}` and `{total}` placeholders. */
    showing: string;
    tagged: string;
    technologies: string;
    viewRepository: string;
    status: Record<ProjectStatus, string>;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    sayHello: string;
  };
  footer: {
    label: string;
    /** Template with `{year}` and `{name}` placeholders. */
    rights: string;
    email: string;
    backToTop: string;
  };
};
