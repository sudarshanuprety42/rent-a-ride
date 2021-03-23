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

export default function Register() {
  const history = useHistory();

  const onFinish = (values) => {
    Cookies.set("email", values.email);
    Cookies.set("loggedin", true);
    message.success("Registration successfull, Welcome!");
    history.push("/");
  };

  return (
    <div className="cont">
      <Navbar />
      <div className="register-container">
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
          <h1 style={{ textAlign: "center" }}>Register</h1>

          <br />
          <Form.Item
            label="Name"
            name="name"
            size="large"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

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
                message: "Invalid email",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("two passwords you entered do not match!")
                  );
                },
              }),
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
              Do you have Account ? <a href="/">Login</a>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
