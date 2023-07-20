import React from "react";
import {Home} from "../Pages/Home"
import {IPhone} from "../Pages/iPhone"
import {SingleProducts} from "../Pages/SIngleProducts"
import { Route ,Routes } from "react-router-dom";

export const AllRoutes =()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iphone" element={<IPhone />} />
            <Route path="/iphone/id" element={<SingleProducts />} />
    </Routes>
    )
}