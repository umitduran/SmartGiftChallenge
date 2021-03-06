import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    padding: 4px 10px;
    font-size: 0.8rem;
    color: #fff;
    outline: none;
    border: 1px solid;
    border-radius: 10px;
    height: 40px;
    background-color: #5fcc93;
    color: white;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 20%);
    
    ${({accept}) => accept && 
    css`
        background-color: #FF5F15;
        width: 50%;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
    
       ${({enter}) => enter &&
    css`
        width: 20%;
        height: 30px;
        margin-top: 10px;
        background-color: #52b788;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
    
    ${({disabled}) => disabled &&
    css`
        background-color: #8d99ae;
        width: 80%;
    `}
`;

const Button = ({ accept, onClick,disabled, children }) => {
    return <StyledButton
        disabled={disabled}
        accept={accept}
        onClick={onClick}>{children}</StyledButton>
};

export default Button;
