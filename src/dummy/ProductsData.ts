import {Product} from "@/models/Product";

export const products: Array<Product> = [
    {
        id: 0,
        name: "My Christmas pack",
        price: 71.20,
        section: "packaging",
        description: [
            {
                text: "Cardboard box",
                tags: ["container"]
            },
            {
                text: "Unisex Short Sleeve T-Shirt",
                tags: ["Green", "Small"]
            },
            {
                text: "Basic bottle",
                tags: ["Blue"]
            }
        ],
        image: "https://dummyimage.com/200x200/E6E8E9/a2a"
    },
    {
        id:1,
        name: "Basic T-Shirt",
        price: 13.5,
        section: "backpacks",
        image: "https://dummyimage.com/200x200/E6E8E9/aa1"
    },
    {
        id:2,
        name: "Woman bottle",
        price: 36.5,
        section: "drinkware",
        image: "https://dummyimage.com/200x200/E6E8E9/aa2"
    },
    {
        id:3,
        name: "Unisex Short Sleeve T-Shirt",
        price: 12.5,
        section: "apparel",
        image: "https://dummyimage.com/200x200/E6E8E9/a2f"
    },
    {
        id:4,
        name: "Unisex Short Sleeve T-Shirt",
        price: 25,
        section: "packaging",
        image: "https://dummyimage.com/200x200/E6E8E9/fca"
    }
]
