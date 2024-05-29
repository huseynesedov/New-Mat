import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import React from "react";
import Profile from "../../Pages/Profile";


const RouteList = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
}

export  default  RouteList
