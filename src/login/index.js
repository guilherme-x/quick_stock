import { Button } from "antd";
import { Paper, TextField, Backdrop, CircularProgress } from '@mui/material';
import { useState } from "react";
import Icon from "../assets/logo.png";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import "./styles.css";
import { login } from "./auth";
const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleLogin = () => {
        login(email, password, setError, setLoading);
    };
    return (
        <div className='backdrop'>
            <Paper className='container-login' elevation={8}>
                <img alt='icon' className='icon' src={Icon} />
                <div className='login-form'>
                    <TextField
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        onChange={(e) => setEmail(e.target.value)}
                        className='input'
                        label='E-mail'
                        variant='standard'
                    />
                    <TextField
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        className='input'
                        label='Senha'
                        variant='standard'
                    />
                </div>
                <Button type='primary' onClick={handleLogin} className='btn-submit' variant='contained' >Entrar</Button>
            </Paper>
            <Backdrop
                sx={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
};

export default Login;
