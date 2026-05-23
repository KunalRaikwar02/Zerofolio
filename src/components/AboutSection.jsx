import { useState } from "react";

const activeImages = [
  {
    src: "/images/me1.jpg",
    title: "RIDER AT HEART",
    desc: "Riding is my therapy when life gets loud. I'm usually out on my bike for a spin.",
  },
  {
    src: "/images/me4.jpg",
    title: "LOVE FOR TRAVEL",
    desc: "Exploring new cities and cultures is what charges me up between projects.",
  },
  {
    src: "/images/me5.jpg",
    title: "MUSIC OBSESSION",
    desc: "Music is life. I'm always listening and sometimes cooking up electronic beats of my own.",
   
  },
];

const smallProjectImages = [
  "/images/about (1).png",
  "/images/about (2).png",
  "/images/about (3).png",
  "/images/about (4).png",
  "/images/about (5).png",
  "/images/about (6).png",
  "/images/about (7).png",
  "/images/about (8).png",
  "/images/about (12).png",
  "/images/about (10).png",
  "/images/about (11).png",

];

export default function AboutSection() {
  const [activeIdx, setActiveIdx] = useState(1);
  const doubled = [...smallProjectImages, ...smallProjectImages];

  const images = [
    {
      centerX: "12%",
      top: "55%",
      width: 220,
      height: 300,
      rotate: "-12deg",
      z: 2,
    },
    {
      centerX: "50%",
      top: "50%",
      width: 280,
      height: 370,
      rotate: "0deg",
      z: 4,
    },
    {
      centerX: "88%",
      top: "55%",
      width: 220,
      height: 300,
      rotate: "10deg",
      z: 2,
    },
  ];

  return (
    <section
      id="about"
      style={{ background: "#101318", padding: "7rem 0 4rem" }}
    >
      {/* About text */}
      <div
  style={{
    maxWidth: "650px",
    margin: "0 auto 5rem auto",
    textAlign: "center",
  }}
>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            color: "white",
            lineHeight: 1.6,
            fontWeight: 400,
          }}
        >
          I blend design, strategy, and engineering to create seamless digital
          experiences. Passionate about clean code and beautiful UI, I've built
          projects ranging from ecommerce platforms to AI-driven apps. Today, I
          bring that expertise to startups and agencies as a creative developer.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          height: "520px",
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
            overflow: "visible",
          }}
          preserveAspectRatio="none"
        >
          <defs>
            <marker id="none" />
          </defs>
        </svg>

        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
        >
        
          <path
            d="M 120 286 Q 500 80 880 286"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.2"
          />
        </svg>

        {images.map((cfg, i) => {
          const isActive = i === activeIdx;
          const w = isActive ? (i === 1 ? 300 : 240) : cfg.width;
          const h = isActive ? (i === 1 ? 400 : 320) : cfg.height;

          return (
            <div
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                position: "absolute",
                left: cfg.centerX,
                top: cfg.top,
                transform: `translate(-50%, -50%) rotate(${cfg.rotate})`,
                width: `${w}px`,
                height: `${h}px`,
                borderRadius: "16px",
                overflow: "hidden",
                zIndex: isActive ? 5 : cfg.z,
                cursor: "pointer",
                boxShadow: isActive
                  ? "0 30px 60px rgba(0,0,0,0.5)"
                  : "0 10px 30px rgba(0,0,0,0.3)",
                transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                filter: isActive ? "none" : "brightness(0.65)",
              }}
            >
              <img
                src={activeImages[i].src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Caption */}
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <h3
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.9rem",
            letterSpacing: "0.3em",
            color: "white",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          {activeImages[activeIdx].title}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            color: "#6b7280",
            maxWidth: "340px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {activeImages[activeIdx].desc}
        </p>
      </div>

      {/* Small projects note */}
      <div style={{ paddingLeft: "30rem", marginBottom: "6rem", marginTop: "10rem" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            color: "white",
            lineHeight: 1.7,
            maxWidth: "700px",
          }}
        >
          I focus on building elegant, performance driven websites that feel
          modern, meaningful, and memorable. I also enjoy exploring motion and
          interaction here are some experiments and side projects:
        </p>
      </div>

      {/* Scrolling image strip */}
      <div style={{ overflow: "hidden", paddingBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            gap: "16px",
            width: "max-content",
            animation: "marqueeAbout 35s linear infinite",
          }}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              style={{
                width: "200px",
                height: "130px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s",
                }}
                onMouseEnter={e => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={e => (e.target.style.transform = "scale(1)")}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeAbout {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}