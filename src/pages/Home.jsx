import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ShoppingCart,
  Star,
  TrendingUp,
  Zap,
  Heart,
  Gift,
  Truck,
  Shield,
} from "lucide-react";

const Home = () => {
  const [featuredProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      rating: 4.5,
      discount: 20,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      rating: 4.8,
      discount: 15,
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300",
      rating: 4.3,
      discount: 10,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1527814050087-379102bc2235?w=300",
      rating: 4.7,
      discount: 25,
    },
  ]);

  const [categories] = useState([
    { name: "Electronics", icon: <Zap className="w-6 h-6" />, count: 120 },
    { name: "Fashion", icon: <TrendingUp className="w-6 h-6" />, count: 85 },
    { name: "Accessories", icon: <ShoppingCart className="w-6 h-6" />, count: 200 },
    { name: "Home & Living", icon: <Star className="w-6 h-6" />, count: 150 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-indigo-50 font-sans">
      
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-teal-600 via-indigo-600 to-blue-700 text-white shadow-inner"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0f766e 0%, #4f46e5 50%, #1e40af 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/20" style={{ opacity: 0.2 }}></div>
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-[2px] drop-shadow-[4px_4px_10px_rgba(0,0,0,0.7)] animate-pulse"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.2,
                letterSpacing: '0.05em',
                textShadow: '4px 4px 10px rgba(0, 0, 0, 0.7)',
                animation: 'pulse 2s infinite'
              }}
            >
              Welcome to ShopEasy
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 font-medium italic opacity-90"
              style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                opacity: 0.9,
                marginBottom: '2rem'
              }}
            >
              Discover amazing products at unbeatable prices
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{ gap: '1rem', justifyContent: 'center' }}
            >
              <Link
                to="/products"
                className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f766e',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Shop Now
              </Link>
              <Link
                to="/register"
                className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-teal-700 transition"
                style={{
                  border: '2px solid #ffffff',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Join Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section 
        className="py-12 bg-white shadow-lg rounded-2xl mx-4 mt-8"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          borderRadius: '1rem',
          margin: '2rem',
          marginTop: '-2rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 shadow-lg" style={{
                backgroundColor: '#dcfce7',
                padding: '1rem',
                borderRadius: '9999px',
                marginBottom: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <Truck className="w-8 h-8 text-green-600" style={{ width: '2rem', height: '2rem', color: '#16a34a' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Free Shipping</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 shadow-lg" style={{
                backgroundColor: '#dbeafe',
                padding: '1rem',
                borderRadius: '9999px',
                marginBottom: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <Shield className="w-8 h-8 text-blue-600" style={{ width: '2rem', height: '2rem', color: '#2563eb' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Secure Payment</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4 shadow-lg" style={{
                backgroundColor: '#f3e8ff',
                padding: '1rem',
                borderRadius: '9999px',
                marginBottom: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <Gift className="w-8 h-8 text-purple-600" style={{ width: '2rem', height: '2rem', color: '#9333ea' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Daily Deals</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Up to 70% off</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-4 rounded-full mb-4 shadow-lg" style={{
                backgroundColor: '#fee2e2',
                padding: '1rem',
                borderRadius: '9999px',
                marginBottom: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <Heart className="w-8 h-8 text-red-600" style={{ width: '2rem', height: '2rem', color: '#dc2626' }} />
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Best Quality</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Premium products only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-indigo-600 p-4 rounded-full text-white" style={{
                    backgroundImage: 'linear-gradient(to right, #14b8a6, #4f46e5)',
                    padding: '1rem',
                    borderRadius: '9999px',
                    color: '#ffffff'
                  }}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2" style={{ fontSize: '1.25rem', fontWeight: 600, textAlign: 'center', marginBottom: '0.5rem' }}>{category.name}</h3>
                <p className="text-gray-600 text-center" style={{ color: '#6b7280', textAlign: 'center' }}>{category.count} Products</p>
                <Link
                  to="/products"
                  className="mt-4 block w-full bg-teal-600 text-white text-center py-2 rounded-lg hover:bg-teal-700 transition"
                  style={{
                    backgroundColor: '#0f766e',
                    color: '#ffffff',
                    textAlign: 'center',
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    marginTop: '1rem',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease'
                  }}
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="relative" style={{ position: 'relative' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    style={{
                      width: '100%',
                      height: '12rem',
                      objectFit: 'cover'
                    }}
                  />
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold" style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      backgroundColor: '#ef4444',
                      color: '#ffffff',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}>
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="p-4" style={{ padding: '1rem' }}>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                  <div className="flex items-center mb-2" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        style={{
                          width: '1rem',
                          height: '1rem',
                          color: i < Math.floor(product.rating) ? '#fbbf24' : '#d1d5db'
                        }}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600" style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className="text-2xl font-bold text-teal-600" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f766e' }}>
                      ${product.price}
                    </span>
                  </div>
                  <div className="space-y-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link
                      to="/products"
                      className="block w-full bg-teal-600 text-white text-center py-2 rounded-lg hover:bg-teal-700 transition"
                      style={{
                        display: 'block',
                        width: '100%',
                        backgroundColor: '#0f766e',
                        color: '#ffffff',
                        textAlign: 'center',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      Add to Cart
                    </Link>
                    <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition flex items-center justify-center" style={{
                      width: '100%',
                      border: '1px solid #d1d5db',
                      color: '#374151',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.3s ease',
                      backgroundColor: 'transparent',
                      cursor: 'pointer'
                    }}>
                      <Heart className="w-4 h-4 mr-2" style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                      Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get exclusive deals and new product updates</p>
          <div className="max-w-md mx-auto flex gap-2" style={{ maxWidth: '28rem', margin: '0 auto', display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                color: '#111827'
              }}
            />
            <button className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition" style={{
              backgroundColor: '#ffffff',
              color: '#0f766e',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: 600,
              transition: 'background-color 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8">Join millions of happy customers today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            <Link
              to="/register"
              className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
              style={{
                backgroundColor: '#0f766e',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 600,
                transition: 'background-color 0.3s ease',
                textDecoration: 'none'
              }}
            >
              Sign Up Now
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
              style={{
                border: '2px solid #ffffff',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
