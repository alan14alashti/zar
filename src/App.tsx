import React from 'react';
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import MainLayout from './layout/MainLayout';

const theme = {
  token: {
    colorPrimary: "#1D9670",      
    borderRadius: 8,             
    fontFamily: "Inter, sans-serif",
    colorLink: "#13c2c2",        
    colorBgContainer: "#FCFCFD",
  },
  components: {
    Button: {
      colorPrimary: "#1D9670",
      borderRadius: 8,
    },
    Card: {
      borderRadius: 16,
    },
  },
};

const App: React.FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <MainLayout/>
    </ConfigProvider>
  );
};

export default App;