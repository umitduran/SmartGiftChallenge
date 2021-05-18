import React, {useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import styles from "./modal.module.css";
import Button from '../subcomponents/Button';
import Header from "../subcomponents/Header";
import Input from "../subcomponents/Input";


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

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
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

    return (
        <React.Fragment>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
                <div style={modalStyle} className={styles.modal__wrap}>
                    <div className="content">
                        <div className="text">
                            <Header>Welcome SmartGift</Header>
                            <p style={{
                                'fontfamily': 'sans-serif',
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
                        <Button onClick={onClose} accept>
                            Enter
                        </Button>
                    </StyledFooter>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;
