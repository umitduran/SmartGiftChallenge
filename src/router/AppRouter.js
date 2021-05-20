import Store from "../context/Store";
import App from "../App";
import Product from "../components/Product";
import { BrowserRouter, Route } from 'react-router-dom';
import React from "react";

const AppRouter = () => (
    <BrowserRouter>
        <Store>
            <Route exact path='/' component={App} />
            <Route path='/product' component={Product} />
        </Store>
    </BrowserRouter>
);

export default AppRouter;
