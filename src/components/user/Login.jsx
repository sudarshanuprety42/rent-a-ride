import React from "react";
import { Form, Input, Button, message } from "antd";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import Navbar from "../Navbar";
import LogoImg from "../../images/logo.png";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 18,
    span: 6,
  },
};

export default function Login() {
  const history = useHistory();

  const onFinish = (values) => {
    //authenticate email and password
    Cookies.set("email", values.email);
    Cookies.set("loggedin", true);
    message.success("Logged in successfully, Welcome!");
    history.push("/");
  };

  return (
    <div className="cont">
      <Navbar />
      <div className="login-container">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div style={{ textAlign: "center" }}>
            <img src={LogoImg} alt="Logo" width={"80px"} />
          </div>
          <h1 style={{ textAlign: "center" }}>Login</h1>

          <br />
          <Form.Item
            label="Email"
            name="email"
            size="large"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Invalid email"
              }
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <div className="form-question">
            <Form.Item>
              Don't you have Account ? <a href="/register">Register Now!</a>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
