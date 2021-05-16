import React from 'react';
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    color: #fff;
    outline: none;
    border: 2px solid;
    border-radius: 30px;
    background-color: #7cbae3;
    width: 50%;
    margin-top: 1rem;
    
    ${({accept}) => accept && 
    css`
        background-color: #5fcc93;
        color: white;
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

const Button = ({ accept, children }) => {
    return <StyledButton accept={accept}>{children}</StyledButton>
};

export default Button;
