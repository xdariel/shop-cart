import {createContext} from "react"
import {Product, ProductSection} from "@/models/Product";
import {defaultCart} from "@/dummy/CheckoutData";

export type ProductFilterSection = ProductSection | "all"

export type ProductFilter = {
    query: string
    section: ProductFilterSection
}

export type CartItem = {
    product: Product,
    quantity: number
}

export type ShopContextState = {
    filter: ProductFilter
    cart: CartItem[]
    setQuery: (value: string) => void
    setSection: (value: ProductFilterSection) => void
    addToCart: (value: Product) => void
    removeFromCart: (value: CartItem) => void
    setCartItemQuantity: (value: CartItem)=>void
    cleanCart: () => void
    cleanFilter: () => void
}

export const INITIAL_STATE: ShopContextState = {
    filter: {
        section: "all",
        query: ""
    },
    cart: defaultCart
} as ShopContextState

export const ShopContext = createContext<ShopContextState>(INITIAL_STATE)