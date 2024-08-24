import React, { createContext, useState, useContext, useEffect } from 'react';
import {AccountApi} from "./api/account.api";
import {notification } from 'antd';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [api] = notification.useNotification();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(JSON.parse(storedLoggedIn));
    }
    else{
      setLoggedIn(false)
    }
    setLoading(false);
  }, []);

  const login = (userCode , customerCode , passwordHash) => {
    setLoading(true);

    AccountApi.Login({userCode, customerCode, passwordHash}).then((res) => {
      // 000000001
      // 000000001
      // admin123!!!
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    }).catch(()=>{
      setLoggedIn(false)
      openNotification()
    }).finally(()=>{
      setLoading(false);
    })
  };

  const openNotification = () => {
    api.info({
      message: `Error`,
      description: 'İstifadəçi adı və şifrəni yenidən yoxlayın',
      placement:'topRight'
    });
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
