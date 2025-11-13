import { Shield, TrendingUp, Award, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenoga",
    "prosinca",
  ]

  return (
    <section className="relative bg-black h-[250px] md:h-[350px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-casino-interior-golden-roulette-table.jpg"
          alt="Casino background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-3 md:px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-4xl">
          {/* Compact Content */}
          <div className="space-y-2 md:space-y-3">


            {/* Headline */}
            <h1 className="text-xl md:text-3xl font-bold text-white leading-tight text-balance">
              Profesionalne Recenzije <span className="text-[#c9a961]">Kasina</span> u Hrvatskoj
            </h1>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-200 leading-relaxed text-pretty max-w-2xl">
              Objektivne analize licenciranih casino platformi. Transparentne ocjene temeljene na strogim kriterijima.
            </p>

            {/* Trust Indicators - Horizontal compact */}
            <div className="flex items-center gap-3 md:gap-6 pt-1 md:pt-2">
              <div className="flex items-center gap-2">
                <Image src="/flag.png" alt="Trustpilot" width={48} height={32} />
                <div>
                  <p className="text-sm md:text-lg font-bold text-white leading-none">100%</p>
                  <p className="text-[10px] md:text-xs text-gray-200">Licencirano</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1e3a5f] flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-lg font-bold text-white leading-none">50+</p>
                  <p className="text-[10px] md:text-xs text-gray-200">Recenzija</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#c9a961] flex items-center justify-center">
                  <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm md:text-lg font-bold text-white leading-none">10+</p>
                  <p className="text-[10px] md:text-xs text-gray-200">God. iskustva</p>
                </div>
              </div>
            </div>

            {/* Update Badge */}
            <div className="flex items-center gap-2 text-[10px] md:text-xs text-gray-300 pt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="font-medium">
                Ažurirano: {currentDate.getDate()}. {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
