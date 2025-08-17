import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, validate token with backend
      setUser({ email: localStorage.getItem('email') || 'user@example.com' });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in real app, make API call
    localStorage.setItem('token', 'mock-jwt-token');
    localStorage.setItem('email', email);
    setUser({ email });
  };

  const register = async (email, password, name) => {
    // Mock register - in real app, make API call
    localStorage.setItem('token', 'mock-jwt-token');
    localStorage.setItem('email', email);
    setUser({ email, name });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};
