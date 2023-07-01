import React from 'react';

const Purchase = ({ product }) => {
    return (
        <div className="Success-item flex my-2 justify-between w-60 border-2 p-2 rounded-lg">
            <p className="font-bold flex items-center">{product.name}</p>
            <p className="font-bold text-xs flex items-center">x {product.quantity}</p>
            <img src={product.img} alt={product.name} className="w-16 h-16"/>
        </div>
    )
};

export default Purchase;