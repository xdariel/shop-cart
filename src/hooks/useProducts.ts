import React from "react";
import {Product} from "@/models/Product";
import {products} from "@/dummy/ProductsData";




type UseProductHook = {
    fetchProducts: () => Promise<Array<Product>>,
}

const useProduct = (): UseProductHook => {

    const fetchProducts = React.useCallback((): Promise<Array<Product>> => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(products)
            }, 1000)
        });
    }, []);

    return {
        fetchProducts
    }
};

export default useProduct