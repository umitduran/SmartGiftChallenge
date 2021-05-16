import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: no-repeat;
    background-image: url(../../assets/smartgift.png);
    background-size: contain;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    height: 60px;
    min-width: 120px;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.6rem;
`;

const Header = () => {
    return <StyledHeader>Product Detail</StyledHeader>
};

export default Header;
