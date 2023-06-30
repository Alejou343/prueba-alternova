import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import AppContext from '../Context/AppContext';
import CartItem from './CartItem';

const ShoppingCart = () => {

    const { state } = React.useContext(AppContext);
    const { cart } = state;

    const calculateFinalPrice = () => {
        const arr = []
        cart.forEach(x => arr.push(x.price * x.quantity)) 
        return arr.reduce((a,b) => a+b)
    }

  return (
    <div className="ShoppingCart grid w-full border-2 px-5 rounded-b-lg relative">
        <h1 className="mx-auto mt-5 alternova-bg w-full justify-center rounded-lg h-10 items-center flex font-bold text-white">Shopping Cart</h1>
        <div className="ShoppingCart-tableheader flex justify-between my-5 font-bold">
            <span>Product</span>
            <span>Quantity</span>
            <span>$ / Unity</span>
            <span>$ Total </span>
        </div>
        {cart?.map(item => <CartItem key={item.id} item={item} />)}
        <div className="ShoppingCart-footer flex justify-between mt-10 mb-5">
            <h1 className="flex items-center"> 
                Total Price: &nbsp; 
                <b> 
                    $ {calculateFinalPrice()}
                </b>
            </h1>
            <Link to="/success">
                <button className="bg-green-400 p-2 rounded-lg font-bold text-white"> Create Order </button>
            </Link>
        </div>
        <Link to="/">
            <div className="ShoppingCart-icon w-5 h-5 absolute top-8 left-8 text-white">
                <ArrowLeftIcon />    
            </div>
        </Link> 
    </div>
  )
}

export default ShoppingCart;