import React, { useState } from "react";
import { Card, Row, Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import LoginForm from "./LoginForm";
import { cartAdded } from "../store/product";

import { useDispatch } from "react-redux";

interface Props {
  title: string;
  image: string;
  description: string;
}
function Product({ title, image, description }: Props) {
  const [enable, setEnable] = useState(false);
  const dispatch = useDispatch();
  function handleAddToCart() {
    if (!localStorage.getItem("token")) {
      message.info("Log in required");
      setEnable(true);
      return;
    }
    dispatch(cartAdded());
  }
  function handleCancel() {
    setEnable(false);
  }
  return (
    <Card
      hoverable
      style={{ margin: "10px" }}
      cover={<img className="responsive_img" alt="example" src={image} />}
    >
      <Card.Meta title={title} description={description} />
      <Row align="middle" justify="center">
        <Button
          type="primary"
          style={{ margin: "15px" }}
          icon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </Row>
      <LoginForm modalVisible={enable} handleCancel={handleCancel} />
    </Card>
  );
}

export default Product;
