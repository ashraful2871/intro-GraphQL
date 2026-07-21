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

    type category {
    id:ID!,
    name: String
    }

    type Query {
        products:[product]
        product(productId:ID!):product
        categories:[category]
        category(categoryId:ID!):category
    }
    `;
