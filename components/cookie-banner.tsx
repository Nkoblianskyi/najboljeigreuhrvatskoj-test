"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-yellow-400/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-200 leading-relaxed">
              Koristimo kolačiće kako bismo poboljšali vaše iskustvo pregledavanja i pružili vam personalizirani
              sadržaj. Nastavljajući koristiti našu stranicu, pristajete na upotrebu kolačića.{" "}
              <Link
                href="/cookie-politika"
                className="text-yellow-400 hover:text-yellow-300 underline font-medium transition-colors"
              >
                Saznajte više
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="h-9 px-4 text-sm border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent transition-colors"
            >
              Odbij
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="h-9 px-5 text-sm bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-colors"
            >
              Prihvati
            </Button>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
