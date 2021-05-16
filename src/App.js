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

    const [modalOpen, setModalOpen] = useState(true);

    useEffect(() => {
        //TODO burda bug var ekran prevent oluyor;
    }, [modalOpen]);

    return (

        <MainWrapper>

            <Modal id='modal' onClose={setModalOpen} isOpen={modalOpen}></Modal>

            <Header/>

            <Product/>

        </MainWrapper>
    )
};


export default App;
