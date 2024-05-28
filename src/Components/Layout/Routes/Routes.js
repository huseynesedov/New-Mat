import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home";
import React from "react";


const RouteList = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
}

export  default  RouteList
