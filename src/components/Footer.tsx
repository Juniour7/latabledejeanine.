import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <>
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col  items-start">
              <div className="w-16 h-16 mr-4">
                <img 
                  src="/logo.jpg" 
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
          Conçu et Développé par Yelegroup
        </div>
    </>
  )
}

export default Footer
