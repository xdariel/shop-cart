import React, {useContext, useReducer} from 'react';
import {ShopContext, INITIAL_STATE, ProductFilterSection, ShopContextState, CartItem} from './ShopContext';
import {ShopReducer} from './ShopReducer';
import {Product} from "@/models/Product";

interface ShopProviderProps {
    children: React.ReactNode | Array<React.ReactNode>;
}

const ShopProvider: React.FC<ShopProviderProps> = ({children}) => {
    const [{cart, filter,}, dispatch] = useReducer(ShopReducer, INITIAL_STATE);

    const setQuery = (payload: string) => {
        dispatch({type: 'setQuery', payload});
    };
    const setSection = (payload: ProductFilterSection) => {
        dispatch({type: 'setSection', payload});
    };

    const addToCart = (payload: Product) => {
        dispatch({type: 'addToCart', payload});
    };

    const removeFromCart = (payload: CartItem) => {
        dispatch({type: 'removeFromCart', payload});
    };

    const setCartItemQuantity = (payload: CartItem) => {
        dispatch({type: 'setCartItemQuantity', payload});
    };
    const cleanCart = () => {
        dispatch({type: 'cleanCart'});
    }

    const cleanFilter = () => {
        dispatch({type: 'cleanFilter'});
    }


    return (
        <ShopContext.Provider
            value={{
                filter,
                cart,
                setQuery,
                setSection,
                addToCart,
                removeFromCart,
                setCartItemQuantity,
                cleanCart,
                cleanFilter
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = (): ShopContextState => {
    return useContext(ShopContext)!;
};

export default ShopProvider;
