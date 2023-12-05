
import { Card, Input, Button } from 'antd'
const Login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="Login">
                <div>
                    <Input placeholder='e-mail' />
                    <Input placeholder='senha' />
                    <Button type='primary'>Login</Button>
                </div>
            </Card>
        </div>
    )
}

export default Login