import { Routes, Route } from 'react-router-dom';
import ProductList from './lista';
import Cadastro from './cadastro';

const ProductRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="cadastro" element={<Cadastro />} />
        </Routes>
    )
}
export default ProductRoutes;