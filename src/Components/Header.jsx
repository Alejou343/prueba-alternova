import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Lightmode from '../Assets/lighti.png';
import Darkmode from '../Assets/darki.png';
import AppContext from '../Context/AppContext';
import ProductList from './ProductList';
import Footer from './Footer';

const Header = () => {

  const { state, mode, setMode } = React.useContext(AppContext);
  const { cart } = state;

  return (
  <div className={mode ? "Home" : ""}>
    <div className="Header z-10 fixed flex justify-center alternova-border border-b-2 bg-white px-3 h-20 rounded-b-lg items-center w-full top-0 mt-0">
      <img className="w-56" src="https://www.alternova.co/wp-content/uploads/2021/03/cropped-logo-Alternova.png" alt="LogoAlternova.jpg" />
      {!mode && <img 
        className="flex absolute left-8 w-12 cursor-pointer" 
        src={Darkmode} 
        alt="Darkmode.png" 
        onClick={() => setMode(true)}
      />}
      {mode && <img 
        className="flex absolute left-8 w-12 cursor-pointer" 
        src={Lightmode} 
        alt="Lightmode.png" 
        onClick={() => setMode(false)}
      />}
      <h1 className="font-bold alternova-font text-xl ml-2">Shop</h1>
      {cart.length > 0 ? 
      <Link to="/shopping-cart">
        <div className="flex text-md absolute top-7 right-10 w-6 cursor-pointer">
          <ShoppingCartIcon />
        </div>
      </Link> : null}
        {cart.length > 0 ? 
        <span className="absolute top-4 right-8 alternova-bg text-white h-4 w-4 rounded-full flex justify-center items-center text-xs font-bold"> 
          {cart.length}
        </span>: null }
    </div>
    <ProductList />
    <Footer />
  </div>
  )
};

export default Header;