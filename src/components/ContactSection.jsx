import { useState, useEffect } from "react";

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const ist = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(ist);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);
  return <span>IST — {time}</span>;
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{ background: "#101318", paddingLeft: "10rem", paddingRight: "15rem",  }}
    >
      {/* CTA headline */}
      <div style={{ marginBottom: "2.5rem" }}>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            color: "white",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "680px",
            margin: "0 0 2rem",
          }}
        >
          Let's build and ship something remarkable. Open to agency
          collaborations, freelance work, and fully remote full-time
          opportunities.
        </h2>

        {/* CTA button */}
        <a
          href="mailto:kunalraikwar12367@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "white",
            border: "1.5px solid rgba(255,255,255,0.35)",
            borderRadius: "100px",
            padding: "12px 28px",
            textDecoration: "none",
            transition: "background 0.25s, color 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "black"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}
        >
          ( LET'S WORK TOGETHER ↗ )
        </a>
      </div>

      {/* Large gap */}
      <div style={{ height: "5rem" }} />

      {/* Horizontal rule */}
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "1.75rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
          alignItems: "start",
          marginBottom: "4rem",
        }}
      >
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href="mailto:kunalraikwar12367@gmail.com"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "#6b7280"}
          >
            KUNALRAIKWAR12367@GMAIL.COM
          </a>
          <a
            href="https://www.instagram.com/kuntazzzz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "#6b7280"}
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-raikwar-b05387382/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "#6b7280"}
          >
            LINKEDIN
          </a>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              textTransform: "uppercase",
            }}
          >
            <LiveTime />
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
              textAlign: "left",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "#6b7280"}
          >
            BACK TO TOP
          </button>
        </div>

        {/* Right */}
        <div style={{ display: "flex", justifyContent: "flex-end"}}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#6b7280",
              textTransform: "uppercase",
            }}
          >
            DESIGNED BY{" "}
            <span
              style={{
                color: "white",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              KUNAL
            </span>
          </span>
        </div>
      </div>

      <BigName />
    </section>
  );
}

function BigName() {
  const [hover, setHover] = useState(false);
  const name = "KUNAL RAIKWAR";

  return (
    <div
      style={{
        overflow: "hidden",
        marginLeft: "0",
        marginRight: "0",
        lineHeight: 1,
      }}
    >
      <h1
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(3rem, 8.5vw, 11rem)",
          fontWeight: 700,
          transform: "scaleY(1.5)",
          color: "white",
          letterSpacing: "-0.02em",
          lineHeight: 0.9,
          display: "flex",
          whiteSpace: "nowrap",
          cursor: "default",
          userSelect: "none",
          marginTop: "4rem",
          marginBottom: "4rem",
          padding: "0 3.5rem",
          textShadow: hover
            ? "6px 6px 0 #facc15, 10px 10px 0 rgba(250,204,21,0.2)"
            : "none",
          transition: "text-shadow 0.15s",
        }}
      >
        {name.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: hover ? `translateY(${Math.sin(i * 0.9) * 7}px)` : "none",
              transition: `transform 0.15s ease ${i * 18}ms`,
              color: char === " " ? "transparent" : "white",
            }}
          >
            {char === " " ? "\u00A0\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}
