import React from "react";
import RouteList from "./Components/Layout/Routes/Routes";
import Layout from "./Components/Layout/MainLayout/Layout";
import Login from "./Components/Pages/Login/Login";

function App() {
    // Simulating a user who is not logged in
    const loggedIn = true;

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

export default App;
