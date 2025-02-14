import React from 'react';
import { Layout } from 'antd';
import TaskList from "../components/TaskList.tsx";

const { Content } = Layout;

const MainLayout: React.FC = () => {

  return (
    <Layout style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f0f2f5"
    }}>
      <Content style={{
        width: "100%",
        maxWidth: "500px",
        backgroundColor: "#fff",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <TaskList />
      </Content>
    </Layout>
  )
}

export default MainLayout