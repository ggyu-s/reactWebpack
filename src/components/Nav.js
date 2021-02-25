import React, { useCallback } from "react";
import { Menu, Layout } from "antd";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const Nav = () => {
  const history = useHistory();

  const movePage = useCallback((path) => {
    history.push(path);
  });

  return (
    <>
      <Layout className="layout">
        <Header style={{ background: "white", display: "flex" }}>
          <div
            className="logo"
            style={{ marginRight: "auto", cursor: "pointer" }}
            onClick={() => movePage("/")}
          >
            LOGO
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" onClick={() => movePage("/")}>
              Home
            </Menu.Item>
            <Menu.Item key="2" onClick={() => movePage("/login")}>
              login
            </Menu.Item>
            <Menu.Item key="3" onClick={() => movePage("/join")}>
              join
            </Menu.Item>
            <Menu.Item key="4" onClick={() => movePage("/profile")}>
              profile
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default Nav;
