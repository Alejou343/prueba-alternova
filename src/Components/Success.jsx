import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import Purchase from './Purchase';

const Success = () => {

  const { state, reload } = React.useContext(AppContext);
  const { cart } = state;

  if (!cart.length) {
    return <Navigate to="/" />
};

  return (
    <div className="Success">
      <div className="Success-header fixed flex justify-center alternova-border border-b-2 bg-white px-3 h-20 rounded-b-lg items-center w-full top-0 mt-0">
        <img className="w-56" src="https://www.alternova.co/wp-content/uploads/2021/03/cropped-logo-Alternova.png" alt="LogoAlternova.jpg" />
        <h1 className="font-bold alternova-font text-xl ml-2">Shop</h1>
      </div>
      <div className="Success-message flex justify-center items-center h-full">
          <h1 className="font-bold text-xl mt-28 mb-10"> Thanks for buy with Alternova Shop. </h1>
      </div>
      <div className="Success-order mx-auto my-5 w-52">
        {cart?.map((product, index) => <Purchase key= {index} product={product}/>)}
      </div>
      <Link to="/">
          <button 
            className="mt-4 mx-auto alternova-bg flex justify-center items-center text-white font-bold rounded-lg h-10 w-20"
            onClick={() => setTimeout(() => { reload() }, 500)}>
            Go back
          </button>
      </Link>
    </div>
  )
};

export default Success;