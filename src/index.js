import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Store from "./context/Store";
import { BrowserRouter, Route } from 'react-router-dom';
import Product from "./components/Product";


const root = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
    <Store>
        <Route exact path='/' component={App} />
        <Route path='/product' component={Product} />
    </Store>
    </BrowserRouter>, root);

