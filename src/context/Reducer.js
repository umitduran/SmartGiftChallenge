const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MERCHANT_CODE':
            return {
                ...state,
                merchantCode: action.payload
            };

        case 'SET_PRODUCT_CODE':
            return {
                ...state,
                productCode: action.payload
            };

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };

        case 'GET_PRODUCTS_FAIL':
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default Reducer;
