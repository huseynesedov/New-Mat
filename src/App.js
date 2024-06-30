import React from 'react';
import RouteList from './Components/Layout/Routes/Routes';
import Layout from './Components/Layout/MainLayout/Layout';
import Login from './Components/Pages/Login/Login';
import { AuthProvider, useAuth } from './AuthContext';
import SkeletonScreen from './Loader/index';

function App() {
  const { loggedIn, loading } = useAuth();

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
        <Login />
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
