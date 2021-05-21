import React, {useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import styles from "./welcome.module.css";
import Button from '../subcomponents/Button';
import Header from "../subcomponents/Header";
import Input from "../subcomponents/Input";
import {useHistory} from 'react-router-dom';



const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
`;

const Welcome = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const history = useHistory();
    const modalRef = useRef(null);
    const [merchantCode, setMerchantCode] = useState("");
    const [productCode, setProductCode] = useState("");

    useEffect(() => {
        if (show) {
            modalRef.current.classList.add(styles.visible);
        } else {
            modalRef.current.classList.remove(styles.visible);
        }
    }, [show]);

    function handleClose() {
        onClose(merchantCode,productCode);
        history.push({
            pathname: '/product',
            search: `?code=${productCode}`,
            state: {
                merchantCode,
                productCode
            }
        });
    }

    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
                <div style={modalStyle} className={styles.modal__wrap}>
                    <div className="content">
                        <div className="text">
                            <Header>Welcome SmartGift</Header>
                            <p style={{
                                'fontFamily': 'sans-serif',
                                'margin': '20px'
                            }}>
                                To see product detail you have to enter the Merchant Code and the Product Code
                            </p>
                            <StyledContent>
                                <Input
                                    placeholder={'Merchant Code'}
                                    value={merchantCode}
                                    onChange={merchantCode => setMerchantCode(merchantCode.target.value)}/>

                                <Input
                                    placeholder={'Product Code'}
                                    value={productCode}
                                    onChange={productCode => setProductCode(productCode.target.value)}
                                />
                            </StyledContent>
                        </div>
                    </div>
                    <StyledFooter>
                        <Button onClick={handleClose} enter>
                            Enter
                        </Button>
                    </StyledFooter>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Welcome;
