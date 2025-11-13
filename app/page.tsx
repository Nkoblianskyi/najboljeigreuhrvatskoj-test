import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { AboutSection } from "@/components/about-section"
import { ResponsibleGamingSection } from "@/components/responsible-gaming-section"
import { GuideSection } from "@/components/guide-section"
import { SportInfoSection } from "@/components/sport-info-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: "url('/casino-background-pattern.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <RankingsSection />
          <AboutSection />
          <ResponsibleGamingSection />
          <GuideSection />
          <SportInfoSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
