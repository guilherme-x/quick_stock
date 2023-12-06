import { Button, message } from "antd";
import { Paper, TextField, Backdrop, CircularProgress } from '@mui/material';
import { useState } from "react";
import Icon from "../assets/logo.png";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import "./styles.css";
import { login } from "./auth";
const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const onError = () => { messageApi.error("Usuário  e/ou senha incorreto(s)") }
    const handleLogin = () => {
        login(email, password, onError, setLoading);
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
                        type={passwordVisible ? 'text' : 'password'}
                        className='input'
                        label='Senha'
                        variant='standard'
                        InputProps={{
                            endAdornment: (
                                <div
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {passwordVisible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )}
                                </div>
                            ),
                        }}
                    />
                </div>
                <Button onClick={handleLogin} className='btn-submit' variant='contained' >Entrar</Button>
            </Paper>
            <Backdrop
                sx={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
            {contextHolder}
        </div>
    );
};

export default Login;
