import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './style.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get('https://fakestoreapi.com/products/');
        setProducts(data);
    };

    const handleDelete = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="list">
            <h1 className='header'>Produtos</h1>
            <div className='content'>
                {products.map((product, index) => (
                    <Card className='product-card' key={index} title={product.title}>
                        <div className='image'>
                            {!!product.image && <img alt='product' src={product.image} />}
                        </div>
                        <div className='info'>
                            <p><b>Categoria: </b>{product.category}</p>
                            <p><b>Preço:</b> {product.price}</p>
                            <p><b>Descrição:</b> {product.description}</p>
                        </div>
                        <div className='actions'>
                            <Button onClick={() => navigate(`/cadastros/product/${product.id}`)} type='primary' icon={<EditOutlined />} style={{ marginBottom: 8 }}>
                                Editar
                            </Button>
                            <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(index)}>
                                Excluir
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
