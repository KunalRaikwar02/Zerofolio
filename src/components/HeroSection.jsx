import { useEffect, useRef, useState } from "react";

export default function HeroSection({ heroReady = true }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll =
        sectionRef.current.offsetHeight - window.innerHeight;

      const scrolled = Math.min(
        Math.max(-rect.top / totalScroll, 0),
        1
      );

      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MAGNET EFFECT
  const handleMagnet = (e) => {
    const item = e.currentTarget;

    const rect = item.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    item.style.transform = `
      translate(${-x * 0.18}px, ${-y * 0.18}px)
    `;

    item.style.textShadow = `
      ${-x * 0.12}px ${y * 0.12}px 0 rgba(250,204,21,0.25),
      ${-x * 0.22}px ${y * 0.22}px 40px rgba(250,204,21,0.22)
    `;
  };

  const resetMagnet = (e) => {
    e.currentTarget.style.transform = "translate(0px,0px)";
    e.currentTarget.style.textShadow = "none";
  };

  const imageWidth = `${30 + progress * 62}vw`;
  const imageHeight = `${18 + progress * 68}vh`;
  const imageRadius = 22 + progress * 38;

  const imageBottom = `${3 - progress * 1}rem`;

  const textOpacity = heroReady
    ? Math.max(1 - progress * 2, 0)
    : 0;

  const bottomTextOpacity = heroReady
    ? Math.max(1 - progress * 2.2, 0)
    : 0;

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        height: "320vh",
        position: "relative",
        background: "#101318",
        zIndex: 1,
      }}
    >
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Hero Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            heroReady
              ? "hero-content-show"
              : "hero-content-hidden"
          }`}
          style={{
            zIndex: 10,
            paddingBottom: "24vh",
            opacity: textOpacity,
            transform: `translateY(${-progress * 80}px)`,
            transition:
              "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5rem",
            }}
          >
            <div className="hero-bracket left-bracket"></div>

            <div className="text-center">
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.9rem",
                  letterSpacing: "0.35em",
                  color: "white",
                  marginBottom: "1.2rem",
                  textTransform: "uppercase",
                }}
              >
                HELLO!
              </p>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#a1a1aa",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                I’m Kunal Raikwar, a web
                <br />
                developer and engineer.
                <br />
                Welcome to my portfolio!
              </p>
            </div>

            <div className="hero-bracket right-bracket"></div>
          </div>
        </div>

        {/* CREATIVE + DEV */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end justify-between"
          style={{
            paddingLeft: "3vw",
            paddingRight: "3vw",
            paddingBottom: "3rem",
            zIndex: 20,
            pointerEvents: "auto",
          }}
        >
          {/* CREATIVE */}
          <div
            style={{
              opacity: bottomTextOpacity,
              transform: `translateY(${progress * 80}px)`,
            }}
          >
            <span
              className="creative-hover hero-big-text"
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
            >
              CREATIVE
            </span>
          </div>

          {/* DEV */}
          <div
            style={{
              opacity: bottomTextOpacity,
              transform: `translateY(${progress * 80}px)`,
            }}
          >
            <span
              className="creative-hover hero-big-text"
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
            >
              DEV
            </span>
          </div>
        </div>

        {/* Center Zoom Image */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: imageBottom,
            width: imageWidth,
            height: imageHeight,
            maxWidth: "92vw",
            maxHeight: "86vh",
            borderRadius: `${imageRadius}px`,
            overflow: "hidden",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.55)",
            transform: `translateX(${
              -10 - progress * 40
            }%)`,
            transformOrigin: "center center",
            zIndex: 30,
            opacity: heroReady ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <img
            src="/images/hero1.png"
            alt="workspace"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: `brightness(${
                0.9 - progress * 0.12
              })`,
            }}
          />
        </div>
      </div>

      <style>{`
        .hero-content-hidden {
          opacity: 0;
        }

        .hero-content-show {
          animation: heroContentEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes heroContentEnter {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .hero-big-text {
          font-family: 'Space Mono', monospace;
          font-size: clamp(4rem, 10vw, 9rem);
          font-weight: 700;
          color: white;
          line-height: 0.85;
          letter-spacing: -0.04em;
          user-select: none;
        }

        .creative-hover {
          position: relative;
          display: inline-block;
          transition:
            transform 0.18s ease,
            text-shadow 0.18s ease,
            color 0.18s ease;
          cursor: pointer;
          will-change: transform;
        }

        .creative-hover:hover {
          color: #facc15;
        }

        .hero-bracket {
          width: 55px;
          height: 170px;
          border-top: 6px solid white;
          border-bottom: 6px solid white;
          opacity: 0.95;
        }

        .left-bracket {
          border-left: 5px solid white;
          border-radius: 100px 0 0 100px;
        }

        .right-bracket {
          border-right: 5px solid white;
          border-radius: 0 100px 100px 0;
        }

        @media (max-width: 900px) {
          .hero-bracket {
            width: 50px;
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .hero-bracket {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}