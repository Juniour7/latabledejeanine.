import React from 'react';
import { ChefHat, Home, Star, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ChefDomicile: React.FC = () => {
  const services = [
    'Chef professionnel à domicile',
    'Menu personnalisé selon vos goûts',
    'Courses et préparation incluses',
    'Service et présentation soignés',
    'Nettoyage de la cuisine',
    'Conseils culinaires',
    'Adaptation aux régimes spéciaux',
    'Service jusqu\'à 4 heures'
  ];

  const occasions = [
    'Dîners romantiques',
    'Anniversaires intimes',
    'Réceptions familiales',
    'Soirées entre amis',
    'Événements spéciaux',
    'Cours de cuisine privés'
  ];

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-fixed opacity-30"
          style={{ 
            backgroundImage: 'url(/profile.jpg)'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center">
          <ChefHat className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Chef à Domicile</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Profitez d'une expérience culinaire exceptionnelle dans le confort de votre foyer
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Home className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Nos Services</h2>
            </div>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Occasions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Occasions Spéciales</h2>
            </div>
            <div className="space-y-4">
              {occasions.map((occasion, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{occasion}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-bold text-purple-800 mb-2">Comment ça marche ?</h3>
              <ol className="text-purple-700 text-sm space-y-1">
                <li>1. Consultation pour définir vos goûts</li>
                <li>2. Élaboration du menu personnalisé</li>
                <li>3. Courses et préparation</li>
                <li>4. Service à domicile</li>
                <li>5. Nettoyage inclus</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Formules Chef à Domicile</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Home className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Essentiel</h3>
              <p className="text-gray-600 mb-4">2-4 personnes</p>
              <div className="text-2xl font-bold text-purple-500">15,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Menu 3 services</li>
                <li>• 3 heures de service</li>
                <li>• Nettoyage inclus</li>
              </ul>
            </div>
            <div className="text-center">
              <ChefHat className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">4-8 personnes</p>
              <div className="text-2xl font-bold text-purple-500">18,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Menu 4 services</li>
                <li>• 4 heures de service</li>
                <li>• Conseils inclus</li>
              </ul>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">VIP</h3>
              <p className="text-gray-600 mb-4">8+ personnes</p>
              <div className="text-2xl font-bold text-purple-500">22,000F</div>
              <p className="text-sm text-gray-500">par personne</p>
              <ul className="mt-4 text-sm text-gray-600 space-y-1">
                <li>• Menu gastronomique</li>
                <li>• Service complet</li>
                <li>• Cours de cuisine</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Notre Processus</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Discussion de vos préférences et besoins</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Menu</h3>
              <p className="text-sm text-gray-600">Création d'un menu personnalisé</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Préparation</h3>
              <p className="text-sm text-gray-600">Courses et préparation chez vous</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service</h3>
              <p className="text-sm text-gray-600">Service et nettoyage inclus</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-12 text-center text-white">
          <ChefHat className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Réservez votre chef à domicile
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour une expérience culinaire unique chez vous
          </p>
          <a
            href="https://wa.me/2250758020273?text=Bonjour, je souhaiterais réserver un chef à domicile."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
          >
            Réserver maintenant
          </a>
        </div>
      </div>

       
    </div>
  );
};

export default ChefDomicile;