import { Phone } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export default function Menu() {
  const burgers: MenuItem[] = [
    { name: 'Perseigne Burger', price: '6,00€', description: 'recette du Chef' },
    { name: 'Chicken Burger', price: '4,50€', description: 'salade, tomate, oignon, chicken, cheddar' },
    { name: 'Cheese Burger', price: '3,00€', description: 'salade, tomate, oignon, steak, cheddar' },
    { name: 'Double Cheese', price: '4,50€', description: 'salade, tomate, oignon, double steak, double cheddar' },
    { name: '180 Burger', price: '6,00€', description: 'salade, tomate, oignon, steak 180g, cheddar' }
  ];

  const tacos = [
    { size: 'S', price: '5,50€' },
    { size: 'D', price: '7,00€' },
    { size: 'T', price: '9,00€' }
  ];

  const bowls = [
    { name: '1 viande', price: '7,50€' },
    { name: '2 viandes', price: '9,00€' }
  ];

  const sandwiches: MenuItem[] = [
    { name: 'Américain', price: '6,00€' },
    { name: 'Radical', price: '7,00€' },
    { name: 'Paprika Curry', price: '4,50€' },
    { name: 'Kebab', price: '4,50€' },
    { name: 'Panini', price: '4,00€' }
  ];

  const fritures: MenuItem[] = [
    { name: 'Frites classiques', price: '3,00€' },
    { name: 'Frites cheddar', price: '4,00€' },
    { name: 'Nuggets (6 pcs)', price: '4,50€' },
    { name: 'Tenders (3 pcs)', price: '5,00€' },
    { name: 'Onion rings', price: '3,50€' }
  ];

  const supplements = [
    'Fromages (mozzarella, emmental, chèvre, raclette, camembert, cheddar, boursin, vache qui rit)',
    'Oignons frits, poivrons, olives, cornichons, œuf',
    'Jambon de dinde, bacon de dinde, lardons de bœuf',
    'Escalopes (classique/tandoori/curry/crème)',
    'Steak frais, cordon bleu, chicken, kebab, tenders, viande hachée'
  ];

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow animate-on-scroll">
          Nos menus
        </h2>

        <div className="max-w-6xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#A100FF]">Burgers</h3>
              <div className="space-y-4">
                {burgers.map((burger, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-4 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#A100FF]/20"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{burger.name}</h4>
                      <span className="text-[#A100FF] font-bold text-xl">{burger.price}</span>
                    </div>
                    {burger.description && (
                      <p className="text-white/70 text-sm">{burger.description}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-[#A100FF]/10 border border-[#A100FF]/30 rounded-lg">
                <p className="text-sm text-white/80">
                  <span className="font-bold text-[#A100FF]">Formules :</span> + frites (+1,50€) / + boisson (+1€)
                </p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://res.cloudinary.com/dkkw26g6x/image/upload/v1761510968/Burger_site_web_thr26a.jpg"
                alt="Délicieux burgers"
                className="w-full h-auto object-contain rounded-lg shadow-2xl border-2 border-[#A100FF]/30 hover:border-[#A100FF] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#A100FF]">Sandwichs</h3>
              <div className="space-y-4">
                {sandwiches.map((sandwich, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-4 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105 flex justify-between items-center"
                  >
                    <h4 className="text-lg font-bold text-white">{sandwich.name}</h4>
                    <span className="text-[#A100FF] font-bold text-xl">{sandwich.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[600px] md:h-[700px] group flex items-center justify-center bg-black">
              <img
                src="https://res.cloudinary.com/dkkw26g6x/image/upload/v1761513177/sndwich_web_fiiiinaaaaaaal_fchezw.jpg"
                alt="Délicieux sandwichs"
                className="w-full h-full object-contain rounded-lg shadow-2xl border-2 border-[#A100FF]/30 hover:border-[#A100FF] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#A100FF]">Tacos</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {tacos.map((taco, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 p-4 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105 text-center"
                    >
                      <div className="text-2xl font-bold text-[#A100FF] mb-2">{taco.size}</div>
                      <div className="text-lg font-bold text-white">{taco.price}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">Frites à l'extérieur +1,50€</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#A100FF]">Bowls</h3>
                <div className="space-y-3">
                  {bowls.map((bowl, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 p-4 rounded-lg border border-white/10 hover:border-[#A100FF] transition-all duration-300 hover:scale-105 flex justify-between items-center"
                    >
                      <span className="text-lg font-bold text-white">{bowl.name}</span>
                      <span className="text-[#A100FF] font-bold text-xl">{bowl.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-[#A100FF]">Suppléments</h3>
                <div className="bg-gray-900 p-6 rounded-lg border border-white/10">
                  <ul className="space-y-3">
                    {supplements.map((supplement, index) => (
                      <li key={index} className="text-white/80 text-sm flex items-start">
                        <span className="text-[#A100FF] mr-2">•</span>
                        <span>{supplement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-sm text-white/70">
                      <span className="text-[#A100FF] font-bold">Charcuterie :</span> +1,50€
                    </p>
                    <p className="text-sm text-white/70">
                      <span className="text-[#A100FF] font-bold">Viande :</span> +1,50€
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://res.cloudinary.com/dkkw26g6x/image/upload/v1761512870/Tacos_fiiiiinaaaaal_owish6.jpg"
                alt="Délicieux tacos"
                className="w-full h-auto object-contain rounded-lg shadow-2xl border-2 border-[#A100FF]/30 hover:border-[#A100FF] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="tel:+33987794206"
            className="inline-flex items-center gap-3 bg-[#A100FF] hover:bg-[#8800DD] text-white px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-110 neon-border"
          >
            <Phone className="w-6 h-6" />
            Je me régale
          </a>
        </div>
      </div>
    </section>
  );
}
