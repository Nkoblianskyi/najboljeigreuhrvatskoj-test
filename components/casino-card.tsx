import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Image from "next/image"

interface CasinoCardProps {
  casino: Casino
  isTopChoice?: boolean
  rank?: number
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.min(Math.max(((rating - (i - 1)) / 0.2) * 20, 0), 100)
    stars.push(
      <div key={i} className="relative">
        <Star className="h-3 w-3 md:h-4 md:w-4 text-gray-300" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>,
    )
  }
  return <div className="flex gap-0.5 text-center">{stars}</div>
}

export function CasinoCard({ casino, isTopChoice = false, rank }: CasinoCardProps) {
  const getBadgeText = (rank?: number) => {
    if (rank === 1) return "PREPORUČENO"
    if (rank === 2) return "POPULARNO"
    if (rank === 3) return "IZBOR IGRAČA"
    return ""
  }

  const showBadge = rank && rank <= 3
  const isFirstCard = rank === 1

  return (
    <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card
        className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-white ${
          isFirstCard
            ? "border-2 border-yellow-400 shadow-lg shadow-yellow-400/20"
            : "border-gray-200 hover:border-yellow-400/50"
        }`}
      >
        {showBadge && (
          <Badge
            className={`absolute top-0 left-0 font-semibold px-4 py-1.5 rounded-none rounded-br-md z-10 border-none ${
              isFirstCard ? "bg-yellow-400 text-gray-900" : "bg-yellow-400 text-gray-900"
            }`}
          >
            {getBadgeText(rank)}
          </Badge>
        )}

        <div className="p-4 md:p-6 flex flex-col h-full md:py-0 py-0">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Row 1: Logo and Bonus */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex justify-center bg-black p-2 rounded-md">
                <Image
                  width={200}
                  height={160}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-28 h-20 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-600 mb-1">Bonus dobrodošlice</p>
                <p className="font-bold text-black leading-tight text-base">{casino.bonus}</p>
              </div>
            </div>

            {/* Row 2: Rating, Stars+Reviews, Button */}
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <span className="text-lg font-bold text-gray-900">{casino.rating}</span>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <StarRating rating={casino.rating} />
                <p className="text-[10px] text-gray-600 mt-0.5">({casino.votes})</p>
              </div>
              <div className="flex justify-center">
                <Button
                  className={`hover:opacity-90 font-semibold px-3 py-2 text-xs h-auto w-full ${
                    isFirstCard
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                      : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                  }`}
                >
                  Igrajte sada
                </Button>
              </div>
            </div>

            {/* Row 3: Terms */}
            <div className="text-[8px] text-gray-600 text-center pt-2 border-t border-gray-200">
              <p>{casino.terms}</p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-col">
            <div className="flex items-center justify-between gap-6 flex-1">
              <div className="flex items-center gap-6">
                <Image
                  width={200}
                  height={160}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-40 h-32 object-contain bg-black rounded-md"
                />
              </div>

              <div className="flex-1 flex flex-col items-center text-center gap-2">
                <p className="text-sm text-gray-600 font-medium">Bonus dobrodošlice</p>
                <p className="text-xl md:text-xl font-bold text-black">{casino.bonus}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <span className="font-bold text-gray-900 text-2xl">{casino.rating}</span>
                  </div>
                  <StarRating rating={casino.rating} />
                  <p className="text-xs text-gray-600 mt-1">({casino.votes} recenzija)</p>
                </div>

                <Button
                  className={`hover:opacity-90 font-semibold px-6 py-2.5 h-auto ${
                    isFirstCard
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                      : "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                  }`}
                >
                  Recenzija <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-xs text-gray-600 text-center mt-auto border-t border-gray-200 pt-0">
              <p>{casino.terms}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
