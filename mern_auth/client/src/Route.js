import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Signup from "./auth/signup";

const Rout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={App}/>
                <Route path="/signup" exact Component={Signup}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;
