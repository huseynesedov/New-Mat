import React from 'react';
import RouteList from './Components/Layout/Routes/Routes';
import Layout from './Components/Layout/MainLayout/Layout';
import Login from './Components/Pages/Login/Login';
import { AuthProvider, useAuth } from './AuthContext';
import SkeletonScreen from './Loader/index';
import  {Spin} from 'antd'
function App() {
  const { loggedIn, loading , loginLoading } = useAuth();

  if (loading) {
    return <SkeletonScreen />;
  }

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
