import React, { useContext } from 'react';
import { OrderContext } from '../../context/order-context';
import { OrdersContext } from '../../context/orders-context';
import { Button } from '../UI/Button/Button';

interface Data {
  data: Array<Type>;
}
interface Type {
  title: string;
  count: number;
}

const CheckoutStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 2px'
};

const CheckoutBoxStyle = {
  border: '1px solid gray',
  borderRadius: '3px',
  paddingLeft: '8px',
  margin: '6px'
};

export const Checkout = ({ data }: Data) => {
  const { removeItem, deleteAll, items } = useContext(OrderContext);
  const { addOrder } = useContext(OrdersContext);

  return (
    <div>
      {data.length ? (
        <div style={CheckoutBoxStyle}>
          <h2 style={{ borderBottom: '0.5px solid gray' }}>Active order</h2>
          {data.map((item, key) => (
            <div style={CheckoutStyle} key={key}>
              <b>{item.title}</b> pieces: {item.count}
              <Button
                type='remove'
                click={() => {
                  removeItem({ title: item.title });
                }}
              />
            </div>
          ))}
          <Button
            type='order'
            click={() => {
              addOrder(items);
              deleteAll();
            }}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
