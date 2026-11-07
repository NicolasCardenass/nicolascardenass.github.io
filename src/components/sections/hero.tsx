import { ExternalLink } from "@/components/external-link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24"
    >
      <p className="text-accent font-mono text-sm">Hi, my name is</p>
      <h1 id="hero-heading" className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
        {site.name}.
      </h1>
      <p className="text-muted mt-4 text-xl font-medium sm:text-2xl">{site.role}</p>
      <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
        I build web applications, APIs and AI-powered tools, bringing an engineer&apos;s way of
        thinking about systems, signals and reliability into software.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="bg-accent text-accent-foreground inline-flex h-11 items-center rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90"
        >
          View projects
        </a>
        <ExternalLink
          href={site.githubUrl}
          className="border-border hover:border-foreground/40 inline-flex h-11 items-center gap-2 rounded-full border px-6 text-sm font-medium transition-colors"
        >
          <GitHubIcon />
          GitHub
        </ExternalLink>
      </div>

      <p className="text-muted mt-12 font-mono text-xs">
        <span aria-hidden="true">📍</span> {site.location}
      </p>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
