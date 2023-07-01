import React from 'react';
import initialProducts from '../Products/initialProducts.js';

const useInitialState = () => {
    const [state, setState] = React.useState(initialProducts);
    const [mode, setMode] = React.useState(false);

    const addToCart = (payload) => {
        state.products[payload.id - 1]['stock'] = state.products[payload.id - 1]['stock'] - payload.quantity
        setState({
            ...state,
            products: [...state.products],
            cart: [...state.cart, payload]
        });
    };

    const reload = () => {
        setState({
            ...state, 
            cart: []
        })
    };

    return {
        state,
        mode, 
        reload,
        addToCart,
        setMode
    }
};

export default useInitialState;