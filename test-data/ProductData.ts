export type Product = {
    id: number
    ,isNewArrival: boolean
    ,name: string
    ,category: string
    ,price: string
    ,availability: string
    ,condition: string
    ,brand: string
}

export class ProductData {
    products: Record<string, Product> = {
        a: {
            id: 1
            ,isNewArrival: true
            ,name: 'Blue Top'
            ,category: 'Category: Women > Tops'
            ,price: 'Rs. 500'
            ,availability: 'Availability: In Stock'
            ,condition: 'Condition: New'
            ,brand: 'Brand: Polo'
        }
    }
}
