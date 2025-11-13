import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">NajboljeIgre</span>
                <span className="text-gray-400">UHrvatskoj</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Profesionalni portal sa stručnim recenzijama online kasina. Pružamo objektivne informacije za donošenje
              informiranih odluka o platformama za igre.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#rankings" className="text-sm text-gray-400 hover:text-[#c9a961] transition-colors">
                  Top Kasina
                </Link>
              </li>
              <li>
                <Link href="/#guide" className="text-sm text-gray-400 hover:text-[#c9a961] transition-colors">
                  Vodič
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Pravno</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookie-politika" className="text-sm text-gray-400 hover:text-[#c9a961] transition-colors">
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-sm text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  Politika Privatnosti
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible gaming section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold text-white">Odgovorno Kockanje</h3>
          </div>
          <div className="flex flex-wrap gap-6 items-center mb-4">
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image
                src="/hupis.png"
                alt="HUPIS"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/pbsvi.svg" alt="PBSVI" width={100} height={40} className="object-contain" />
            </a>

            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image src="/gamble-aware.webp" alt="GambleAware" width={100} height={40} className="object-contain" />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/gamstop.svg"
                alt="GamStop"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image
                src="/gamecare-new.svg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">
            Kockanje može izazvati ovisnost. Igrajte odgovorno. Ova web stranica sadrži affiliate linkove i možemo
            primiti proviziju za registracije putem naših linkova. 18+
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} najboljeigreuhrvatskoj.com. Sva prava pridržana.</p>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="hover:text-[#c9a961] transition-colors">
              Politika Privatnosti
            </Link>
            <Link href="/cookie-politika" className="hover:text-[#c9a961] transition-colors">
              Politika Kolačića
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
