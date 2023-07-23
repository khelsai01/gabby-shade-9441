import React from "react";
import {Home} from "../Pages/Home"
import IPhone from "../Pages/iPhone"
import {SingleProducts} from "../Pages/SIngleProducts"
import { Route ,Routes } from "react-router-dom";
import IPad  from "../Pages/iPad";
import Watch from "../Pages/Watchs"
import Cart from "../Pages/Cart";
import Login from "../AuthContent/Login";
import IpadSinglePage from "../Pages/IpadSinglePage";
import WatchSinglePage from "../Pages/WatchSinglePage";

export const AllRoutes =()=>{

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/iphone" element={<IPhone />} ></Route>
            <Route path="/iphone/:id" element={<SingleProducts />} ></Route>
            <Route path="/ipad" element={<IPad />}></Route>
            <Route path="/ipad/:id" element={<IpadSinglePage />}></Route>

            <Route path="/watch" element={<Watch />}></Route>
            <Route path="/watch/:id" element={<WatchSinglePage />}></Route>

            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />

    </Routes>
    )
}