import { Routes, Route } from 'react-router-dom';
import ProductList from './lista';
import Layout from '../Layout';

const ProductRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ProductList />} />
            </Routes>
        </Layout>
    )
}
export default ProductRoutes;