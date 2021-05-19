import React from 'react';
import styled,{css} from 'styled-components';

const StyledImage = styled.div`
    width: 100%;
    height: 200px;
    background-size: 100% 100%;
    border: 1px solid white; //TODO blue or red parametric 
    background-image: ${({src}) => src };
`;

const StyledImageDetail = styled.p`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: auto;
    color: black;
    background: #ffffff;
    background-color: #e4ecef;
`;

const StyledProduct = styled.div`
    width:50%;
`;

const ProductImage = ({ src,description }) => {
    return <StyledProduct>
                <StyledImage src={src}/>
                <StyledImageDetail>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignContent: 'center',
                    }} dangerouslySetInnerHTML={{ __html: description }} />
                </StyledImageDetail>
            </StyledProduct>
};

export default ProductImage;

