import { skillsCore, skillsSupporting } from "../../data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "48px 32px",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      {/* Section header */}
      <div className="flex items-baseline gap-3" style={{ marginBottom: 28 }}>
        <span className="section-num">01</span>
        <span className="section-title">Skills</span>
      </div>

      {/* Core */}
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-tertiary)",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: 10,
          }}
        >
          Core
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsCore.map((s) => (
            <span key={s} className="pill pill-strong">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Supporting */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-tertiary)",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
            marginBottom: 10,
          }}
        >
          Supporting
        </div>
        <div className="flex flex-wrap gap-2">
          {skillsSupporting.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
