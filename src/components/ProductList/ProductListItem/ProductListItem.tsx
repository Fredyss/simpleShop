import React, { useContext, useState } from 'react';
import { OrderContext } from '../../../context/order-context';
import { Button } from '../../UI/Button/Button';
import { Input } from '../../UI/Input/Input';

const ListItemStyle = {
  display: 'grid',
  gridTemplateColumns: '60% 40%',
  margin: '24px 8px',
  padding: '10px',
  width: '320px',
  justifyContent: 'space-between',
  border: '1px solid darkgray',
  borderRadius: '6px'
};

const actionBoxStyle = {
  display: 'flex'
};

interface listProps {
  title: string;
  actionBox: boolean;
}

export const ProductListItem = ({ title, actionBox }: listProps) => {
  const { addItem } = useContext(OrderContext);
  const [count, setCount] = useState(0);

  return (
    <div style={ListItemStyle}>
      <h3>{title}</h3>

      {actionBox ? (
        <div style={actionBoxStyle}>
          <Input type='count' value={count} changed={event => setCount(+event.target.value)} />
          <Button
            type='add'
            click={() => {
              addItem({ title: title, count: count });
            }}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
