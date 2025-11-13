import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import PromotionalModal from "@/components/promotional-modal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Najbolje Online Igre u Hrvatskoj | najboljeigreuhrvatskoj.com",
  description:
    "Profesionalne recenzije najboljih hrvatskih online kasina. Pronađite licencirane kasine s visokim bonusima i sigurnom igrom u Hrvatskoj.",
  metadataBase: new URL("https://najboljeigreuhrvatskoj.com"),
  openGraph: {
    title: "Najbolje Online Igre u Hrvatskoj 2025",
    description: "Profesionalne recenzije najboljih hrvatskih online kasina",
    url: "https://najboljeigreuhrvatskoj.com",
    siteName: "najboljeigreuhrvatskoj",
    locale: "hr_HR",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <PromotionalModal />
        <Analytics />
      </body>
    </html>
  )
}
