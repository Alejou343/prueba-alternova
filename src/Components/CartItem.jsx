import React from 'react';

const CartItem = ({ item }) => {

  return (
    <div className="ShoppingCart-tablecontent flex justify-between my-2 text-xs">
        <span>{item.name}</span>
        <span>{item.quantity}</span>
        <span>$ {item.price}</span>
        <span>$ {item.price * item.quantity}</span>
    </div>
  )
}

export default CartItem;