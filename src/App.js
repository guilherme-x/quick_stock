import './App.css';
import Login from './login';
import Cadastro from './products/cadastro';
import ProductRoutes from './products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="products/*" element={<ProductRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
