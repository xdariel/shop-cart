import {Product} from "@/models/Product";

export const products: Array<Product> = [
    {
        id: 0,
        name: "My Christmas pack",
        price: 71.20,
        section: "drinkware",
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
        ]
    },
    {
        id:1,
        name: "Basic T-Shirt",
        price: 13.5,
        section: "packaging"
    },
    {
        id:2,
        name: "Woman bottle",
        price: 36.5,
        section: "drinkware"
    },
    {
        id:3,
        name: "Unisex Short Sleeve T-Shirt",
        price: 12.5,
        section: "apparel"
    },
    {
        id:4,
        name: "Unisex Short Sleeve T-Shirt",
        price: 25,
        section: "packaging"
    }
]
