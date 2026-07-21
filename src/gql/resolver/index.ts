import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (
      parent: any,
      { productId }: { productId: string },
      context: any,
    ) => {
      const result = db.products.find((pd) => pd.id === productId);
      return result;
    },
    categories: () => db.categories,
    category: (
      parent: any,
      { categoryId }: { categoryId: string },
      context: any,
    ) => {
      const result = db.categories.find((ct) => ct.id === categoryId);
      return result;
    },
  },
  Product: {
    category: (
      { categoryId }: { categoryId: string },
      args: any,
      context: any,
    ) => {
      //   console.log(parent.categoryId, args, context);
      return db.categories.find((category) => category.id === categoryId);
    },
    reviews: ({ id }: { id: string }, args: any, context: any) => {
      //   console.log(parent);

      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }: { id: string }, args: any, context: any) => {
      //   console.log(id);
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
