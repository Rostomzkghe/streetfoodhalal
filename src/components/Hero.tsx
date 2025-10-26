import { Phone, Clock, Truck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dkkw26g6x/image/upload/v1761506667/Street_kzvmxl.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow animate-on-scroll">
            STREET FOOD
          </h1>

          <p className="text-2xl md:text-4xl mb-8 text-white font-bold animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Street food, rapide et quali.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 bg-[#A100FF] px-6 py-3 rounded-full pulse-soft">
              <Award className="w-5 h-5" />
              <span className="font-bold">100% Halal</span>
            </div>
            <div className="flex items-center gap-2 bg-[#A100FF] px-6 py-3 rounded-full pulse-soft" style={{ animationDelay: '0.5s' }}>
              <Clock className="w-5 h-5" />
              <span className="font-bold">Ouvert tard</span>
            </div>
            <div className="flex items-center gap-2 bg-[#A100FF] px-6 py-3 rounded-full pulse-soft" style={{ animationDelay: '1s' }}>
              <Truck className="w-5 h-5" />
              <span className="font-bold">Livraison dès 10€</span>
            </div>
          </div>

          <a
            href="tel:+33987794206"
            className="inline-flex items-center gap-3 bg-[#A100FF] hover:bg-[#8800DD] text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl neon-border animate-on-scroll"
            style={{ animationDelay: '0.4s' }}
          >
            <Phone className="w-6 h-6" />
            Commander maintenant
          </a>

          <p className="mt-6 text-lg text-white/80 animate-on-scroll" style={{ animationDelay: '0.5s' }}>
            09 87 79 42 06
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
