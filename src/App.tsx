import { HashRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Technologies } from "@/sections/Technologies";
import { Portfolio } from "@/sections/Portfolio";
import { Social } from "@/sections/Social";
import { ContactForm } from "@/sections/ContactForm";
import { Footer } from "@/sections/Footer";
import "@/i18n/config";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navigation />

      {/* Scroll to top */}
      <ScrollToTop />

      {/* Main content */}
      <main className="relative z-10 pt-[80px] lg:pt-[64px]">
        <Hero />
        <About />
        <Technologies />
        <Portfolio />
        <Social />
        <ContactForm />
      </main>

      {/* Footer - only show on home page */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
