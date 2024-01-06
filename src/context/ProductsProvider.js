import React, { createContext } from 'react';
import useFetchData from '../hooks/useFetchData';
export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const contextData = useFetchData();
    console.log(contextData);
    return (
        <ProductsContext.Provider value={contextData}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;