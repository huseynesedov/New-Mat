import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(JSON.parse(storedLoggedIn));
    }
    setLoading(false);
  }, []);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      setLoading(false);
    }, 1000); // Simulated loading time
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
