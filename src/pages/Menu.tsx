import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Star, Clock, Users } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
  serves: number;
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart, setIsCartOpen } = useCart();

  const menuItems: MenuItem[] = [
    // Entrées
    {
      id: 1,
      name: "Brochettes de bœuf",
      description: "Délicieuses brochettes de bœuf grillées",
      price: 5000,
      category: "entrees",
      image: "/menu/img (1).jpeg",
      rating: 4.8,
      prepTime: "25 min",
      serves: 1
    },
    {
      id: 2,
      name: "Pastels au poulet fumé",
      description: "Pastels croustillants au poulet fumé",
      price: 2000,
      category: "entrees",
      image: "/menu/img (2).jpeg",
      rating: 4.7,
      prepTime: "20 min",
      serves: 1
    },
    {
      id: 3,
      name: "Beignets de manioc",
      description: "Beignets moelleux de manioc",
      price: 2000,
      category: "entrees",
      image: "/menu/img (3).jpeg",
      rating: 4.6,
      prepTime: "15 min",
      serves: 1
    },
    {
      id: 4,
      name: "BHB",
      description: "Spécialité de la maison",
      price: 2500,
      category: "entrees",
      image: "/menu/img (4).jpeg",
      rating: 4.7,
      prepTime: "20 min",
      serves: 1
    },
    {
      id: 5,
      name: "Plateau mixte",
      description: "Pastels, Beignets de manioc, BH, Brochettes de bœuf",
      price: 10000,
      category: "entrees",
      image: "/menu/img (5).jpeg",
      rating: 4.9,
      prepTime: "30 min",
      serves: 2
    },
    // Plats
    {
      id: 6,
      name: "Ndolè (viande ou poisson)",
      description: "Plat traditionnel camerounais aux arachides",
      price: 7000,
      category: "plats",
      image: "/menu/img (6).jpeg",
      rating: 4.8,
      prepTime: "45 min",
      serves: 1
    },
    {
      id: 7,
      name: "Ndolè royal",
      description: "Viande, poisson fumé, crevettes",
      price: 10000,
      category: "plats",
      image: "/menu/img (7).jpeg",
      rating: 4.9,
      prepTime: "50 min",
      serves: 1
    },
    {
      id: 8,
      name: "Eru & Gari Fufu",
      description: "Plat traditionnel avec légumes verts",
      price: 7000,
      category: "plats",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      prepTime: "40 min",
      serves: 1
    },
    {
      id: 9,
      name: "Poulet ou Porc DG",
      description: "Poulet ou porc sauté aux légumes et plantains",
      price: 7000,
      category: "plats",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      prepTime: "35 min",
      serves: 1
    },
    {
      id: 10,
      name: "Mbongo O (porc ou poisson)",
      description: "Plat épicé au porc ou poisson",
      price: 7000,
      category: "plats",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      prepTime: "40 min",
      serves: 1
    },
    {
      id: 11,
      name: "Okok sucré",
      description: "Légumes verts sucrés traditionnels",
      price: 5000,
      category: "plats",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.5,
      prepTime: "35 min",
      serves: 1
    },
    {
      id: 12,
      name: "Pepper soup",
      description: "Queue de bœuf ou poisson épicé",
      price: 7000,
      category: "plats",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      prepTime: "60 min",
      serves: 1
    },
    // Grillades
    {
      id: 13,
      name: "Poulet braisé ou fumé (entier)",
      description: "Poulet entier grillé à la perfection",
      price: 8000,
      category: "grillades",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      prepTime: "45 min",
      serves: 2
    },
    {
      id: 14,
      name: "Poisson braisé",
      description: "Poisson frais grillé aux épices",
      price: 8000,
      category: "grillades",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      prepTime: "30 min",
      serves: 1
    },
    {
      id: 15,
      name: "Porc braisé",
      description: "Porc grillé aux herbes",
      price: 5000,
      category: "grillades",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      prepTime: "40 min",
      serves: 1
    },
    {
      id: 16,
      name: "Queue de bœuf braisée",
      description: "Queue de bœuf tendre et savoureuse",
      price: 8000,
      category: "grillades",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      prepTime: "90 min",
      serves: 1
    },
    {
      id: 17,
      name: "Choukouya de poulet fumé (1/2)",
      description: "Demi-poulet fumé épicé",
      price: 5000,
      category: "grillades",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      prepTime: "35 min",
      serves: 1
    },
    // Plats spéciaux
    {
      id: 18,
      name: "Tchep (Poulet ou Poisson)",
      description: "Riz au poulet ou poisson - Vendredi uniquement",
      price: 5000,
      category: "speciaux",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      prepTime: "40 min",
      serves: 1
    },
    {
      id: 19,
      name: "Placali sauce graine/gombo",
      description: "Placali avec sauce traditionnelle - Samedi uniquement",
      price: 5000,
      category: "speciaux",
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      prepTime: "45 min",
      serves: 1
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les plats' },
    { id: 'entrees', name: 'Entrées' },
    { id: 'plats', name: 'Plats principaux' },
    { id: 'grillades', name: 'Grillades' },
    { id: 'speciaux', name: 'Plats spéciaux' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id.toString(),
      name: item.name,
      price: item.price,
      category: item.category
    });
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <div className="text-center py-16 bg-gradient-to-r from-[#1A171B] to-[#373739]">
        <h1 className="text-5xl font-bold text-white mb-4">Notre Menu</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Découvrez nos spécialités africaines authentiques préparées avec passion
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-[#DD9700] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1A171B] hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A171B] mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.prepTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.serves} pers.
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#DD9700]">
                    {item.price.toLocaleString()} F
                  </span>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-8 h-8 rounded-full bg-[#DD9700] text-white flex items-center justify-center hover:bg-[#F39800] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-[#1A171B] text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A171B] text-white py-12">
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
                <p>C249+Q28, Abidjan</p>
                <p>+225 07 58 02 0273</p>
                <p>info@latabledejeanine.com</p>
                <p>Mardi & Mercredi: 11h – 15h | Jeudi – Samedi: 11h – 22h | Dimanche & Lundi: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#DD9700] text-white py-3 text-center text-sm font-medium">
        Conçu et Développé par YellowGroup
      </div>
    </div>
  );
};

export default Menu;