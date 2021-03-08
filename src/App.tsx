import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/auth-context';
import OrderContextProvider from './context/order-context';
import OrdersContextProvider from './context/orders-context';
import { Routes } from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <OrdersContextProvider>
          <OrderContextProvider>
            <Routes />
          </OrderContextProvider>
        </OrdersContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
