"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <Link href={topCasino.url} target="_blank" rel="noopener noreferrer">
          <div className="bg-white border-2 border-yellow-400 rounded-lg overflow-hidden shadow-2xl transform transition-all hover:scale-105">
            <div className="bg-yellow-400 p-4 text-center">
              <h2 className="text-xl font-bold text-gray-900">EKSKLUZIVNA PONUDA</h2>
              <p className="text-sm text-gray-900 font-medium">Najbolji Casino u Hrvatskoj</p>
            </div>

            <div className="p-6 text-center space-y-4 ">
              <div className="flex justify-center bg-black p-2 rounded-md">
                <Image
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={topCasino.name}
                  width={280}
                  height={220}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= topCasino.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">{topCasino.rating}/10</span>
                <span className="text-gray-600 text-sm">({topCasino.votes.toLocaleString()} recenzija)</span>
              </div>

              <div className="mb-8 mt-8">
                <p className="text-sm text-gray-600 mb-1">Bonus dobrodošlice</p>
                <p className="text-xl font-bold text-gray-900">{topCasino.bonus}</p>
              </div>

              <div className="pt-4">
                <div className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg">
                  Igraj Sada →
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">{topCasino.terms}</p>
            </div>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-2 transition-colors shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
