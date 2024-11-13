import React from 'react';
import RouteList from './Components/Layout/Routes/Routes';
import Layout from './Components/Layout/MainLayout/Layout';
import Login from './Components/Pages/Login/Login';
import { AuthProvider, useAuth } from './AuthContext';
import SkeletonScreen from './Loader/index';
import  {Spin} from 'antd'
import {AccountApi} from "./api/account.api";
function App() {
  const { loggedIn, loading , loginLoading , logout } = useAuth();

  if (loading) {
    return <SkeletonScreen />;
  }

  setInterval(()=>{
    if(loggedIn) {
      return AccountApi.RefreshToken({
        refreshToken:localStorage.getItem('refreshToken')
      }).then((response)=>{
        console.log(response);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('token', response.accessToken);
      }).catch(()=>{
        logout()
      })
    }
    else{
      return;
    }
  }, 30000)

  return (
    <>
      {loggedIn ? (
        <Layout>
          <RouteList />
        </Layout>
      ) : (
          <Spin  spinning={loginLoading} tip="Loading...">
            <Login />
          </Spin>
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
