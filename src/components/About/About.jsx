import { socials } from "../../data";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "48px 32px",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex items-baseline gap-3" style={{ marginBottom: 28 }}>
        <span className="section-num">03</span>
        <span className="section-title">About</span>
      </div>

      {/* Grid: text + avatar */}
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 80px",
          gap: 32,
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            I'm a <span className="about-highlight">frontend developer</span>{" "}
            with 2+ years of frontend development and 2 years of React JS experience and a sharp eye for responsive
            design across a range of projects. I care about the details — the
            spacing, the transitions, the moment a layout collapses gracefully
            on a small screen.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            Currently open to{" "}
            <span className="about-highlight">frontend roles</span> where I can
            keep growing, ship real products, and work with a team that cares
            about craft.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap gap-2" style={{ marginTop: 20 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="about-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div
          className="avatar-box"
          style={{
            width: 80,
            height: 80,
            borderRadius: 10,
            background: "var(--accent-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontSize: 26,
            color: "var(--accent-dark)",
            border: "0.5px solid #9FE1CB",
            flexShrink: 0,
          }}
        >
          RS
        </div>
      </div>
    </section>
  );
}
