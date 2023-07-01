import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ShoppingCart from './ShoppingCart';
import NotFound from './NotFound';
import Success from './Success';
import AppContext from '../Context/AppContext.js';
import useInitialState from '../Hooks/useInitialState';
import '../Styles/App.css';

function App() {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Header /> } />
          <Route path="/shopping-cart" element= { <ShoppingCart /> } /> 
          <Route path="/success" element = { <Success /> } />
          <Route path="*" element= { <NotFound /> } /> 
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
