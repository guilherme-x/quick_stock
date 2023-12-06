import { ConfigProvider, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterRoutes from './cadastros';
import Login from './login';
import ProductRoutes from './products';
function App() {
  return (
    <div className='App'>
      <ConfigProvider theme={{
        "token": {
          "colorPrimary": "#0d1532",
          "colorInfo": "#0d1532",
          "colorSuccess": "#27d8a1",
          "wireframe": false
        },
        "algorithm": theme.darkAlgorithm,
      }}>
        <BrowserRouter basename='/quick_stock'>
          <Routes >
            <Route index element={<Login />} />
            <Route path="/products" element={<ProductRoutes />} />
            <Route path="/cadastros/*" element={<RegisterRoutes />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
