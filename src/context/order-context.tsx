import React, { useState } from 'react';
import { Product, ChildrenProps } from '../shared/globals/Interfaces';

export const OrderContext = React.createContext({
  items: [],
  addItem: (item: any) => item,
  removeItem: (item: any) => item,
  deleteAll: function () {}
});

const OrderContextProvider = ({ children }: ChildrenProps) => {
  const [order, setOrder] = useState([]);

  const deleteAll = () => {
    setOrder([]);
  };

  const orderHandler = (itemOrder: Product, action: string) => {
    let tmpOrder = [] as any;

    switch (action) {
      case 'add':
        tmpOrder = [...order];
        const foundedItem = tmpOrder.findIndex((item: Product) => item.title === itemOrder.title);
        if (foundedItem > -1) {
          tmpOrder[foundedItem].count = itemOrder.count;
          setOrder(tmpOrder);
          break;
        }
        tmpOrder.push(itemOrder);
        setOrder(tmpOrder);
        break;

      case 'remove':
        tmpOrder = [...order];
        const indexToDel = tmpOrder.findIndex((item: Product) => item.title === itemOrder.title);
        tmpOrder.splice(indexToDel, 1);
        setOrder(tmpOrder);
        break;

      default:
        break;
    }
  };

  return (
    <OrderContext.Provider
      value={{
        items: order,
        addItem: data => orderHandler(data, 'add'),
        removeItem: data => orderHandler(data, 'remove'),
        deleteAll: () => deleteAll()
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
