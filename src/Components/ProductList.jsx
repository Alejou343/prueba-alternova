import React from 'react';
import ProductItem from './ProductItem';
import AppContext from '../Context/AppContext';
import '../Styles/ProductList.css';

const ProductList = () => {

  const { state, addToCart } = React.useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity)
    console.log(products)
  };

  return (
    <div className="ProductList grid grid-cols-4 gap-8 mt-28 mb-12 justify-items-center mx-28">
        {products.map(product => 
        <ProductItem 
          key={product.id} 
          product={product}
          handleAddToCart={handleAddToCart}
        />)}
    </div>
  )
}

export default ProductList