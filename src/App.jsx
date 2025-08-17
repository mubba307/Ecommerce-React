import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Constact';
import CustomerService from './pages/CustomerService';
import {AuthProvider} from './context/AuthContext';
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* Navbar stays on all pages */}
          <Navbar />
          
          {/* Page content */}
          <div className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/customerservice" element={<CustomerService />} />
            </Routes>
          </div>
          
          {/* Footer stays on all pages */}
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
