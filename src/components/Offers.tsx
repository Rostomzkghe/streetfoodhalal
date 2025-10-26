import { Clock, Sparkles, Phone } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow animate-on-scroll">
          Offres spéciales
        </h2>

        <div className="flex justify-center max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#A100FF] to-[#6600AA] p-8 neon-border animate-on-scroll transform hover:scale-105 transition-all duration-300 w-full md:w-1/2" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 float"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20 float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8" />
                <h3 className="text-3xl font-bold">Offre du moment</h3>
              </div>
              <p className="text-lg mb-6 text-white/90">
                Découvrez nos offres exclusives et nos nouveautés de saison. Suivez-nous ou appelez-nous
                pour connaître la promotion en cours. Ça change régulièrement !
              </p>
              <a
                href="tel:+33987794206"
                className="inline-flex items-center gap-2 bg-white text-[#A100FF] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Découvrir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
