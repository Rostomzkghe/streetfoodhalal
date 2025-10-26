import { X } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-white/10 shadow-lg animate-on-scroll">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-white/80">
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site.
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onDecline}
              className="px-4 py-2 text-white/60 hover:text-white transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={onAccept}
              className="px-6 py-2 bg-[#A100FF] hover:bg-[#8800DD] text-white font-bold rounded-full transition-all duration-300"
            >
              Accepter
            </button>
            <button
              onClick={onDecline}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
