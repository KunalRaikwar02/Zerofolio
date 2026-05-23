import { useState, useEffect } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT ME", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href, label) => {
    setActiveLink(label);
    setSettingsOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-16 py-8"
        style={{
          background: "transparent",
          transition: "opacity 0.4s, transform 0.4s",
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "all",
          transform: scrolled ? "translateY(-20px)" : "translateY(0)",
        }}
      >
        <div
          className="text-white font-bold tracking-widest cursor-pointer select-none"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.5rem" }}
          onClick={() => scrollTo("#home", "HOME")}
        >
          KR
        </div>

        <div className="flex items-center gap-10">
          {navLinks
            .filter((l) => l.label !== "HOME")
            .map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href, link.label)}
                className="group flex items-center bg-transparent border-none cursor-pointer"
              >
                <span
                  className="text-gray-500 group-hover:text-white transition-all duration-200"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                  }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 mr-1">
                    (
                  </span>
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 ml-1">
                    )
                  </span>
                </span>
              </button>
            ))}
        </div>
      </nav>

      {/* Settings Menu */}
      <div
        className="fixed top-5 right-6 z-[200]"
        style={{
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? "all" : "none",
          transition: "opacity 0.4s",
          paddingBottom: "22px",
        }}
        onMouseEnter={() => setSettingsOpen(true)}
        onMouseLeave={() => setSettingsOpen(false)}
      >
        <button
          className="flex flex-col justify-center items-end gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          style={{ position: "relative", zIndex: 2 }}
        >
          <span
            className="block h-[2px] bg-white transition-all duration-300"
            style={{ width: "24px" }}
          />
          <span
            className="block h-[2px] bg-white transition-all duration-300"
            style={{ width: "18px" }}
          />
          <span
            className="block h-[2px] bg-white transition-all duration-300"
            style={{ width: "24px" }}
          />
        </button>

        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            background: "rgba(16,19,24,0.82)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "22px",
            padding: "28px 34px",
            minWidth: "240px",
            opacity: settingsOpen ? 1 : 0,
            transform: settingsOpen
              ? "translateY(0) scale(1)"
              : "translateY(-8px) scale(0.96)",
            pointerEvents: settingsOpen ? "all" : "none",
            transition:
              "opacity 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href, link.label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: activeLink === link.label ? "white" : "#9ca3af",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "11px 0",
                width: "100%",
                textAlign: "left",
                transition: "color 0.2s, transform 0.2s",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  activeLink === link.label ? "white" : "#9ca3af";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {activeLink === link.label && (
                <span style={{ color: "white", opacity: 0.5 }}>(</span>
              )}
              <span>{link.label}</span>
              {activeLink === link.label && (
                <span style={{ color: "white", opacity: 0.5 }}>)</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}