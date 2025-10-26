import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-white/60">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-[#A100FF] fill-current" />
            <span>à Alençon</span>
          </div>

          <div className="text-white/60 text-sm">
            <p>Street Food - 12 rue Paul Verlaine, 61000 Alençon</p>
            <p className="mt-2">
              <a href="mailto:streetfoodsalencon@gmail.com" className="hover:text-[#A100FF] transition-colors">
                streetfoodsalencon@gmail.com
              </a>
              {' | '}
              <a href="tel:+33987794206" className="hover:text-[#A100FF] transition-colors">
                09 87 79 42 06
              </a>
            </p>
          </div>

          <div className="text-white/40 text-xs pt-4 border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Street Food Alençon. Tous droits réservés.</p>
            <p className="mt-2">
              Les informations relatives aux allergènes sont disponibles sur demande.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
