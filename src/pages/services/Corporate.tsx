import React from 'react';
import { Building2, Users, Clock, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const Corporate: React.FC = () => {
  const services = [
    'Réunions d\'entreprise',
    'Séminaires',
    'Conférences',
    'Événements de team building',
    'Déjeuners d\'affaires',
    'Cocktails professionnels',
    'Formations',
    'Assemblées générales'
  ];

  const advantages = [
    'Service professionnel et discret',
    'Menu adapté aux contraintes professionnelles',
    'Livraison ponctuelle garantie',
    'Présentation soignée',
    'Devis personnalisé',
    'Service clé en main'
  ];

  // Array for "Nos Réalisations"
  const realisations = [
    {
      src: "/corporate/img (1).jpeg",
      alt: "Événement Corporate 1",
      title: "Séminaire d'entreprise",
      participants: "150 participants"
    },
    {
      src: "/corporate/img (2).jpeg",
      alt: "Événement Corporate 2",
      title: "Conférence annuelle",
      participants: "300 participants"
    },
    {
      src: "/corporate/img (3).jpeg",
      alt: "Événement Corporate 3",
      title: "Team Building",
      participants: "80 participants"
    }
  ];


  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Services Corporate</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des solutions de restauration professionnelles pour tous vos événements d'entreprise
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services List */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Nos Services Corporate</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Pourquoi nous choisir ?</h2>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Petit Groupe</h3>
              <p className="text-gray-600 mb-4">5-20 personnes</p>
              <div className="text-2xl font-bold text-orange-500">8,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
            </div>
            <div className="text-center">
              <Building2 className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Moyen Groupe</h3>
              <p className="text-gray-600 mb-4">21-50 personnes</p>
              <div className="text-2xl font-bold text-orange-500">7,200F</div>
              <p className="text-sm text-gray-500">par personne (-10%)</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grand Groupe</h3>
              <p className="text-gray-600 mb-4">50+ personnes</p>
              <div className="text-2xl font-bold text-orange-500">6,800F</div>
              <p className="text-sm text-gray-500">par personne (-15%)</p>
            </div>
          </div>
        </div>

        {/* Nos Réalisations */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Réalisations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {realisations.map((item, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.participants}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Planifiez votre événement corporate
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour un devis personnalisé et gratuit
          </p>
          <a
            href="https://wa.me/22507580273?text=Bonjour, je souhaiterais obtenir un devis pour un événement corporate."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
          >
            Demander un devis
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="w-16 h-16 mr-4">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="La Table de Jeanine" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">La Table de Jeanine</h3>
                <p className="text-gray-300 text-sm">
                  Le Goût de La Table de Jeanine est plus qu'une simple nourriture, c'est une célébration de la culture, de la tradition et de la communauté.
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="space-y-2 text-sm">
                <a href="https://instagram.com/latabledejeanine" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-500 transition-colors">
                  📷 Instagram
                </a>
                <a href="https://facebook.com/latabledejeanine" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-500 transition-colors">
                  📘 Facebook
                </a>
                <a href="https://tiktok.com/@latabledejeanine" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-500 transition-colors">
                  🎵 TikTok
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Nous Contacter</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  C249+Q28, Abidjan
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +225 07 58 02 0273
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@latabledejeanine.com
                </p>
                <p className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Mardi & Mercredi: 11h – 15h | Jeudi – Samedi: 11h – 22h | Dimanche & Lundi: Fermé
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-orange-500 text-white py-3 text-center text-sm font-medium">
        Conçu et Développé par YellowGroup
      </div>
    </div>
  );
};

export default Corporate;