import React from 'react';
import { Heart, Users, Sparkles, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Mariage: React.FC = () => {
  const services = [
    'Menu personnalisé selon vos goûts',
    'Service complet avec personnel',
    'Décoration de table',
    'Cocktail de bienvenue',
    'Buffet ou service à table',
    'Gâteau de mariage sur demande',
    'Animation culinaire',
    'Service jusqu\'à minuit'
  ];

  const packages = [
    {
      name: 'Essentiel',
      guests: '50-80 invités',
      price: '12,000F',
      features: ['Menu 3 services', 'Service de base', 'Cocktail simple']
    },
    {
      name: 'Premium',
      guests: '80-150 invités',
      price: '15,000F',
      features: ['Menu 4 services', 'Service complet', 'Cocktail premium', 'Décoration']
    },
    {
      name: 'Luxe',
      guests: '150+ invités',
      price: '18,000F',
      features: ['Menu gastronomique', 'Service VIP', 'Cocktail signature', 'Décoration premium', 'Animation']
    }
  ];

  const gallery = [
    "/wedding/img (1).jpeg",
    "/wedding/img (2).jpeg",
    "/wedding/img (3).jpeg",
    "/wedding/img (4).jpeg",
    "/wedding/img (5).jpeg",
    "/wedding/img (6).jpeg",
    "/wedding/img (7).jpeg",
    "/wedding/img (8).jpeg",
    "/wedding/img (9).jpeg",
    "/wedding/img (10).jpeg",
    "/wedding/img (11).jpeg",
    "/wedding/img (12).jpeg",
    "/wedding/img (13).jpeg",
    "/wedding/img (14).jpeg",
    "/wedding/img (15).jpeg",
    "/wedding/img (16).jpeg",
    "/wedding/img (17).jpeg",
    "/wedding/img (18).jpeg",
    "/wedding/img (19).jpeg"
  ]

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Mariages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Célébrez le plus beau jour de votre vie avec nos services de restauration exceptionnels
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Nos Services Mariage</h2>
            <p className="text-gray-600 mt-2">Un service complet pour votre jour J</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-pink-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Formules Mariage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center relative overflow-hidden">
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-pink-600 text-white px-3 py-1 text-sm font-bold">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.guests}</p>
                <div className="text-3xl font-bold text-pink-600 mb-6">{pkg.price}</div>
                <p className="text-sm text-gray-500 mb-6">par personne</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/22507580273?text=Bonjour, je suis intéressé(e) par la formule ${pkg.name} pour mon mariage.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors duration-200 font-medium"
                >
                  Choisir cette formule
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Nos Réalisations</h2>
          <div className="grid md:grid-cols-3 gap-6">
  {gallery.map((pic, index) => (
    <div key={index} className="relative h-64 rounded-lg overflow-hidden">
      <img 
        src={pic}
        alt={`Mariage ${index + 1}`}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl p-12 text-center text-white">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Planifions votre mariage de rêve
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour une consultation gratuite et personnalisée
          </p>
          <a
            href="https://wa.me/22507580273?text=Bonjour, je souhaiterais organiser mon mariage avec La Table de Jeanine."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
          >
            Planifier mon mariage
          </a>
        </div>
      </div>

       
    </div>
  );
};

export default Mariage;