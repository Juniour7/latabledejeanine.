import React from 'react';
import { Utensils, Truck, Users, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Traiteur: React.FC = () => {
  const services = [
    'Livraison sur site',
    'Installation et service',
    'Vaisselle et couverts inclus',
    'Personnel de service',
    'Menu sur mesure',
    'Gestion complète de l\'événement',
    'Nettoyage après service',
    'Coordination avec autres prestataires'
  ];

  const eventTypes = [
    'Événements d\'entreprise',
    'Réceptions privées',
    'Inaugurations',
    'Conférences',
    'Formations',
    'Cocktails',
    'Buffets',
    'Repas assis'
  ];

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center">
          <Utensils className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Service Traiteur</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Un service traiteur complet pour tous vos événements professionnels et privés
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Nos Services Traiteur</h2>
            </div>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Types d'Événements</h2>
            </div>
            <div className="space-y-4">
              {eventTypes.map((eventType, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{eventType}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Zone de Livraison</h3>
              <p className="text-blue-700 text-sm">
                Abidjan et environs (jusqu'à 50km)<br/>
                Frais de déplacement selon la distance<br/>
                Devis gratuit sur demande
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Formules Traiteur</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Utensils className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basique</h3>
              <p className="text-gray-600 mb-4">20-50 personnes</p>
              <div className="text-2xl font-bold text-blue-500">10,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Livraison incluse</li>
                <li>• Vaisselle jetable</li>
                <li>• Menu standard</li>
              </ul>
            </div>
            <div className="text-center">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complet</h3>
              <p className="text-gray-600 mb-4">50-100 personnes</p>
              <div className="text-2xl font-bold text-blue-500">12,500F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Service inclus</li>
                <li>• Vraie vaisselle</li>
                <li>• Menu personnalisé</li>
              </ul>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">100+ personnes</p>
              <div className="text-2xl font-bold text-blue-500">15,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Service VIP</li>
                <li>• Décoration incluse</li>
                <li>• Coordination complète</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600">Prise de contact et brief</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Devis</h3>
              <p className="text-sm text-gray-600">Élaboration du devis personnalisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Validation</h3>
              <p className="text-sm text-gray-600">Confirmation et acompte</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Préparation</h3>
              <p className="text-sm text-gray-600">Préparation et logistique</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service</h3>
              <p className="text-sm text-gray-600">Livraison et service</p>
            </div>
          </div>
        </div>

        {/* Nos Réalisations */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Réalisations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src="/traiteur/img.jpeg" 
                alt="Service Traiteur 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold">Réception privée</h3>
                <p className="text-white/90 text-sm">120 invités</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-12 text-center text-white">
          <Utensils className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Organisez votre événement
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour un devis personnalisé et gratuit
          </p>
          <a
            href="https://wa.me/22507580273?text=Bonjour, je souhaiterais un devis pour un service traiteur."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
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

export default Traiteur;