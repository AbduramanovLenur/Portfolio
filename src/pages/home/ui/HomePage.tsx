import { About } from '@widgets/about';
import { Contact } from '@widgets/contact';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';
import { Hero } from '@widgets/hero';
import { Portfolio } from '@widgets/portfolio';
import { Social } from '@widgets/social';
import { Technologies } from '@widgets/technologies';
import { BackgroundEffects } from '@shared/ui';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <BackgroundEffects />
      <Header />

      <main className="relative z-10 pt-[80px] lg:pt-[64px]">
        <Hero />
        <About />
        <Technologies />
        <Portfolio />
        <Social />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;