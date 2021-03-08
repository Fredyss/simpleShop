import React, { useState } from 'react';
import { ChildrenProps } from '../shared/globals/Interfaces';

export const OrdersContext = React.createContext({
  orders: [{}],
  addOrder: (order: any) => order
});

const OrdersContextProvider = ({ children }: ChildrenProps) => {
  const [allOrders, setAllOrders] = useState([{}]);

  const ordersHandler = (data: any) => {
    let tempOrders = [...allOrders, { data: data }];
    setAllOrders(tempOrders);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders: allOrders,
        addOrder: (order: any) => ordersHandler(order)
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
