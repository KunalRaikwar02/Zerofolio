export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-bracket left-loader-bracket"></div>

        <p className="loading-text">LOADING...</p>

        <div className="loading-bracket right-loader-bracket"></div>
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: #101318;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 24vh;
          animation: loadingExit 0.65s ease forwards;
          animation-delay: 1.15s;
        }

        .loading-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5rem;
          transform: scale(1);
          animation: loadingContentExit 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 1.15s;
        }

        .loading-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          letter-spacing: 0.35em;
          color: white;
          margin: 0;
          animation: loadingPulse 0.8s ease-in-out infinite alternate;
        }

        .loading-bracket {
          width: 55px;
          height: 170px;
          border-top: 6px solid white;
          border-bottom: 6px solid white;
          opacity: 0.95;
        }

        .left-loader-bracket {
          border-left: 5px solid white;
          border-radius: 100px 0 0 100px;
        }

        .right-loader-bracket {
          border-right: 5px solid white;
          border-radius: 0 100px 100px 0;
        }

        @keyframes loadingPulse {
          from {
            opacity: 0.35;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes loadingContentExit {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.08);
          }
        }

        @keyframes loadingExit {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }

        @media (max-width: 900px) {
          .loading-content {
            gap: 3rem;
          }

          .loading-bracket {
            width: 50px;
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .loading-bracket {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}