import { Card, Input, Button } from "antd"
import './styles.css';
const Login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card className='contaner'>

                <Card className='texto' title="Bem Vindo!" />
                <div>
                    <Input className='email' placeholder='E-mail' />
                    <Input className='pin' placeholder='senha' />
                    <Button className='btn-login' type='primary'>Login</Button>
                </div>



            </Card>

        </div>
    )
}



export default Login 