import {ShopContextState, INITIAL_STATE, ProductFilterSection, CartItem} from './ShopContext';
import {Product} from "@/models/Product";


type ShopContextAction =
    | { type: 'setQuery'; payload: string }
    | { type: 'setSection'; payload: ProductFilterSection }
    | { type: 'addToCart'; payload: Product }
    | { type: 'removeFromCart'; payload: CartItem }
    | { type: 'setCartItemQuantity'; payload: CartItem }
    | { type: 'cleanCart' }
    | { type: 'cleanFilter' }
export const ShopReducer = (state: ShopContextState, action: ShopContextAction): ShopContextState => {
    let i = -1;
    let item = undefined
    let cart:CartItem[] = []
    switch (action.type) {
        case 'setQuery':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    query: action.payload
                },
            };

        case 'setSection':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    section: action.payload
                },
            };
        case 'addToCart':
            return {
                ...state,
                cart: state.cart.concat({product: action.payload, quantity: 1}),
            };

        case 'removeFromCart':
             i = state.cart.indexOf(action.payload)
             cart = [...state.cart]
            if (i + 1 > 0) {
                cart.splice(i, 1)
            }
            return {
                ...state,
                cart
            };

        case 'setCartItemQuantity':
            cart = [...state.cart]
             cart.find((x, index)=>{
                 if(x.product.id === action.payload.product.id){
                     i = index
                     return true
                 }
                 return false
                })
                if (i + 1 > 0) {
                    cart[i].quantity = action.payload.quantity
                }
            return {
                ...state,
                cart
            };

        case 'cleanCart':
            return {
                ...state,
                cart: INITIAL_STATE.cart,
            };

        case 'cleanFilter':
            return {
                ...state,
                filter: INITIAL_STATE.filter,
            };

        default:
            return state;
    }
};
