import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from "./subcomponents/Button";
import ProductImage from "./subcomponents/ProductImage";
import Text from './subcomponents/Text';
import Select from "./subcomponents/Select";
import { withRouter } from 'react-router-dom';
import Header from "./subcomponents/Header";
import API from '../api';
import {Context} from "../context/Store";
import {isEmpty} from 'lodash';

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
    const [context, dispatch] = useContext(Context);

    const [product,setProduct] = useState({});

    //apps/products?merchantCode=${context.merchantCode}&codes[]=${context.productCode}
    useEffect(() => {
        API.get(`apps/products?merchantCode=vineyardvines&codes[]=1K000006`)
            .then(oResp => {
               dispatch({type: 'GET_PRODUCTS', payload: oResp.data.data});  // set global state
                setProduct(oResp.data.data[0].selectedSku);                             //set Locale state
               console.log(oResp.data.data);    //todo remove later
            })
            .catch(oErr => {
                dispatch({type: 'GET_PRODUCTS_FAIL', payload: oErr.message});
            });
    }, []);

    let products = <p>Product are Loading ...</p>;

    if (context.error) {
        products = <p>Something went wrong: <span>{context.error}</span></p>
    }

    const changeProductSize = (e) => {
        const {skus} = context.products[0];
        const filteredSku = skus.filter((sku) => {
           let attrs = sku.attrs;
           return attrs.Size === e.target.value && attrs.Color === product.attrs.Color;
        });
        if (filteredSku.length !== 0) {
            setProduct(filteredSku[0]);
        } else {
            // todo show warning
        }
    };

    const changeProductColor = (e) => {
        const {skus} = context.products[0];
        const filteredSku = skus.filter((sku) => {
            let attrs = sku.attrs;
            return attrs.Color === e.target.value && attrs.Size === product.attrs.Size;
        });
        if (filteredSku.length !== 0) {
            setProduct(filteredSku[0]);
        } else {
            // todo show warning
        }
    };

    if (!context.error && context.products.length !== 0 && !isEmpty(product)) {
            const {attrList} = context.products[0];
            return <StyledContent>
                        <Header>
                            Product Detail
                        </Header>
                        <ProductImage
                            src={`url(${product.images[0]})`}
                            description={product.desc}>
                        </ProductImage>
                        <StyledFilterSection>
                            <Text>{product.name}</Text>
                            <Select onChange={changeProductSize}>
                                <option value="" hidden>
                                    {product.attrs.Size}
                                </option>
                                {attrList.Size.map((size,index) => <option key={index} value={size}>{size}</option>)}
                            </Select>
                            <Select onChange={changeProductColor}>
                                <option value="" hidden>
                                    {product.attrs.Color}
                                </option>
                                {attrList.Color.map((color,index) => <option key={index} value={color}>{color}</option>)}
                            </Select>
                            <Button accept='true' disabled={!product.orderable}>
                                {
                                    product.orderable ? 'Accept' : 'Selection is not available'
                                }
                            </Button>
                        </StyledFilterSection>
                    </StyledContent>
    }

    return (
        products
    );

}

const ProductWithRouter = withRouter(Product);
export default  ProductWithRouter;

