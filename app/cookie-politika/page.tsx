import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolitikPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-3">Politika Kolačića</h1>
            <p className="text-gray-300 text-center text-lg">Kako koristimo kolačiće na našoj web stranici</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Što su kolačići?</h2>
              <p className="text-gray-700 leading-relaxed">
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem računalu ili mobilnom uređaju kada
                posjetite našu web stranicu. Oni nam pomažu poboljšati vaše iskustvo pamćenjem vaših preferencija i
                poboljšanjem funkcionalnosti stranice.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Koje kolačiće koristimo?</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nužni kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići su neophodni za pravilno funkcioniranje web stranice. Ne mogu se deaktivirati u našim
                    sustavima. Spremaju vašu preferenciju kolačića i osnovne funkcije stranice.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analitički kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Koristimo Vercel Analytics kako bismo razumjeli kako posjetitelji koriste našu web stranicu. Ovo nam
                    pomaže poboljšati sadržaj i korisničko iskustvo. Svi podaci su anonimizirani.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing kolačići</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ovi kolačići se koriste za prikazivanje relevantnih preporuka kazina na temelju vaših interesa i
                    prethodnih posjeta našoj web stranici.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Upravljanje kolačićima</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                U bilo kojem trenutku možete promijeniti postavke kolačića u svom pregledniku. Imajte na umu da
                deaktiviranje kolačića može utjecati na funkcionalnost naše web stranice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Također možete ponovno otvoriti banner kolačića brisanjem kolačića za našu web stranicu u svom
                pregledniku.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontaktirajte nas</h2>
              <p className="text-gray-700 leading-relaxed">
                Ako imate pitanja o našoj politici kolačića, možete nas kontaktirati na:{" "}
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
