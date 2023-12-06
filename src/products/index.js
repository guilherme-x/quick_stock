import React from 'react';
import {Table} from "antd";
import { useState } from "react";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
function ProductList() {
    const [dataSource, setDataSource] = useState([
{
    product_name:"Tênis de corrida",
    branch:"Nike",
    purchase_price:"R$200,00",
    sale_price:"R$300,00",
    barcode:"789456123"
},
{
    product_name: "Camiseta",
    branch: "Adidas",
    purchase_price: "R$ 50,00",
    sale_price: "R$ 100,00",
    barcode: "456123789"
},
{
    product_name: "Calça jeans",
    branch: "Levi's",
    purchase_price:"R$ 150,00",
    sale_price:"R$ 250,00",
    barcode: "123789456"
},
{
    product_name: "Relógio",
    branch: "Casio",
    purchase_price: "R$ 100,00",
    sale_price: "R$ 200,00",
    barcode: "789123456"
},
{
    product_name: "Óculos de sol",
    branch: "Ray-Ban",
    purchase_price: "R$ 250,00",
    sale_price: "R$ 350,00",
    barcode: "456789123"
    }



    ])

    const columns=[
        {

            key:'1',
            title: 'Product_name',
            dataIndex:'product_name'
        },
        {
            key:'2',
            title: 'Branch',
            dataIndex: 'branch'
        },
        {
            key:'3',
            title:'Purchase_price',
            dataIndex:'purchase_price'
        },
        {
            key:'4',
            title:'Sale_price',
            dataIndex:'sale-price'
        },
        {
            key:'5',
            title:'Barcode',
            dataIndex:'barcode'
        },
        {
            key:'6',
            title:'Ações',
            render: (record) => {
                return (
                   <>
               <EditOutlined />
               <DeleteOutlined onClick style={{ color: "red", marginLeft: 12 }}/>

                </>
                );
            },
              
         },
    ];
    


    return(
        <div className="App">
        <header className="App-header">
          <Table
          columns={columns} dataSource={dataSource}></Table>
        </header>
        </div>
    )
    
    

}
export default ProductList
