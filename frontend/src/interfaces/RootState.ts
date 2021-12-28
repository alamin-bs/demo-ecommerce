import productModel from "./product";
export default interface RootState {
  entities: {
    products: {
      cart: number;
      productList: productModel[];
    };
  };
}
