import React from 'react';
import { Coffee, Sun, Clock, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const Brunchs: React.FC = () => {
  const menuItems = [
    'Œufs Benedict africains',
    'Pancakes à la banane plantain',
    'Avocado toast aux épices',
    'Smoothie bowls tropicaux',
    'Café et thés premium',
    'Jus de fruits frais',
    'Pâtisseries maison',
    'Fruits de saison'
  ];

  const occasions = [
    'Brunchs familiaux',
    'Réunions d\'amis',
    'Célébrations matinales',
    'Événements d\'entreprise',
    'Anniversaires',
    'Fêtes de fin d\'année'
  ];

  const brunchGallery = [
    "/brunch/img (1).jpeg",
    "/brunch/img (2).jpeg",
    "/brunch/img (3).jpeg",
    "/brunch/img (4).jpeg",
    "/brunch/img (5).jpeg"
  ]

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center">
          <Sun className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Brunchs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Commencez votre journée avec style grâce à nos brunchs savoureux et raffinés
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Coffee className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Notre Menu Brunch</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {menuItems.map((item, index) => (
                <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Occasions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Occasions Parfaites</h2>
            </div>
            <div className="space-y-4">
              {occasions.map((occasion, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{occasion}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">Horaires Brunch</h3>
              <p className="text-yellow-700 text-sm">
                Disponible de 9h à 15h<br/>
                Réservation recommandée 24h à l'avance
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Tarifs Brunch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brunch Simple</h3>
              <p className="text-gray-600 mb-4">Menu de base</p>
              <div className="text-2xl font-bold text-orange-500">6,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
            </div>
            <div className="text-center">
              <Sun className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brunch Premium</h3>
              <p className="text-gray-600 mb-4">Menu complet</p>
              <div className="text-2xl font-bold text-orange-500">8,500F</div>
              <p className="text-sm text-gray-500">par personne</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brunch VIP</h3>
              <p className="text-gray-600 mb-4">Menu gastronomique</p>
              <div className="text-2xl font-bold text-orange-500">12,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Brunchs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {brunchGallery.map((pic,index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src={pic}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-12 text-center">
          <Sun className="w-16 h-16 mx-auto mb-4 text-white" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Réservez votre brunch
          </h2>
          <p className="text-lg text-white mb-6">
            Contactez-nous pour réserver votre table ou organiser un brunch privé
          </p>
          <a
            href="https://wa.me/2250758020273?text=Bonjour, je souhaiterais réserver un brunch."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
          >
            Réserver maintenant
          </a>
        </div>
      </div>

       
    </div>
  );
};

export default Brunchs;