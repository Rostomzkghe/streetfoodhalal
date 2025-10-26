import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow animate-on-scroll">
          Nous trouver
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-gray-900 p-6 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#A100FF] p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-white/80">
                    Street Food<br />
                    12 rue Paul Verlaine<br />
                    61000 Alençon
                  </p>
                  <p className="text-sm text-[#A100FF] mt-2">
                    À deux pas du lycée
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#A100FF] p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <a
                    href="tel:+33987794206"
                    className="text-white/80 hover:text-[#A100FF] transition-colors text-lg"
                  >
                    09 87 79 42 06
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="bg-[#A100FF] p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a
                    href="mailto:streetfoodsalencon@gmail.com"
                    className="text-white/80 hover:text-[#A100FF] transition-colors break-all"
                  >
                    streetfoodsalencon@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#A100FF]/10 border border-[#A100FF] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/80">Dimanche - Jeudi</span>
                  <span className="font-bold">11:00 - 22:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Vendredi - Samedi</span>
                  <span className="font-bold">11:00 - 23:00</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.google.com/maps/dir//12+rue+Paul+Verlaine,+61000+Alençon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-[#A100FF] px-6 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 border border-white/10"
              >
                <Navigation className="w-5 h-5" />
                Itinéraire
              </a>
              <a
                href="tel:+33987794206"
                className="flex items-center justify-center gap-2 bg-[#A100FF] hover:bg-[#8800DD] px-6 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 neon-border"
              >
                <Phone className="w-5 h-5" />
                Appeler
              </a>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-white/10 h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5!2d0.089!3d48.432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDI1JzU1LjIiTiAwwrAwNScyMC40IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Street Food Alençon"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
