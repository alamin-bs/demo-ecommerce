import React from "react";
import { Form, Input, Button, Modal, message, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "../services/authService";
interface Props {
  modalVisible: boolean;
  handleCancel: () => void;
}
interface values {
  username: string;
  password: string;
}
function LoginForm({ modalVisible, handleCancel }: Props) {
  async function onFinish({ username, password }: values) {
    try {
      await login(username, password);

      handleCancel();
      window.location.href = "/";
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        message.error("Invalid Username or Password");
      }
    }
  }
  return (
    <Modal
      title="Login Form"
      centered
      closable
      visible={modalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Row justify="center">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Modal>
  );
}

export default LoginForm;
