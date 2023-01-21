
export type ProductSection ="packaging" | "drinkware" | "apparel" | "notebooks" | "backpacks"

export type ProductDescription = {
    text: string
    tags? :string[]
}
export type Product = {
    id: number
    name: string
    description?: ProductDescription[]
    price: number,
    images?:string[]
    section: ProductSection
}