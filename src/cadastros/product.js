import { Form, Input, Button } from "antd"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
const Product = () => {
    const { id } = useParams()
    const getProduct = async () => {
        if (!id) return
        const { data: resProduct } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setFormValues({
            title: resProduct.title,
            description: resProduct.description,
            price: resProduct.price,
            category: resProduct.category,
            image: resProduct.image,
        })
    }
    useEffect(() => {
        getProduct()
    }, [])
    const productTemplate = {
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
    }
    const [formValues, setFormValues] = useState(productTemplate)

    const handleInputChange = (e, field) => {
        setFormValues({ ...formValues, [field]: e.target.value })
    }

    const handleSubmit = () => {
        // Handle form submission
    }

    return (
        <Form className="Form" onSubmit={handleSubmit}>
            <img width={150} style={{borderRadius: 10}} src={formValues.image} alt="product" />
            {Object.keys(formValues).map((field) => (
                <Form.Item key={field}>
                    <Input
                        placeholder={labels[field]}
                        value={formValues[field]}
                        onChange={(e) => handleInputChange(e, field)}
                    />
                </Form.Item>
            ))}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {!id ? "Cadastrar" : "Atualizar"}
                </Button>
            </Form.Item>
        </Form>
    )
}

const labels = {
    title: "Nome",
    description: "Descrição",
    price: "Preço",
    category: "Categoria",
}

export default Product
