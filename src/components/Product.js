import React from 'react';
import styled from 'styled-components';
import Button from "./Button";
import ProductImage from "./ProductImage";

const StyledContent = styled.section`
    max-width: 1200px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-flow: row wrap;
`;


const Product = () => {
    return (
        <StyledContent>
            <ProductImage
                src='url(../../assets/running_shoe_blue.jpeg)'
                description='Lorem ipsum Product Detail'>

            </ProductImage>
            <Button accept='true'>
                My accept button
            </Button>
        </StyledContent>
    )
}

export default  Product;

