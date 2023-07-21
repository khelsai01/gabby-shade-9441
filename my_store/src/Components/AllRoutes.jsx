import React from "react";
import {Home} from "../Pages/Home"
import IPhone from "../Pages/iPhone"
import {SingleProducts} from "../Pages/SIngleProducts"
import { Route ,Routes } from "react-router-dom";
import { iPad } from "../Pages/iPad";
import Watch from "../Pages/Watchs"

export const AllRoutes =()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/iphone" element={<IPhone />} ></Route>
            <Route path="/iphone/id" element={<SingleProducts />} ></Route>
            <Route path="ipad" element={<iPad />}></Route>
            <Route path="watch" element={<Watch />}></Route>
    </Routes>
    )
}