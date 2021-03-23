import React from "react";
import { Avatar } from "antd";
import Cookies from "js-cookie";
import { UserOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import { Card } from "antd";
import { Button } from "antd";
import { useHistory } from "react-router";

export default function Profile() {
  const history = useHistory();

  const logout = () => {
    Cookies.remove("email");
    Cookies.remove("loggedin");
    history.push("/login");
  };

  return (
    <div>
      <Navbar active="profile" />
      <div class="center-container">
        <Card
          title="Profile"
          bordered={false}
          style={{ width: 300 }}
          bordered={true}
        >
          <Avatar size="large" icon={<UserOutlined />} />
          <span>{Cookies.get("email")}</span>
          <br />
          <br />
          <Button block onClick={logout}>
            Logout
          </Button>
        </Card>
      </div>
    </div>
  );
}
