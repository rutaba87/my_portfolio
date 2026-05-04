import { projects } from "../../data";

export default function Projects() {
  const regular = projects.filter((p) => !p.featured);
  const featured = projects.find((p) => p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "48px 32px",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex items-baseline gap-3" style={{ marginBottom: 28 }}>
        <span className="section-num">02</span>
        <span className="section-title">Projects</span>
      </div>

      {/* Grid */}
      <div
        className="projects-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
      >
        {/* Regular cards */}
        {regular.map((p) => (
          <div key={p.id} className="proj-card">
            <div className="w-full">
              <img src={p.img} className="w-full" />
              {!p.img && <span className="proj-thumb-inner">screenshot</span>}
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: 5,
                }}
              >
                {p.title}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                  marginBottom: 12,
                }}
              >
                {p.desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    live →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Featured full-width card */}
        {featured && (
          <div
            className="proj-card featured-card"
            style={{
              gridColumn: "1 / -1",
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              className="proj-thumb featured-thumb"
              style={{
                height: "100%",
                borderBottom: "none",
                borderRight: "0.5px solid var(--border)",
              }}
            >
              <div className="proj-thumb-lines" />
              <span className="proj-thumb-inner">screenshot</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              <div
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  padding: "2px 10px",
                  borderRadius: 99,
                  background: "var(--accent-light)",
                  color: "var(--accent-dark)",
                  marginBottom: 8,
                }}
              >
                featured
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: 5,
                }}
              >
                {featured.title}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                  marginBottom: 12,
                }}
              >
                {featured.desc}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1">
                  {featured.tags.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 11,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.opacity = "0.7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    live →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
