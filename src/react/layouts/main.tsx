import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Content, Sider } = Layout;

interface MainLayoutProps {
  children: ReactNode;
  siderChildren: ReactNode;
}

export default function MainLayout({
  children,
  siderChildren,
}: MainLayoutProps) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsed
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          paddingTop: 16,
        }}
      >
        {siderChildren}
      </Sider>
      <Layout>
        <Content
          style={{
            marginLeft: 80,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
