import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    padding: 4px 10px;
    font-size: 0.8rem;
    color: #fff;
    outline: none;
    border: 1px solid;
    border-radius: 10px;
    width: 50%;
    height: 40px;
    background-color: #5fcc93;
    color: white;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 20%);
    
    ${({accept}) => accept && 
    css`
        background-color: #FF5F15;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

const Button = ({ accept, children }) => {
    return <StyledButton accept={accept}>{children}</StyledButton>
};

export default Button;
