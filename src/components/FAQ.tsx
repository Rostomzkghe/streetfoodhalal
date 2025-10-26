import { useState } from 'react';
import { ChevronDown, Award, Truck, Phone, AlertCircle, Clock, CreditCard } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Tous vos produits sont-ils halal ?',
      answer: 'Oui, absolument ! Tous nos produits sont 100% halal certifiés. Nous travaillons exclusivement avec des fournisseurs certifiés pour garantir la qualité et le respect de vos convictions.',
      icon: <Award className="w-6 h-6" />
    },
    {
      question: 'Comment fonctionne la livraison ?',
      answer: 'Nous livrons sur tout Alençon, notamment près du lycée. Livraison gratuite à partir de 10€ de commande. Temps estimé : environ 20 minutes. Appelez-nous au 09 87 79 42 06 pour passer commande.',
      icon: <Truck className="w-6 h-6" />
    },
    {
      question: 'Proposez-vous le click & collect ?',
      answer: 'Oui ! Appelez-nous pour passer commande et récupérez votre repas directement au comptoir. Pratique et rapide pour les étudiants et actifs pressés.',
      icon: <Phone className="w-6 h-6" />
    },
    {
      question: 'Informations sur les allergènes ?',
      answer: 'Nous tenons à votre disposition la liste complète des allergènes présents dans nos plats. N\'hésitez pas à nous demander en magasin ou par téléphone avant de commander.',
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      question: 'Quels sont vos horaires d\'ouverture ?',
      answer: 'Nous sommes ouverts tous les jours : du dimanche au jeudi de 11h à 22h30, et les vendredis et samedis de 11h à 23h. Parfait pour les petites faims tardives !',
      icon: <Clock className="w-6 h-6" />
    },
    {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer: 'Nous acceptons les cartes bancaires, espèces et titres restaurant (Pluxee, Ticket Restaurant, Chèque Déjeuner). Pratique pour les étudiants et salariés !',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-glow animate-on-scroll">
          Questions fréquentes
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg border border-white/10 overflow-hidden animate-on-scroll hover:border-[#A100FF] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-[#A100FF] flex-shrink-0">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#A100FF] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-white/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
