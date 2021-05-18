import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Header from "./components/subcomponents/Header";
import Product from './components/Product';
import Modal from './components/Modal/Modal';

const MainWrapper = styled.section`
    max-width: 1200px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



const App = () => {

    const [show, setShow] = useState(true);

    return (

        <MainWrapper>


            <Modal show={show} onClose={() => setShow(false)} />

{/*            <Header>
                Product Detail
            </Header>

            <Product/>*/}

        </MainWrapper>
    )
};


export default App;
