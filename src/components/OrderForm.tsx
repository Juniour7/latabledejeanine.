import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface OrderFormData {
  nom: string;
  telephone: string;
  adresse: string;
  typeCommande: string;
  dateSouhaitee: string;
  heureSouhaitee: string;
  modePaiement: string;
  instructionsSpeciales: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  
  const [formData, setFormData] = useState<OrderFormData>({
    nom: '',
    telephone: '',
    adresse: '',
    typeCommande: '',
    dateSouhaitee: '',
    heureSouhaitee: '',
    modePaiement: '',
    instructionsSpeciales: ''
  });

  const [showRecapitulatif, setShowRecapitulatif] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setShowRecapitulatif(true);
  };

  const handleConfirmOrder = () => {
    const message = `🍽️ *Nouvelle commande - La Table de Jeanine*\n\n` +
      `👤 *Informations client:*\n` +
      `Nom: ${formData.nom}\n` +
      `Téléphone: ${formData.telephone}\n` +
      `Adresse: ${formData.adresse}\n\n` +
      `🛍️ *Commande:*\n` +
      cartItems.map(item => 
        `• ${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()}F`
      ).join('\n') +
      `\n\n💰 *Total: ${getTotalPrice().toLocaleString()}F*\n\n` +
      `📦 *Type de commande:* ${formData.typeCommande}\n` +
      `📅 *Date souhaitée:* ${formData.dateSouhaitee}\n` +
      `⏰ *Heure souhaitée:* ${formData.heureSouhaitee}\n` +
      `💳 *Mode de paiement:* ${formData.modePaiement}\n\n` +
      `📝 *Instructions spéciales:*\n${formData.instructionsSpeciales || 'Aucune'}`;

    const whatsappUrl = `https://wa.me/2250758020273?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close
    setFormData({
      nom: '',
      telephone: '',
      adresse: '',
      typeCommande: '',
      dateSouhaitee: '',
      heureSouhaitee: '',
      modePaiement: '',
      instructionsSpeciales: ''
    });
    clearCart();
    setShowRecapitulatif(false);
    onClose();
  };

  if (!isOpen) return null;

  if (showRecapitulatif) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b bg-green-800 text-white">
            <h2 className="text-xl font-bold">📋 Récapitulatif de commande</h2>
            <button
              onClick={() => setShowRecapitulatif(false)}
              className="text-white hover:text-lime-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <div className="space-y-6">
              {/* Client Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">👤 Informations client</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Nom:</strong> {formData.nom}</p>
                  <p><strong>Téléphone:</strong> {formData.telephone}</p>
                  <p><strong>Adresse:</strong> {formData.adresse}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">🛍️ Commande</h3>
                <div className="space-y-2">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-medium">{(item.price * item.quantity).toLocaleString()}F</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-lime-500">{getTotalPrice().toLocaleString()}F</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">📦 Détails de commande</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Type:</strong> {formData.typeCommande}</p>
                  <p><strong>Date:</strong> {formData.dateSouhaitee}</p>
                  <p><strong>Heure:</strong> {formData.heureSouhaitee}</p>
                  <p><strong>Paiement:</strong> {formData.modePaiement}</p>
                  {formData.instructionsSpeciales && (
                    <p><strong>Instructions:</strong> {formData.instructionsSpeciales}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t p-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setShowRecapitulatif(false)}
                className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Modifier
              </button>
              <button
                onClick={handleConfirmOrder}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-bold"
              >
                Confirmer la commande
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b bg-green-800 text-white">
          <h2 className="text-xl font-bold">🛒 Finaliser la commande</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-lime-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="space-y-6">
            {/* Client Information */}
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-4">👤 Informations client</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="+225 XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse *
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Votre adresse complète"
                  />
                </div>
              </div>
            </div>

            {/* Order Items Summary */}
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-4">🛍️ Sélection des plats</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-center">Aucun plat sélectionné</p>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm hover:bg-red-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm hover:bg-green-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <span className="ml-4 font-bold text-green-600">
                            {(item.price * item.quantity).toLocaleString()}F
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span className="text-lime-500">{getTotalPrice().toLocaleString()}F</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Type */}
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-4">📦 Type de commande</h3>
              <select
                name="typeCommande"
                value={formData.typeCommande}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Sélectionner le type</option>
                <option value="🚗 Livraison">🚗 Livraison</option>
                <option value="🥡 À emporter">🥡 À emporter</option>
                <option value="🍽️ Sur place">🍽️ Sur place</option>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  name="dateSouhaitee"
                  value={formData.dateSouhaitee}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Heure souhaitée *
                </label>
                <input
                  type="time"
                  name="heureSouhaitee"
                  value={formData.heureSouhaitee}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mode de paiement *
              </label>
              <select
                name="modePaiement"
                value={formData.modePaiement}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Sélectionner le mode de paiement</option>
                <option value="Wave">Wave</option>
                <option value="Orange Money">Orange Money</option>
                <option value="Djamo">Djamo</option>
              </select>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructions spéciales (optionnel)
              </label>
              <textarea
                name="instructionsSpeciales"
                value={formData.instructionsSpeciales}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                placeholder="Instructions particulières pour votre commande..."
              />
            </div>
          </div>

          <div className="flex space-x-4 mt-6 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={cartItems.length === 0}
              className="flex-1 bg-lime-400 text-green-800 py-3 rounded-lg hover:bg-lime-500 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;