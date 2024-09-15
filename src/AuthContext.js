import React, { createContext, useState, useContext, useEffect } from 'react';
import {AccountApi} from "./api/account.api";
import { notification } from 'antd';
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const openNotification = (message, description , error) => {
    if(error){
      notification.error({
        message,
        description,
        placement:'topRight'
      });
    }
    else{
      notification.info({
        message,
        description,
        placement:'topRight'
      });
    }
  };


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
      console.log(res)
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    }).catch((error)=>{
      setLoading(false);
      setLoggedIn(false)
      openNotification('Xəta baş verdi', error.response.data.message , true)
    }).finally(()=>{
      setLoading(false);
    })
  };





  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <AuthContext.Provider value={{ loggedIn, loading, login, logout , openNotification }}>
      {children}
    </AuthContext.Provider>
  );
};

