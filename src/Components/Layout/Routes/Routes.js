import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import React from "react";

import Profile from "../../Pages/Profile";
import BusinesProfil from "../../Pages/BusinessProfile";
import Basket from "../../Pages/Basket/index";
import Detail from "../../Pages/ProductDetail/index";


const RouteList = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/BusinesProfil" element={<BusinesProfil />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    </>
}

export  default  RouteList
