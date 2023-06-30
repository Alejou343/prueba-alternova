import React from 'react';
import ProductItem from './ProductItem';
import AppContext from '../Context/AppContext';
import '../Styles/ProductList.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const ProductList = () => {

  const [search, setSearch] = React.useState(''); 
  const { state, addToCart } = React.useContext(AppContext);
  const { products } = state;
  const filteredProducts = products.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity)
  };

  return (
    <div className="mt-28">
      <div className="relative w-60 mx-auto">
        <div className="w-4 h-4 absolute right-3 top-3 alternova-font">
          <MagnifyingGlassIcon />
        </div>
        <input 
          className="mx-auto mb-8 w-60 px-3 py-2 border alternova-border rounded-lg flex justify-center" 
          type="text" 
          placeholder="Search a product" 
          value={search}
          onChange = {(e) => setSearch(e.target.value)} 
        />
      </div>
    <div className="ProductList grid grid-cols-4 gap-8 mt-5 mb-12 justify-items-center mx-28">
      {filteredProducts.map(product => 
      <ProductItem 
        key={product.id} 
        product={product}
        handleAddToCart={handleAddToCart}
      />)}
    </div>
    </div>
  )
}

export default ProductList;