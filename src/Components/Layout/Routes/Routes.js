import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "../../Pages/Home";
import ListPage from "../../Pages/Products/ListPage";

import Profile from "../../Pages/Profile";
import BusinesProfil from "../../Pages/BusinessProfile";

import Basket from "../../Pages/Basket/index";
import Detail from "../../Pages/ProductDetail/index";

import Orders from "../../Pages/Orders";
import OrderDetail from "../../Pages/OrdersDetail/detail";


const RouteList = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ListPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/BusinesProfil" element={<BusinesProfil />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/Orders/OrderDetail/:id" element={<OrderDetail />} />
        </Routes>
    </>
}

export  default  RouteList
