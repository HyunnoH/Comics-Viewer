import React, { ReactNode } from "react";
import { Layout } from "antd";
import ContentWrapper from "./content-wrapper";

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
      <Sider collapsed>{siderChildren}</Sider>
      <Layout>
        <Content>
          <ContentWrapper>{children}</ContentWrapper>
        </Content>
      </Layout>
    </Layout>
  );
}
