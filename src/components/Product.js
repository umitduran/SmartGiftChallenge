import React from 'react';
import styled from 'styled-components';
import Button from "./subcomponents/Button";
import ProductImage from "./subcomponents/ProductImage";
import Text from './subcomponents/Text';
import Select from "./subcomponents/Select";

const StyledContent = styled.section`
    max-width: 1200px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    flex-flow: row wrap;
`;

const StyledFilterSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1px;
    list-style: none;
    min-width: 200px;
`;


const Product = () => {
    const sizeData = [{value:1,text:'Small'},{value:2,text:'Medium'}];
    const colorData = [{value:1,text:'Red'},{value:2,text:'Blue'}];
    const storageData = [{value:1,text:'32GB'},{value:2,text:'64GB'},{value:3,text:'128GB'}];
    return (
        <StyledContent>
            <ProductImage
                src='url(../../assets/running_shoe_blue.jpeg)'
                description='Lorem ipsum Product Detail'>
            </ProductImage>
            <StyledFilterSection>
                <Text>Running Shoe Red</Text>
                <Select>
                    <option value="" hidden>
                        Size
                    </option>
                    {sizeData.map(obj => <option key={obj.value} value={obj.id}>{obj.text}</option>)}
                </Select>
                <Select>
                    <option value="" hidden>
                        Color
                    </option>
                    {colorData.map(obj => <option key={obj.value} value={obj.id}>{obj.text}</option>)}
                </Select>
                <Button accept='true'>
                    Accept
                </Button>
            </StyledFilterSection>
        </StyledContent>
    )
}

export default  Product;

