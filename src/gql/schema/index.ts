export const typeDefs = `#graphql

    type product{
    id:ID!,
    name:String,
    image:String,
    descriptions:String,
    price:Float,
    Quantity:Int,
    onStock:Boolean,
    categoryId:ID

    }

    type Query {
        products:[product]
        product(productId:ID!):product
    }
    `;
