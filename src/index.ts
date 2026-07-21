import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./db.js";

const typeDefs = `#graphql

    type product{
    id:ID,
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
    }
    `;

const resolvers = {
  Query: {
    products: () => db.products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
