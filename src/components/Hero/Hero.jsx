export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        padding: "64px 32px 56px",
        borderBottom: "0.5px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid bg top-right */}
      <div className="hero-grid-bg" />

      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--accent)",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 20,
            height: 1,
            background: "var(--accent)",
            flexShrink: 0,
          }}
        />
        frontend developer
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 8vw, 48px)",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "var(--text-primary)",
          marginBottom: 6,
        }}
      >
        Rutaba Shamshad<span style={{ color: "var(--accent)" }}>.</span>
      </div>

      {/* Role */}
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(20px, 5vw, 28px)",
          fontWeight: 400,
          color: "var(--text-secondary)",
          marginBottom: 20,
          lineHeight: 1.3,
        }}
      >
        Building clean
        <br />
        interactive web
        <br />
        experiences.
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: 15,
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          maxWidth: 440,
          marginBottom: 28,
        }}
      >
        Frontend developer specializing in React and modern web technologies,
        crafting responsive interfaces that blend clean design with seamless
        functionality.
      </p>

      {/* Actions */}
      <div
        className="flex flex-wrap gap-3 items-center"
        style={{ marginBottom: 40 }}
      >
        <a
          href="#projects"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            padding: "10px 22px",
            borderRadius: 6,
            background: "var(--accent)",
            color: "#04342C",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View my work
        </a>
        <a
          href="/resume.pdf"
          download="Rutaba_Shamshad_Resume.pdf"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 400,
            padding: "10px 22px",
            borderRadius: 6,
            background: "transparent",
            color: "var(--text-secondary)",
            border: "0.5px solid var(--border-strong)",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--bg-card)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          Download CV
        </a>
      </div>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-8"
        style={{ paddingTop: 28, borderTop: "0.5px solid var(--border)" }}
      >
        {[
          { num: "2", suffix: "+", label: "Years in React" },
          { num: "2.5", suffix: "+", label: "Years responsive design" },
          { num: "5", suffix: "+", label: "Projects shipped" },
        ].map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1,
              }}
            >
              {s.num}
              <span style={{ color: "var(--accent)" }}>{s.suffix}</span>
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-tertiary)",
                marginTop: 4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
