import React, { useState } from 'react';
import { Calculator, Users, Calendar } from 'lucide-react';

const Tarifs: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [guests, setGuests] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const eventTypes = [
    { value: 'corporate', label: 'Corporate', basePrice: 8000 },
    { value: 'mariage', label: 'Mariage', basePrice: 15000 },
    { value: 'brunch', label: 'Brunch', basePrice: 8500 },
    { value: 'chef-domicile', label: 'Chef à domicile', basePrice: 18000 },
    { value: 'traiteur', label: 'Service traiteur', basePrice: 12500 }
  ];

  const calculateCost = () => {
    if (!eventType || !guests) return;

    const selectedEvent = eventTypes.find(event => event.value === eventType);
    if (!selectedEvent) return;

    const guestCount = parseInt(guests);
    let baseTotal = selectedEvent.basePrice * guestCount;

    // Apply discounts
    let discount = 0;
    if (guestCount >= 100) {
      discount = 0.15; // 15% discount for 100+ guests
    } else if (guestCount >= 50) {
      discount = 0.10; // 10% discount for 50+ guests
    }

    const finalCost = baseTotal * (1 - discount);
    setEstimatedCost(finalCost);
  };

  React.useEffect(() => {
    calculateCost();
  }, [eventType, guests]);

  const handleWhatsAppContact = () => {
    const message = `🍽️ *Demande de Devis - La Table de Jeanine*\n\n` +
      `🎉 Type d'événement: ${eventTypes.find(e => e.value === eventType)?.label || 'Non spécifié'}\n` +
      `👥 Nombre d'invités: ${guests}\n` +
      `💰 Estimation: ${estimatedCost.toLocaleString('fr-FR')} FCFA\n\n` +
      `Je souhaiterais obtenir un devis personnalisé pour mon événement.`;

    const whatsappUrl = `https://wa.me/22507580273?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <div className="text-center py-16 bg-gradient-to-r from-[#DD9700] to-[#F39800]">
        <h1 className="text-5xl font-bold text-white mb-4">Tarifs & Devis</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto px-4">
          Découvrez nos tarifs et obtenez une estimation personnalisée pour votre événement
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Pricing Calculator */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-[#1A171B] text-white p-8 text-center">
              <Calculator className="w-16 h-16 mx-auto mb-4 text-[#DD9700]" />
              <h2 className="text-3xl font-bold mb-2">Simulateur de Prix</h2>
              <p className="text-gray-300">Estimez le coût de votre événement en quelques clics</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-[#1A171B] mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Type d'événement
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD9700] focus:border-[#DD9700]"
                  >
                    <option value="">Sélectionnez un type d'événement</option>
                    {eventTypes.map((event) => (
                      <option key={event.value} value={event.value}>
                        {event.label} - {event.basePrice.toLocaleString('fr-FR')} FCFA/personne
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A171B] mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Nombre d'invités
                  </label>
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="Ex: 50"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DD9700] focus:border-[#DD9700]"
                  />
                </div>
              </div>

              {estimatedCost > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#DD9700] to-[#F39800] rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Estimation du coût</h3>
                      <p className="text-white/90">
                        {guests && parseInt(guests) >= 50 && (
                          <span className="text-sm">
                            {parseInt(guests) >= 100 ? 'Remise de 15% appliquée' : 'Remise de 10% appliquée'}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold">
                        {estimatedCost.toLocaleString('fr-FR')} FCFA
                      </div>
                      <p className="text-white/90 text-sm">Prix estimatif</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full mt-4 bg-white text-[#DD9700] py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200"
                  >
                    Demander un devis personnalisé
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#DD9700]">
              <h3 className="text-xl font-bold text-[#1A171B] mb-4">Tarifs de Base</h3>
              <ul className="space-y-2 text-[#373739]">
                <li>• Corporate: 8,000 FCFA/pers</li>
                <li>• Mariage: 15,000 FCFA/pers</li>
                <li>• Brunch: 8,500 FCFA/pers</li>
                <li>• Chef à domicile: 18,000 FCFA/pers</li>
                <li>• Service traiteur: 12,500 FCFA/pers</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#F39800]">
              <h3 className="text-xl font-bold text-[#1A171B] mb-4">Remises Groupes</h3>
              <ul className="space-y-2 text-[#373739]">
                <li>• 50+ invités: -10%</li>
                <li>• 100+ invités: -15%</li>
                <li>• Devis personnalisé pour événements exceptionnels</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#9C9D9F]">
              <h3 className="text-xl font-bold text-[#1A171B] mb-4">Services Inclus</h3>
              <ul className="space-y-2 text-[#373739]">
                <li>• Préparation sur site</li>
                <li>• Service professionnel</li>
                <li>• Vaisselle et couverts</li>
                <li>• Nettoyage inclus</li>
              </ul>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#1A171B] to-[#373739] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un devis personnalisé ?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Chaque événement est unique. Contactez-nous pour obtenir un devis sur mesure 
              adapté à vos besoins spécifiques et votre budget.
            </p>
            <button
              onClick={handleWhatsAppContact}
              className="bg-[#DD9700] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#F39800] transition-colors duration-200 text-lg"
            >
              Obtenir un devis gratuit
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Tarifs;