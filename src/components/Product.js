import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { withRouter, useHistory } from 'react-router-dom';
import {Context} from "../context/Store";
import API from '../api';
import {isEmpty} from 'lodash';
import Button from "./subcomponents/Button";
import ProductImage from "./subcomponents/ProductImage";
import Text from './subcomponents/Text';
import Select from "./subcomponents/Select";
import Header from "./subcomponents/Header";
import Modal from './subcomponents/Modal';
import {CloseOutline} from '@styled-icons/evaicons-outline';

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


const Product = (props) => {
    const history = useHistory();
    const [context, dispatch] = useContext(Context);
    const [product,setProduct] = useState({});
    const [showSKUCode,setShowSKUCode] = useState(false);

    let {productCode,merchantCode} = (props.location && props.location.state) || {};
    let products = <p>Product are Loading ...</p>;

    useEffect(() => {
        if (!productCode || !merchantCode) {
            history.push({
                pathname: '/',
            });
        } else {
            API.get(`apps/products?merchantCode=${merchantCode}&codes[]=${productCode}`)
                .then(oResp => {
                   dispatch({type: 'GET_PRODUCTS', payload: oResp.data.data});              // set global state
                    setProduct(oResp.data.data[0].selectedSku);                             //set Locale state
                })
                .catch(oErr => {
                    dispatch({type: 'GET_PRODUCTS_FAIL', payload: oErr.message});
                });
        }
    }, []);


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
                        <Select  value={product.attrs.Size} onChange={changeProductSize}>
                            {attrList.Size.map((size,index) => <option key={index} value={size}>{size}</option>)}
                        </Select>
                        <Select value={product.attrs.Color} onChange={changeProductColor}>
                            {attrList.Color.map((color,index) => <option key={index} value={color}>{color}</option>)}
                        </Select>
                        <Button accept='true' disabled={!product.orderable} onClick={() => setShowSKUCode(!showSKUCode)}>
                            {
                                product.orderable ? 'Accept' : 'Selection is not available'
                            }
                        </Button>
                    </StyledFilterSection>

                    <Modal show={showSKUCode}>
                        <Modal.Button onClick={() => setShowSKUCode(!showSKUCode)}>
                            <CloseOutline/>
                        </Modal.Button>
                        <Modal.Header>
                            Selected SKU Code
                        </Modal.Header>
                        <Modal.Text>
                            {product.sku}
                        </Modal.Text>
                    </Modal>

                </StyledContent>
    }

    return (
        products
    );

}

const ProductWithRouter = withRouter(Product);
export default  ProductWithRouter;

