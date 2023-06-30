import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';

const Header = () => {

  const { state } = React.useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Home">
        <div className="Header fixed flex justify-center  bg-cyan-500 px-3 h-20 rounded-b-lg items-center w-full top-0 mt-0">
            <h1 className="text-xl font-bold text-white">Alternova Shop</h1>
            {cart.length > 0 ? 
            <Link to="/shopping-cart">
                <div className="flex text-md absolute top-7 right-10 w-6 cursor-pointer">
                    <ShoppingCartIcon />
                </div>
            </Link> : null}
                {cart.length > 0 ? 
                <span className="absolute top-4 right-6 bg-white h-4 w-4 rounded-full flex justify-center items-center text-xs font-bold"> {cart.length}</span>
              : null }
        </div>
        <ProductList />
    </div>
  )
}

export default Header;