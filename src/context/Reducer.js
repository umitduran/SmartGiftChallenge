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

        default:
            return state;
    }
}

export default Reducer;
