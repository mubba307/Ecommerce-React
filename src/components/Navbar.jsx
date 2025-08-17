import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/customerservice', label: 'Customer Service' },
  ];

  return (
    <nav
      style={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        padding: "1rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}
        onClick={() => navigate('/')}
      >
        <ShoppingCart color="#3B82F6" size={28} />
        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1F2937" }}>
          ShopEasy
        </span>
      </div>

      {/* Desktop Links */}
      <div style={{ display: "none", gap: "1.5rem" }} className="md:flex">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            style={{
              color: "#3B82F6",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#1E40AF")}
            onMouseLeave={(e) => (e.target.style.color = "#3B82F6")}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Cart */}
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => navigate('/cart')}
        >
          <ShoppingCart color="#3B82F6" size={24} />
          {getTotalItems() > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#EF4444",
                color: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                transition: "transform 0.2s ease",
              }}
            >
              {getTotalItems()}
            </span>
          )}
        </div>

        {/* User */}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ color: "#374151", fontWeight: 500 }}>{user.email}</span>
            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                backgroundColor: "#EF4444",
                color: "#fff",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link
              to="/login"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                backgroundColor: "#3B82F6",
                color: "#fff",
                fontWeight: 500,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                backgroundColor: "#10B981",
                color: "#fff",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#10B981")}
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "#fff",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{ color: "#3B82F6", fontWeight: "bold" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
