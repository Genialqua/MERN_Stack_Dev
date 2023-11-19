import React from "react"
import {BrowserRouter, Rout, Route} from 'react-router-dom';
import App from "../App";
import Signup from "../auth/signup";
import Signin from "../auth/signin";
import Activate from "./auth/Activate";
import Private from "./core/Private";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route>
                <Rout path="/" exact component={App} />
                <Rout path="/signup" exact component={Signup}/>
                <Rout path="/signin" exact component={Signin}/>
                <Rout path="/auth/activate/:token" exact component={Activate}/>
            </Route>
        </BrowserRouter>
    );
};

export default Routes