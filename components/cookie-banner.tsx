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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700 leading-snug">
              Vi bruger cookies for at forbedre din oplevelse.{" "}
              <Link href="/cookie-politik" className="text-red-600 hover:text-red-700 underline font-medium">
                Læs mere
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Afvis
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="h-8 px-4 text-xs bg-red-600 hover:bg-red-700 text-white font-medium"
            >
              Accepter
            </Button>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
