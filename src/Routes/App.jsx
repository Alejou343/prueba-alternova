import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useInitialState from '../Hooks/useInitialState';
import AppContext from '../Context/AppContext.js';
import ShoppingCart from '../Components/ShoppingCart';
import NotFound from '../Components/NotFound';
import Success from '../Components/Success';
import Header from '../Components/Header';
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
};

export default App;
