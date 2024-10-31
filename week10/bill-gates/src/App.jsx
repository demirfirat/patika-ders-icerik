import './App.css'
import React from 'react';
import { BalanceProvider } from './context/balanceContext';
import ProductList from './components/ProductList/productList';
import Header from './components/Header/header';
import CartSum from './components/cartSum/cartSummary';

function App() {
  return (
    <>
     <BalanceProvider>
      <div className="app-container">
        <Header />
        <ProductList />
        <CartSum />
      </div>
     </BalanceProvider>
    </>
  )
}

export default App
