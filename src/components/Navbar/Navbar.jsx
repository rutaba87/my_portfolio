import { useState, useEffect } from "react";
import { navLinks } from "../../data";
// import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          padding: "18px 32px",
          background: "var(--bg)",
          borderBottom: scrolled
            ? "0.5px solid var(--border-strong)"
            : "0.5px solid var(--border)",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.04)" : "none",
          transition: "box-shadow 0.3s",
          margin: "0 auto",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 16,
            color: "var(--accent)",
            fontWeight: 500,
          }}
        >
          RS.
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="blank"
          className="hidden sm:inline-block"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            fontWeight: 500,
            padding: "7px 16px",
            borderRadius: 6,
            background: "var(--accent)",
            color: "#04342C",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          resume →
        </a>

        {/* Hamburger — mobile only - USING REACT ICONS */}
        {/* <button
          className="sm:hidden flex items-center justify-center bg-transparent border-none p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: "transparent" }}
        > */}
        {/* Alternative using react-icons instead of lucide-react - uncomment below and comment above */}
        {/* {menuOpen ? (
            <HiX size={24} style={{ color: "black" }} />
          ) : (
            <HiMenu size={24} style={{ color: "black" }} />
          )}
        </button> */}
      </nav>

      {/* Mobile overlay menu */}
      {/* <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <HiX
            size={24}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "black",
              position: "absolute",
              top: "20px",
              right: "45px",
            }}
          />
        )}
        <ul
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--text-primary)",
            position: "absolute",
            top: "80px",
            left: "35px",
            padding: "10px 20px",
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}
