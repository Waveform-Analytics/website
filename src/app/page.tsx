// ─────────────────────────────────────────────────────────────────────────────
// waveformanalytics.com
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";

const GITHUB = "https://github.com/Waveform-Analytics";
const LINKEDIN = "https://www.linkedin.com/company/waveform-analytics-llc";
const EMAIL = "michelle@waveformanalytics.com";

// ─── Card color schemes ───────────────────────────────────────────────────────
// Pick a scheme name for each work item. Add new schemes here as needed.

const schemes = {
  charcoal: {
    bg: "#1c1917",
    accent: "#b85c2a",
    text: "#f8f6f1",
    muted: "#8a847c",
  },
  forest: {
    bg: "#2d4a3e",
    accent: "#6fcba0",
    text: "#f8f6f1",
    muted: "#8aab9a",
  },
  navy: { bg: "#0f2240", accent: "#7eb8d4", text: "#f8f6f1", muted: "#6a8fa3" },
  plum: { bg: "#2d1f3d", accent: "#b48fd4", text: "#f8f6f1", muted: "#8a7a9a" },
  slate: {
    bg: "#1e2d3d",
    accent: "#e8a87c",
    text: "#f8f6f1",
    muted: "#7a8fa0",
  },
} as const;

type SchemeName = keyof typeof schemes;

// ─── Work items ──────────────────────────────────────────────────────────────
// Add new projects here. Pick a `scheme` from the list above.
// Each card can optionally have a `link`.

type WorkItem = {
  category: string;
  year: string;
  title: string;
  description: string;
  scheme: SchemeName;
  link?: string;
  linkLabel?: string; // optional display text for the link; defaults to the URL
};

