import React from 'react';
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import MainLayout from './layout/MainLayout';

const theme = {
  token: {
    colorPrimary: "#1D9670",      // Primary color (Purple)
    borderRadius: 8,             // Border radius for rounded corners
    fontFamily: "Inter, sans-serif",
    colorLink: "#13c2c2",        // Link color
    colorBgContainer: "#FCFCFD", // Background color for containers
  },
  components: {
    Button: {
      colorPrimary: "#722ed1",
      borderRadius: 20,
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