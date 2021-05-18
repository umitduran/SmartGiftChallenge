import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import Modal from './components/Modal/Modal';
import {Context} from "./context/Store";
import { withRouter } from 'react-router-dom';

const MainWrapper = styled.section`
    max-width: 1200px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



const App = () => {

    const [state, dispatch] = useContext(Context);

    const [show, setShow] = useState(true);

    function handleClose (merchantCode,productCode) {
        dispatch({type: 'SET_MERCHANT_CODE', payload: merchantCode});
        dispatch({type: 'SET_PRODUCT_CODE', payload: productCode});
        setShow(false);
    };

    return (
        <MainWrapper>

            <Modal show={show} onClose={handleClose} />

            <div>{state.merchantCode} + {state.productCode}</div>

        </MainWrapper>
    )
};

const ComponentWithRouter = withRouter(App);
export default ComponentWithRouter;
