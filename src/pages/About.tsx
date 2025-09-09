import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">À propos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez l'histoire et la passion derrière La Table de Jeanine
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La Table de Jeanine est une entreprise de restauration et événementiel dont les activités clés sont entre autres : restaurant en ligne, service traiteur, chef à domicile, brunchs privés, logistiques et décorations événementielles.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-orange-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Notre mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Mettre à profit notre savoir-faire pour vous offrir des expériences culinaires uniques et des plats sains, goûteux et équilibrés qui raviront le palais de vos convives.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre fondatrice</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/profile.jpg" 
                    alt="Fabiola Tokore"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">Fabiola Tokore</h3>
                  <p className="text-orange-600 font-medium">Chef / Propriétaire</p>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Bio</h4>
                <p className="text-gray-700 leading-relaxed">
                  Fabiola est le cœur et l'âme de la Table de Jeanine. Profondément ancrée dans la tradition culinaire camerounaise, elle met toute sa passion et son expérience au service de chaque plat. Inspirée par la cuisine de sa mère, elle a passé des années à perfectionner l'art de la cuisine africaine authentique. Sa mission est simple : partager avec le monde entier les saveurs audacieuses et vibrantes de son pays natal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Découvrez nos saveurs authentiques
          </h2>
          <p className="text-lg mb-6">
            Contactez-nous pour une expérience culinaire inoubliable
          </p>
          <a
            href="https://wa.me/22507580273?text=Bonjour, je souhaiterais en savoir plus sur vos services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-bold"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;