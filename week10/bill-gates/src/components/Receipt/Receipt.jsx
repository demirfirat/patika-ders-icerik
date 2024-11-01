import './receipt.css';
import React from 'react';

const Receipt = ({ products }) => {

    const purchasedProducts = products.filter(product => product.quantity > 0);

    const totalAmount = purchasedProducts.reduce((total, product) => {
        return total + product.quantity * product.price;
    }, 0);
    if(purchasedProducts.length === 0){
        return null;
    }

    return (
        <div className='receipt'>
            <h2>Your Receipt</h2>
            <ul>
                {purchasedProducts.map((product) => (
                    <li key={product.id} className='receipt-container'>
                        <div className='receipt-items'>
                            <span>{product.name}</span>
                            <span>x{product.quantity}</span>
                            <span style={{color: "#25C585"}}>
                                ${product.price.toLocaleString("en-US")}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <h3 style={{color: "#25C585"}}>TOTAL ${totalAmount.toLocaleString("en-US")}</h3>
        </div>
    );
};

export default Receipt;