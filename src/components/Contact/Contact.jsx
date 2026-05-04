import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_ufy1w5f",
        "template_tz0fyes",
        formRef.current,
        "5PAyLdO5MMC11Guoo",
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "48px 32px",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex items-baseline gap-3" style={{ marginBottom: 28 }}>
        <span className="section-num">04</span>
        <span className="section-title">Contact</span>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        {/* Name + Email row */}
        <div
          className="contact-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <input
            className="contact-input"
            name="from_name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="contact-input"
            name="reply_to"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        {/* Message */}
        <textarea
          className="contact-textarea"
          name="message"
          placeholder="Message — say hello, share an opportunity, ask a question..."
          required
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            fontWeight: 500,
            padding: "10px 24px",
            borderRadius: 6,
            background: "var(--accent)",
            color: "#04342C",
            border: "none",
            cursor: status === "idle" ? "pointer" : "default",
            opacity: status === "sending" || status === "sent" ? 0.7 : 1,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            if (status === "idle") e.currentTarget.style.opacity = "0.85";
          }}
          onMouseLeave={(e) => {
            if (status === "idle") e.currentTarget.style.opacity = "1";
          }}
        >
          {status === "idle" && "Send message"}
          {status === "sending" && "Sending..."}
          {status === "sent" && "✓ Sent!"}
          {status === "error" && "Error — try again"}
        </button>

        {/* Note */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-tertiary)",
            marginTop: 10,
          }}
        >
          // or reach me at{" "}
          <a
            href="mailto:rutabashamshad@gmail.com"
            style={{ color: "var(--accent)" }}
          >
            rutabashamshad@gmail.com
          </a>
        </div>
      </form>
    </section>
  );
}
