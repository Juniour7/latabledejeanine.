import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Corporate from './pages/services/Corporate';
import Mariage from './pages/services/Mariage';
import Brunchs from './pages/services/Brunchs';
import ChefDomicile from './pages/services/ChefDomicile';
import Traiteur from './pages/services/Traiteur';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/corporate" element={<Corporate />} />
            <Route path="/services/mariage" element={<Mariage />} />
            <Route path="/services/brunchs" element={<Brunchs />} />
            <Route path="/services/chef-domicile" element={<ChefDomicile />} />
            <Route path="/services/traiteur" element={<Traiteur />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;