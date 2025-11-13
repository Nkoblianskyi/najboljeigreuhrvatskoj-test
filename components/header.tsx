"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/90 shadow-lg shadow-black/20">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg md:text-xl font-bold tracking-tight">
            <span className="text-white">NajboljeIgre</span>
            <span className="text-gray-400">UHrvatskoj</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
