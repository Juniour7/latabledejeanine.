import React from 'react';
import { X, Plus, Minus, Send, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import OrderForm from './OrderForm';

const Cart: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice
  } = useCart();

  const [showOrderForm, setShowOrderForm] = React.useState(false);

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-green-800 text-white">
            <h2 className="text-xl font-bold">🛒 Votre Panier</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-white hover:text-lime-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto max-h-[60vh] p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p>Votre panier est vide</p>
                <p className="text-sm mt-2">Ajoutez des plats depuis le menu</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.price.toLocaleString()}F chacun</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-2xl font-bold text-lime-500">{getTotalPrice().toLocaleString()}F</span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setShowOrderForm(true);
                }}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Finaliser la commande
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-2 text-gray-500 py-2 hover:text-gray-700 transition-colors"
              >
                Vider le panier
              </button>
            </div>
          )}
        </div>
      </div>
      
      <OrderForm 
        isOpen={showOrderForm} 
        onClose={() => setShowOrderForm(false)} 
      />
    </>
  );
};

export default Cart;