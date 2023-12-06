import { Form, Input, Button } from "antd"
import "./style.css"
const Cadastro = () => {
    return (
        <Form className="Form">
            <Form.Item>
                <Input placeholder="Nome do Produto"></Input>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Marca"></Input>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Preço de Custo"></Input>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Preço de Venda"></Input>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Categoria"></Input>
            </Form.Item>

            <Form.Item>
                <Input placeholder="Código de Barras"></Input>
            </Form.Item>

            <Form.Item>
                <Button placeholder="Cadastrar">Cadastrar</Button>
            </Form.Item>
        </Form>
    )
}
export default Cadastro