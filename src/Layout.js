import React, { useState } from "react";
import { PeopleAltOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import Icon from "./assets/logo.png";
import {
    PieChartOutlined,
    DoubleRightOutlined,
    DoubleLeftOutlined,
    PlusOutlined,
    AppstoreAddOutlined,
    UserAddOutlined, ShoppingOutlined
} from "@ant-design/icons";


const getItems = (isExpanded) => [
    {
        label: null,
        key: "0",
        icon: <img alt="icon" height={40} src={Icon} />,
        disabled: true,
        style: {
            cursor: "default",
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            paddingInline: 0,
            marginInline: 0,
            alignItems: "center",
            justifyContent: "center",
        },
    },
    {
        label: "Produtos",
        key: "products",
        icon: <ShoppingOutlined />,
    },
    {
        label: "Clientes",
        key: "customers",
        icon: <PeopleAltOutlined />
    },
    {
        label: "Cadastros",
        key: "cadastros",
        icon: <PlusOutlined />,
        type: "item",
        children: [
            {
                label: "Novo produto",
                key: "product",
                icon: <AppstoreAddOutlined />,
                type: "item",
            },
            {
                label: "Novo cliente",
                key: "customer",
                icon: <UserAddOutlined />,
                type: "item",
            },
        ]
    },
    {
        label: !isExpanded ? "Expandir" : "Retrair",
        key: "expand",
        icon: !isExpanded ? <DoubleRightOutlined /> : <DoubleLeftOutlined />,
        style: {
            cursor: "pointer",
            position: "absolute",
            bottom: 20,
        },
    }

]

const Layout = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleClick = (key) => {
        if (key[0] !== 'expand') {
            navigate(`/${key.reverse().join("/")}`);
        } else {
            setIsExpanded(!isExpanded);
        }

    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                overflow: 'hidden',
            }}
        >
            <Menu
                style={{
                    minHeight: "100%",
                    position: "fixed",
                    maxWidth: "20%",
                    height: "100%",
                    zIndex: 1,
                    backgroundColor: "#0d1532",
                    paddingTop: 20,
                    boxShadow: "-2px 2px 7px 1px #0d1532",
                }}
                selectedKeys={[pathname.slice(1)]}
                mode="inline"
                theme={"dark"}
                inlineCollapsed={!isExpanded}
                items={getItems(isExpanded)}
                onClick={({ keyPath }) => handleClick(keyPath)}
            ></Menu>
            <div onClick={() => setIsExpanded(false)} style={{ width: isExpanded ? '80%' : '100%', marginLeft: isExpanded ? "20%" : 80, transition: "all 0.1s ease-in-out", }}>
                <div style={{ marginTop: 30 }}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
