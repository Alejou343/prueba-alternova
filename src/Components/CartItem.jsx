import React from 'react';

const CartItem = ({ item }) => {

  return (
    <div className="ShoppingCart-tablecontent flex justify-between my-2 text-xs">
      <span className="w-16 text-center"> {item.name} </span>
      <span className="w-16 text-center"> {item.quantity} </span>
      <span className="w-16 text-center"> $ {item.price} </span>
      <span className="w-16 text-center"> $ {item.quantity * item.price} </span>
    </div>
  )
};

export default CartItem;