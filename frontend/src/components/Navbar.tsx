import React, { useEffect, useState } from "react";
import { Badge, Menu } from "antd";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import RootState from "../interfaces/RootState";
import {
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function Navbar() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleCancel = () => setModalVisible(false);
  const cart = useSelector((state: RootState) => state.entities.products.cart);

  useEffect(() => {}, []);
  return (
    <Menu mode="horizontal">
      <Menu.Item key="phone" icon={<PhoneOutlined />}>
        01914982613
      </Menu.Item>
      <Menu.Item key="mail" icon={<MailOutlined />}>
        alamin@brainstation-23.com
      </Menu.Item>

      <Menu.Item className="login">
        <Badge count={cart}>
          <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        </Badge>
      </Menu.Item>
      {!localStorage.getItem("token") && (
        <Menu.Item
          onClick={() => {
            setModalVisible(true);
          }}
          icon={<UserOutlined />}
        >
          Login
        </Menu.Item>
      )}

      {localStorage.getItem("token") && (
        <Menu.Item
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          icon={<UserOutlined />}
        >
          Logout
        </Menu.Item>
      )}

      <LoginForm modalVisible={modalVisible} handleCancel={handleCancel} />
    </Menu>
  );
}

export default Navbar;
