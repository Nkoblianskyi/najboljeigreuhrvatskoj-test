import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src="/casino-background-pattern.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">Politika Privatnosti</h1>
            <p className="text-gray-300 text-center text-lg">Kako štitimo i koristimo vaše osobne podatke</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prikupljanje osobnih podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Poštujemo vašu privatnost i obvezujemo se zaštititi vaše osobne podatke. Ova politika objašnjava kako
                prikupljamo, koristimo i štitimo vaše podatke u skladu s GDPR-om i hrvatskim zakonodavstvom.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Koje podatke prikupljamo?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>IP adresa i informacije o pregledniku (anonimizirane)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Statistike posjeta i ponašanje korisnika na web stranici</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Kolačići i slične tehnologije</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Informacije koje dobrovoljno dijelite s nama putem kontakt obrazaca</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kako koristimo vaše podatke?</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Za poboljšanje naše web stranice i usluga</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Za analizu ponašanja i preferencija korisnika radi boljih preporuka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Za prikazivanje relevantnih preporuka kazina i ponuda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>Za ispunjavanje pravnih obveza i borbu protiv prijevare</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dijeljenje podataka</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nikada ne prodajemo, trgujemo niti iznajmljujemo vaše osobne podatke trećim stranama.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Možemo dijeliti anonimizirane, agregirane podatke s našim partnerima kazina kako bismo poboljšali naše
                preporuke i usluge. Nikakve osobno identificirajuće informacije se ne dijele.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vaša prava (GDPR)</h2>
              <p className="text-gray-700 mb-4">U skladu s GDPR-om, imate sljedeća prava:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold">Pravo na pristup:</strong> Možete zatražiti kopiju vaših osobnih
                    podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold">Pravo na ispravak:</strong> Možete ispraviti netočne podatke
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold">Pravo na brisanje:</strong> Možete zatražiti brisanje vaših podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold">Pravo na ograničenje:</strong> Možete ograničiti obradu vaših podataka
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold mt-1">•</span>
                  <span>
                    <strong className="font-bold">Pravo na prenosivost:</strong> Možete dobiti svoje podatke u
                    strukturiranom formatu
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sigurnost podataka</h2>
              <p className="text-gray-700 leading-relaxed">
                Provodimo odgovarajuće tehničke i organizacijske sigurnosne mjere kako bismo zaštitili vaše osobne
                podatke od neovlaštenog pristupa, gubitka ili uništenja. Naša web stranica koristi SSL enkripciju, a svi
                podaci se sigurno pohranjuju.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-yellow-400">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontaktirajte nas</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Ako imate pitanja o našoj politici privatnosti ili želite ostvariti svoja prava, možete nas kontaktirati
                na:
              </p>
              <p className="text-gray-700 mb-2">
                <strong className="font-bold">Email za privatnost:</strong>{" "}
                <p
                  className="text-yellow-600 hover:text-yellow-700 font-semibold underline"
                >
                  privacy@najboljeigreuhrvatskoj.com
                </p>
              </p>
              <p className="text-gray-700">
                <strong className="font-bold">Opći kontakt:</strong>{" "}
                <p
                  className="text-yellow-600 hover:text-yellow-700 font-semibold underline"
                >
                  info@najboljeigreuhrvatskoj.com
                </p>
              </p>
            </div>

            <div className="text-center pt-6">
              <p className="text-sm text-gray-300">Posljednje ažurirano: Siječanj 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
