import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    eventLocation: '',
    additionalInfo: ''
  });

  const [activeTab, setActiveTab] = useState('individual');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppMessage = () => {
    const message = `🍽️ *Contact - La Table de Jeanine*\n\n` +
      `👤 Nom: ${formData.firstName} ${formData.lastName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📞 Téléphone: ${formData.phone}\n` +
      `🎉 Type d'événement: ${formData.eventType}\n` +
      `📅 Date: ${formData.eventDate}\n` +
      `👥 Invités: ${formData.guests}\n` +
      `📍 Lieu: ${formData.eventLocation}\n\n` +
      `💬 Informations supplémentaires:\n${formData.additionalInfo}`;

    const whatsappUrl = `https://wa.me/22507580273?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      eventLocation: '',
      additionalInfo: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      handleWhatsAppMessage();
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900 text-white p-6 rounded-lg flex items-center">
              <div className="bg-gray-800 p-4 rounded-lg mr-4">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Appelez-nous</h3>
                <p>+225 07 58 02 0273</p>
              </div>
            </div>

            <div className="bg-green-800 text-white p-6 rounded-lg flex items-center">
              <div className="bg-green-700 p-4 rounded-lg mr-4">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Écrivez-nous</h3>
                <p>info@latabledejeanine.com</p>
              </div>
            </div>

            <div className="bg-green-800 text-white p-6 rounded-lg flex items-center">
              <div className="bg-green-700 p-4 rounded-lg mr-4">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Visitez-nous</h3>
                <p>C249+Q28, Abidjan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {activeTab === 'individual' ? "Réservez votre service de restauration dès aujourd'hui !" : "Planifions votre événement de groupe !"}
              </h2>
              
              {/* Tab Navigation */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
                <button
                  onClick={() => setActiveTab('individual')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'individual' ? 'bg-orange-500 text-white shadow' : 'text-gray-600'
                  }`}
                >
                  Restauration Individuelle
                </button>
                <button
                  onClick={() => setActiveTab('group')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'group' ? 'bg-white text-green-800 shadow' : 'text-gray-600'
                  }`}
                >
                  Restauration de Groupe
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="votre-email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="+225 XX XX XX XX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type d'événement
                  </label>
                  <input
                    type="text"
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Mariage, Anniversaire, etc."
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date de l'événement
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Invités
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Nombre d'invités"
                  />
                </div>
                <div>
                  <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Lieu de l'événement
                  </label>
                  <input
                    type="text"
                    id="eventLocation"
                    name="eventLocation"
                    value={formData.eventLocation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Lieu de l'événement"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                  Informations supplémentaires
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Partagez des instructions spéciales..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-200 font-bold text-lg"
              >
                Réserver maintenant
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 h-96 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-600">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-bold text-orange-600 mb-2">La Table de Jeanine</h3>
                <p>C249+Q28, Abidjan</p>
                <p className="mt-2">+225 07 58 02 0273</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-4">
            Servir les Saveurs les Plus<br />
            Audacieuses d'Afrique, Un Plat à la Fois.
          </h2>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 font-bold">
            Commencer Maintenant
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Contact;