import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Product from './components/Product';

const MainWrapper = styled.section`
    max-width: 1200px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


const App = () => {
    return (

        <MainWrapper>

            <Header/>

            <Product/>

        </MainWrapper>
    )
};


export default App;
