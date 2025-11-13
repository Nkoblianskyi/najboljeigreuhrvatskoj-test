import { CasinoCard } from "./casino-card"
import { casinos } from "@/lib/casinos"

export function RankingsSection() {
  return (
    <section id="rankings" className="px-4 py-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-6">
          {casinos.map((casino, index) => (
            <CasinoCard key={casino.name} casino={casino} isTopChoice={casino.isTopChoice} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
