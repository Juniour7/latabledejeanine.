import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, Clock, ChevronDown, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { getTotalItems, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Corporate', path: '/services/corporate' },
    { name: 'Mariage', path: '/services/mariage' },
    { name: 'Brunchs', path: '/services/brunchs' },
    { name: 'Chef à domicile', path: '/services/chef-domicile' },
    { name: 'Service traiteur', path: '/services/traiteur' }
  ];

  return (
    <>
      {/* Top green bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm fixed top-0  left-0 right-0 z-40">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>+225 07 58 02 0273</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@latabledejeanine.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <span>Heures d'ouverture : Mardi & Mercredi: 11h – 15h | Jeudi – Samedi: 11h – 22h | Dimanche & Lundi: Fermé</span>
          </div>
        </div>
      </div>

      {/* Main header - Fixed */}
      <header className="bg-white shadow-sm fixed top-8 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="w-16 h-16 mr-4">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="La Table de Jeanine" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">La Table de Jeanine</h1>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? 'text-orange-600 font-bold' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Accueil
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className={`font-medium transition-colors duration-200 flex items-center ${
                    location.pathname.startsWith('/services') 
                      ? 'text-orange-600 font-bold' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/tarifs" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/tarifs' 
                    ? 'text-orange-600 font-bold' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Tarifs
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/about' 
                    ? 'text-orange-600 font-bold' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                À propos
              </Link>
              
              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? 'text-orange-600 font-bold' 
                    : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 flex items-center font-medium"
              >
                Panier
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Cart Button */}
            <button
              className="hidden md:flex"
              onClick={() => setIsCartOpen(true)}
              className="relative bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 items-center font-medium"
            >
              Panier
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === '/' 
                      ? 'text-orange-600 font-bold' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Accueil
                </Link>
                
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`flex items-center justify-between w-full font-medium transition-colors duration-200 ${
                      location.pathname.startsWith('/services') 
                        ? 'text-orange-600 font-bold' 
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isServicesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-gray-600 hover:text-orange-600 transition-colors duration-200 py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/tarifs" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === '/tarifs' 
                      ? 'text-orange-600 font-bold' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Tarifs
                </Link>
                
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === '/about' 
                      ? 'text-orange-600 font-bold' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  À propos
                </Link>
                
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === '/contact' 
                      ? 'text-orange-600 font-bold' 
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;