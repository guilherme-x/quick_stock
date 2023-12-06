import Layout from "../Layout"
import Product from "./product"
import { Routes, Route } from 'react-router-dom';
const RegisterRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="product" element={<Product />} />
                <Route path="product/:id" element={<Product />} />
            </Routes>
        </Layout>
    )
}
export default RegisterRoutes;