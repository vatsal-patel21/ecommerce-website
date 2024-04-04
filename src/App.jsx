import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Input } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./container/mainPage/MainPage";
import Profile from "./container/profile/Profile";
import Cart from "./container/cart/Cart";
import './App.css'

const { Header, Sider, Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate();

  return (
    <div className="App">
      <Layout className="Layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="logo"
            />
            {!collapsed && <h1 className="appName">Shopify</h1>}
          </div>
          <Menu
            onClick={({ key }) => {
              if (key === "1") {
                navigate("/");
              } else if (key === "2") {
                navigate("/cart");
              } else if (key === "3") {
                navigate("/profile");
              }
            }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <ShoppingCartOutlined />,
                label: "Cart",
              },
              {
                key: "3",
                icon: <UserOutlined />,
                label: "Profile",
              },
            ]}
          />
        </Sider>
        <Layout className="Layout">
          <Header className="Header" style={{ background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="Button"
            />
            <Input.Search
              placeholder="Search..."
              onSearch={(value) => setSearchTerm(value)}
              style={{ marginLeft: "20%", width: "500px", marginTop: "20px" }}
            />
          </Header>
          <Content
            className="Content"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<MainPage searchTerm={searchTerm} />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default App
