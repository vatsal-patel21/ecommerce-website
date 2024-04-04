import React, { useState, useEffect, useContext } from 'react';
import { Table, Image } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'; 
import { CartContext } from './CartContext';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    const productToRemove = cart.find(item => item.id === productId);
    if (productToRemove) {
        if (productToRemove.quantity > 1) {
            // Decrease the quantity of the product
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            // Remove the product from the cart
            setCart(cart.filter(item => item.id !== productId));
        }
    }
};

  const columns = [
    {
      title: 'Product',
      dataIndex: 'title',
      render: (text, record) => (
        <div className='card-title'>
          <Image src={record.thumbnail} width={50} height={50} style={{ marginRight: '10px' }} />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (price) => <span>${price}</span>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      render: (total, record) => <span>${record.price * record.quantity}</span>,
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) => (
        <div>
          <DeleteOutlined style={{color: "#FF0000", fontSize: 20}} onClick={() => handleRemoveFromCart(record.id)}/>
        </div>
      ),
    },
  ];

  return (
    <Table
        dataSource={cart}
        columns={columns}
        rowKey="id"
        pagination={false}
        className="cart-table"
        summary={pageData => {
            const total = pageData.reduce((total, record) => total + record.price * record.quantity, 0);

            return (
                <Table.Summary.Row>
                    <Table.Summary.Cell index={0}></Table.Summary.Cell>
                    <Table.Summary.Cell colSpan={2} index={2}>Subtotal</Table.Summary.Cell>
                    <Table.Summary.Cell index={2}>${total.toFixed(2)}</Table.Summary.Cell>
                </Table.Summary.Row>
            );
        }}
    />
  )
}
