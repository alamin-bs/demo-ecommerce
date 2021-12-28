import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import RootState from "./interfaces/RootState";
import { useEffect, useState } from "react";
import { getAllProduct } from "./services/productService";
import configStore from "./store/configureStore";
import productModel from "./interfaces/product";
import { productAdded } from "./store/product";

function App() {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.entities.products.productList
  );

  useEffect(() => {
    async function getAllProducts() {
      const data = await getAllProduct();
      dispatch(productAdded(data));
    }
    getAllProducts();
  }, []);
  // store.subscribe(() => {
  //   console.log("subscribe : ", store.getState());
  //   setProductList(store.getState().entities.products);
  // });
  return (
    <div>
      <Navbar />
      <Row>
        {productList?.map((item, index) => (
          <Col span={6} key={index} order={index}>
            <Product
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
