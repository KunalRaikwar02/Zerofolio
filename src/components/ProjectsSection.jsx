import { useRef, useState, useEffect } from "react";

const projects = [
  {
    number: "01",
    total: "04",
    category: "ECOMMERCE WEBSITE",
    stack: ["REACT", "EXPRESSJS", "NODE.JS", "MONGODB"],
    name: "VELTORN",
    desc: "A premium clothing brand store with seamless shopping experience, cart management, and secure checkout flow.",
    visit: "https://www.veltorn.store/",
    bg: "/images/veltorn1.png",
    mockup: "/images/veltorn2.png",
  },
  {
    number: "02",
    total: "04",
    category: "VIDEO DOWNLOAD",
    stack: ["REACT", "EXPRESSJS", "NODE.JS", "MONGODB"],
    name: "VEL DOWN",
    desc: "Download YouTube videos effortlessly in multiple formats and resolutions with a clean, fast interface.",
    visit: "https://github.com/KunalRaikwar02/Vel-Down",
    bg: "/images/veldown2.png",
    mockup: "/images/veldown1.png",
  },
  {
    number: "03",
    total: "04",
    category: "REACTION DETECT",
    stack: ["REACT", "EXPRESSJS", "NODE.JS", "MONGODB"],
    name: "MODIFY",
    desc: "Login and let AI detect your mood through facial reactions, then get personalized song suggestions that match your vibe.",
    visit: "https://github.com/KunalRaikwar02/Moodify",
    bg: "/images/modify3.png",
    mockup: "/images/modify3.png",
  },
  {
    number: "04",
    total: "04",
    category: "DESIGN YOUR STYLE",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    name: "DESIGN STUDIO",
    desc: "A Figma-like design canvas where you can drag elements, draw circles, create shapes, and erase them freely.",
    visit: "https://design-studio-ebon.vercel.app/",
    bg: "/images/design2.png",
    mockup: "/images/design1.png",
  },
];

function ProjectSlide({ project, index }) {
  return (
    <div
      className="sticky top-0 w-full overflow-hidden"
      style={{
        height: "100vh",
        zIndex: index + 2,
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
   
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "60px",
          overflow: "hidden",
          margin: "1rem 2.5rem",
        }}
      >
        <img
          src={project.bg}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(18px) brightness(0.25)",
            transform: "scale(1.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(16,19,24,0.55)",
          }}
        />
      </div>

    
      <div
        style={{
          position: "relative",
          height: "100%",
          borderRadius: "60px",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
       
        <div
          className="relative h-full flex flex-col justify-between"
          style={{ padding: "2.5rem 3.5rem", zIndex: 2 }}
        >
          {/* TOP ROW */}
          <div className="flex items-start justify-between">
          
            <div className="flex flex-col gap-4">
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  border: "4px solid rgba(255,255,255,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.66rem",
                    letterSpacing: "0.25em",
                    color: "#9ca3af",
                    textTransform: "uppercase",
                  }}
                >
                  PROJECT
                </span>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.85rem",
                    color: "white",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.number} | {project.total}
                </span>
              </div>
            </div>

            {/* Top Right */}
            <div
              className="flex flex-col items-end gap-3"
              style={{ maxWidth: "420px" }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
              <div className="flex gap-4 flex-wrap justify-end">
                {project.stack.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "#9ca3af",
                    }}
                  >
                    {t}
                    {i < project.stack.length - 1 && (
                      <span style={{ marginLeft: "12px", color: "#4b5563" }}>
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="flex items-end justify-between w-full">
            {/* Bottom Left */}
            <div className="flex flex-col gap-3" style={{ maxWidth: "420px" }}>
              <h2
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {project.name}
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "#9ca3af",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {project.desc}
              </p>
              <a
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "white",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  borderRadius: "100px",
                  padding: "10px 22px",
                  textDecoration: "none",
                  transition: "background 0.25s, color 0.25s",
                  alignSelf: "flex-start",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "black";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "white";
                }}
              >
                ( VISIT SITE ↗ )
              </a>
            </div>

            {/* Bottom Right*/}
            <div
              style={{
                width: "clamp(300px, 38vw, 560px)",
                height: "clamp(200px, 26vw, 380px)",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                flexShrink: 0,
             
                marginRight: "1rem",
              }}
            >
              <img
                src={project.mockup}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects">
      {projects.map((project, i) => (
        <ProjectSlide key={i} project={project} index={i} />
      ))}
    </section>
  );
}
