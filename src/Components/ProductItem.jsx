import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const ProductItem = ({ product, handleAddToCart }) => {

  const [quantity, setQuantity] = React.useState(0);
  const [message, setMessage] = React.useState(false);

  const handleAction = () => {
    if (quantity > 0) {
      handleAddToCart({...product, quantity: Number(quantity)});
      setQuantity(0);
      setMessage(false);
    } else {
      setMessage(true);
    }
  }

  return (
    <div className="ProductItem w-60 border-2 rounded-lg p-2">
        <img src={product.img} 
        alt={product.name} 
        className="w-full h-56"
        />
        <div className="ProductItem-information flex justify-between mb-2 p-2">
            <span> {product.name} </span>
            <span className="font-bold"> $ {product.price} </span>
        </div>
        {product.stock > 0 && <div className="Product-footer flex justify-between px-5">
            <input type="number" 
              placeholder="Quantity" 
              min="0" 
              max={product.stock} 
              name="counter" 
              value={quantity}
              id={product.name + '_' + product.id} 
              className="w-20 text-xs border-2 rounded-lg p-1" 
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button 
              type="button" 
              className="w-10 border-1 bg-green-300 text-white rounded-lg p-1"
              onClick={() => handleAction()}
            >
                <PlusIcon />
            </button>
        </div>}
        {message && <p className="Product-footer text-xs flex px-5 mt-2 text-red-500 justify-center">Select more than zero</p>}
        {product.stock == 0 && <p className="Product-footer text-xs flex px-5 text-red-500 justify-center">No available in stock</p>}
    </div>
  )
}

export default ProductItem;