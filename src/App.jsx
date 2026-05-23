import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLoading(false);
      setHeroReady(true);
    }, 1500);

    return () => clearTimeout(t1);
  }, []);

  return (
    <div className="bg-[#101318] min-h-screen text-white">
      {loading && <LoadingScreen />}

      <Navbar />

      <main>
        <HeroSection heroReady={heroReady} />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}