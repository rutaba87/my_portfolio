export default function Footer() {
  return (
    <footer
      style={{
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-tertiary)",
        }}
      >
        © {new Date().getFullYear()} Rutaba Shamshad
        <span style={{ color: "var(--accent)" }}>.</span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-tertiary)",
        }}
      >
        built with React <span style={{ color: "var(--accent)" }}>·</span>{" "}
        deployed on Vercel
      </div>
    </footer>
  );
}
