import React, { useContext } from 'react';
import { GridList } from '../../components/GridList/GridList';
import { Navigation } from '../../components/Navigation/Navigation';
import { OrdersContext } from '../../context/orders-context';

import classes from './OrderHistory.module.css';

export const OrderHistory = () => {
  const ordersContext = useContext(OrdersContext);
  return (
    <>
      <Navigation />
      <main>
        {ordersContext.orders.map((element: any, key: number) => {
          if (key === 0) return '';
          return (
            <div className={classes.OrderWrapper} key={key}>
              <b>Order {key}</b>
              <GridList data={element.data} />
            </div>
          );
        })}
      </main>
    </>
  );
};