const work: WorkItem[] = [
  {
    category: "Science",
    year: "2018-ongoing",
    title: "Animal movement simulation software tools",
    description:
      "Spec-driven animal movement and sound exposure modeling in support of regulatory compliance and the protection of marine fauna. Includes comprehensive test coverage and fully reproducible outputs. Built to be handed off with documentation that users and future developers can actually use.",
    scheme: "charcoal",
  },
  {
    category: "Science",
    year: "2024-2026",
    title: "Acoustic indices as biological activity indicators",
    description:
      "Collaborative research with Liz Ferguson (Ocean Science Analytics) testing whether acoustic indices can predict biological activity in a temperate estuary. Indices predicted presence reliably (AUC 0.74–0.92) but not activity counts. This is a practically important distinction for large-scale PAM monitoring programs.",
    scheme: "navy",
    link: "https://waveform-analytics.github.io/mbon-indices-study/results-viewer.html",
    linkLabel: "Results viewer",
  },
  {
    category: "Tools",
    year: "ongoing",
    title: "Science spec kit",
    description:
      "A scientific adaptation of GitHub's spec-kit — bringing spec-driven development to scientific software. Makes reproducibility, documentation, and rigorous process a built-in part of the workflow rather than an afterthought. Designed to work across AI coding tools via an adapter system.",
    scheme: "plum",
    link: "https://github.com/Waveform-Analytics/science-spec-kit",
    linkLabel: "Github page",
  },
  {
    category: "Community",
    year: "2026",
    title: "Local Sunshine",
    description:
      "Neighborhood discovery app for Pleasure Island, NC. Promotes local businesses, events, and community resources. Built to production standard, not just 'good for a side project.'",
    scheme: "forest",
    link: "https://local-sunshine.app",
    linkLabel: "Local sunshine web app",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ── Nav ── */}
      <header style={{ borderBottom: "0.5px solid var(--border)" }}>
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Waveform Analytics"
              height={32}
              width={61}
            />
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              Work
            </a>
            <a
              href="#about"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              Contact
            </a>
            <span style={{ color: "var(--border)" }}>|</span>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section
        className="max-w-5xl mx-auto px-6 py-16"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <div className="flex items-start justify-between gap-10 flex-wrap">
          <div className="flex-1" style={{ minWidth: "280px" }}>
            <p
              className="text-xs font-medium mb-5 tracking-widest uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              Michelle Weirathmueller, PhD
            </p>
            <h1
              className="text-4xl font-medium leading-tight"
              style={{ maxWidth: "520px" }}
            >
              Oceanographer building software for science, communities, and the
              spaces in between.
            </h1>
          </div>

          <div className="pt-1" style={{ minWidth: "180px" }}>
            <div
              style={{
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "16px",
              }}
            >
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--muted)" }}
              >
                Waveform Analytics
                <br />
                Wilmington, NC · est. 2024
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm transition-colors"
                style={{ color: "var(--accent)" }}
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section
        id="work"
        className="max-w-5xl mx-auto px-6 py-14"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <p
          className="text-xs font-medium mb-8 tracking-widest uppercase"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Selected work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {work.map((item) => (
            <WorkCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-14"
        style={{ borderBottom: "0.5px solid var(--border)" }}
      >
        <p
          className="text-xs font-medium mb-8 tracking-widest uppercase"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          About
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <p className="text-base leading-relaxed">
              I founded Waveform Analytics in 2024 after a decade in ocean
              acoustics. I held graduate research positions (University of New
              Hampshire, University of Washington - Seattle), modeled marine
              animal noise exposure at JASCO Applied Sciences, and eventually
              realized I wanted to build the tools, not just use them.
            </p>
            <p className="text-base leading-relaxed">
              My background is in marine acoustics and engineering, but what I
              actually do is build things: scientific analysis pipelines,
              software tools, community web apps, data workflows, documentation
              systems. I work across domains: marine science, civic tech, family
              tools — and hold the same standard across all of them.
            </p>
            <p className="text-base leading-relaxed">
              I care about process as much as product. I follow spec-driven
              development, write tests, and document everything with the
              assumption that a future developer (or future me) will need to
              pick it up cold. Reproducibility isn&apos;t a bonus — it&apos;s
              the job.
            </p>
          </div>
          <div className="space-y-5 text-sm">
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-2"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Education
              </p>
              <p className="font-medium">PhD Oceanography</p>
              <p style={{ color: "var(--muted)" }}>
                University of Washington, 2016
              </p>
              <p className="font-medium mt-2">MS Ocean Engineering</p>
              <p style={{ color: "var(--muted)" }}>
                University of New Hampshire
              </p>
              <p className="font-medium mt-2">BS Geomatics Engineering</p>
              <p style={{ color: "var(--muted)" }}>
                University of New Brunswick
              </p>
            </div>
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-2"
                style={{
                  color: "var(--muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Stack
              </p>
              <p style={{ color: "var(--muted)" }} className="leading-relaxed">
                Python · Next.js · TypeScript · D3 · Marimo · uv · PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-14">
        <p
          className="text-xs font-medium mb-6 tracking-widest uppercase"
          style={{ color: "var(--muted)", fontFamily: "var(--font-mono)" }}
        >
          Contact
        </p>
        <p
          className="text-base leading-relaxed mb-6"
          style={{ maxWidth: "440px" }}
        >
          Interested in working together, or just want to talk about something
          you&apos;re building? Get in touch.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          style={{ background: "var(--accent)", color: "#f8f6f1" }}
        >
          {EMAIL}
        </a>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "0.5px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Waveform Analytics · Michelle
            Weirathmueller, PhD
          </span>
          <div className="flex gap-5">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors"
              style={{ color: "var(--muted)" }}
            >
              GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors"
              style={{ color: "var(--muted)" }}
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-xs transition-colors"
              style={{ color: "var(--muted)" }}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Work card component ──────────────────────────────────────────────────────

function WorkCard({ item }: { item: WorkItem }) {
  const s = schemes[item.scheme];
  const inner = (
    <div
      className="rounded-lg p-6 h-full flex flex-col"
      style={{ background: s.bg, minHeight: "180px" }}
    >
      <p
        className="text-xs font-medium mb-3 tracking-widest uppercase"
        style={{ color: s.accent, fontFamily: "var(--font-mono)" }}
      >
        {item.category} · {item.year}
      </p>
      <h3 className="text-base font-medium mb-3" style={{ color: s.text }}>
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: s.muted }}>
        {item.description}
      </p>
      {item.link && (
        <p
          className="text-xs mt-4 tracking-wide"
          style={{ color: s.accent, fontFamily: "var(--font-mono)" }}
        >
          {item.linkLabel ?? item.link.replace("https://", "")} ↗
        </p>
      )}
    </div>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }

  return <div>{inner}</div>;
}
