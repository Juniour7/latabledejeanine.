import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Phone, Mail, Building2, Heart, Coffee, ChefHat, Utensils } from 'lucide-react';

const Home: React.FC = () => {
  const [orderForm, setOrderForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    eventLocation: '',
    selectedItems: [] as Array<{id: string, name: string, price: number, quantity: number}>,
    additionalInfo: ''
  });

  const menuItems = [
    // Entrées
    { id: '1', name: 'Brochettes de boeuf', price: 5000, category: 'entrees' },
    { id: '2', name: 'Pastels au poulet fumé', price: 2000, category: 'entrees' },
    { id: '3', name: 'Beignets de manioc', price: 2000, category: 'entrees' },
    { id: '4', name: 'BHB', price: 2500, category: 'entrees' },
    { id: '5', name: 'Plateau mixte', price: 10000, category: 'entrees' },
    // Plats
    { id: '6', name: 'Ndolè (viande ou Poisson)', price: 7000, category: 'plats' },
    { id: '7', name: 'Ndolè royal', price: 10000, category: 'plats' },
    { id: '8', name: 'Eru & Gari Fufu', price: 7000, category: 'plats' },
    { id: '9', name: 'Poulet ou Porc DG', price: 7000, category: 'plats' },
    { id: '10', name: 'Mbongo\'o (Porc ou Poisson)', price: 7000, category: 'plats' },
    { id: '11', name: 'Okok sucré', price: 5000, category: 'plats' },
    { id: '12', name: 'Pepper soup', price: 7000, category: 'plats' },
    // Grillades
    { id: '13', name: 'Poulet braisé ou fumé (entier)', price: 8000, category: 'grillades' },
    { id: '14', name: 'Poisson braisé', price: 8000, category: 'grillades' },
    { id: '15', name: 'Porc braisé', price: 5000, category: 'grillades' },
    { id: '16', name: 'Queue de boeuf braisée', price: 8000, category: 'grillades' },
    { id: '17', name: 'Choukouya de poulet fumé (1/2)', price: 5000, category: 'grillades' },
    // Plats spéciaux
    { id: '18', name: 'Tchep (Poulet ou Poisson)', price: 5000, category: 'speciaux' },
    { id: '19', name: 'Placali sauce graine/gombo', price: 5000, category: 'speciaux' }
  ];

  const eventTypes = [
    'Mariage',
    'Anniversaire',
    'Réunion d\'entreprise',
    'Fête familiale',
    'Célébration',
    'Autre'
  ];

  const featuredDishes = [
    {
      name: "Ndolè Royal",
      description: "Viande, poisson fumé, crevettes",
      price: "10,000",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      name: "Poulet Braisé",
      description: "Poulet entier grillé à la perfection",
      price: "8,000",
      image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      name: "Tchep",
      description: "Riz au poulet ou poisson",
      price: "5,000",
      image: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    if (!selectedId) return;
    
    const item = menuItems.find(item => item.id === selectedId);
    if (!item) return;

    setOrderForm(prev => {
      const existingItem = prev.selectedItems.find(selected => selected.id === selectedId);
      if (existingItem) {
        return {
          ...prev,
          selectedItems: prev.selectedItems.map(selected =>
            selected.id === selectedId
              ? { ...selected, quantity: selected.quantity + 1 }
              : selected
          )
        };
      } else {
        return {
          ...prev,
          selectedItems: [...prev.selectedItems, { ...item, quantity: 1 }]
        };
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setOrderForm(prev => ({
        ...prev,
        selectedItems: prev.selectedItems.filter(item => item.id !== id)
      }));
    } else {
      setOrderForm(prev => ({
        ...prev,
        selectedItems: prev.selectedItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      }));
    }
  };

  const getTotalCost = () => {
    return orderForm.selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleWhatsAppOrder = () => {
    if (orderForm.selectedItems.length === 0) return;

    const message = `🍽️ *Nouvelle commande - La Table de Jeanine*\n\n` +
      `👤 Nom: ${orderForm.firstName} ${orderForm.lastName}\n` +
      `📧 Email: ${orderForm.email}\n` +
      `📞 Téléphone: ${orderForm.phone}\n` +
      `🎉 Type d'événement: ${orderForm.eventType}\n` +
      `📅 Date: ${orderForm.eventDate}\n` +
      `👥 Invités: ${orderForm.guests}\n` +
      `📍 Lieu: ${orderForm.eventLocation}\n\n` +
      `🍽️ *Commande:*\n` +
      orderForm.selectedItems.map(item => 
        `• ${item.name} x${item.quantity} - ${item.price * item.quantity}F`
      ).join('\n') +
      `\n\n💰 *Total: ${getTotalCost()}F*\n\n` +
      `💬 Informations supplémentaires:\n${orderForm.additionalInfo}`;

    const whatsappUrl = `https://wa.me/22507580273?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setOrderForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      eventLocation: '',
      selectedItems: [],
      additionalInfo: ''
    });
  };

  return (
    <div className="bg-white pt-32">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: 'url(/cover.jpeg)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenue chez
            <span className="block text-orange-500">La Table de Jeanine</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez les saveurs authentiques de l'Afrique dans une atmosphère chaleureuse et conviviale
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-orange-700 transition-all duration-200 transform hover:scale-105"
          >
            Découvrir notre Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez notre gamme complète de services de restauration et événementiel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Corporate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate</h3>
                <p className="text-gray-600 mb-4">Solutions professionnelles pour vos événements d'entreprise</p>
                <Link
                  to="/services/corporate"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Mariage */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Mariage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-pink-600 bg-opacity-40 flex items-center justify-center">
                  <Heart className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mariage</h3>
                <p className="text-gray-600 mb-4">Célébrez le plus beau jour de votre vie avec style</p>
                <Link
                  to="/services/mariage"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Brunchs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Brunchs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-500 bg-opacity-40 flex items-center justify-center">
                  <Coffee className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brunchs</h3>
                <p className="text-gray-600 mb-4">Commencez votre journée avec style et saveur</p>
                <Link
                  to="/services/brunchs"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Chef à domicile */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Chef à domicile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-600 bg-opacity-40 flex items-center justify-center">
                  <ChefHat className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chef à domicile</h3>
                <p className="text-gray-600 mb-4">Une expérience culinaire unique chez vous</p>
                <Link
                  to="/services/chef-domicile"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Service traiteur */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div className="relative h-48">
                <img 
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Service traiteur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-40 flex items-center justify-center">
                  <Utensils className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Service traiteur</h3>
                <p className="text-gray-600 mb-4">Service traiteur complet pour tous vos événements</p>
                <Link
                  to="/services/traiteur"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 font-medium"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Plats <span className="text-orange-600">Signature</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                    {dish.price}F
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 transform rotate-45 translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100" 
              alt="Food" 
              className="w-20 h-20 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-6">
            Servir les Saveurs les Plus<br />
            Audacieuses d'Afrique, Un Plat à la Fois.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors duration-200"
          >
            Commencer Maintenant
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      

      
    </div>
  );
};

export default Home;