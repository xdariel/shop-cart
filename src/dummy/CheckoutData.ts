import {CartItem} from "@/context/ShopContext/ShopContext";
import {products} from "@/dummy/ProductsData";

export const defaultCart: Array<CartItem> = [
    {
        product: products.find(x=>x.id === 0) as any,
        quantity : 50
    },

    {
        product: products.find(x=>x.id === 1) as any,
        quantity : 10
    },

    {
        product: products.find(x=>x.id === 2) as any,
        quantity : 20
    }

]
