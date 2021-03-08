import React from 'react';
import { ProductListItem } from './ProductListItem/ProductListItem';

const ListStyle = {
  marginLeft: '30%'
};

interface Data {
  data: Array<Type>;
  actionBox: boolean;
}
interface Type {
  id?: number;
  title: string;
}

export const ProductList = ({ data, actionBox }: Data) => {
  return (
    <div style={ListStyle}>
      {data.map((element, key) => (
        <React.Fragment key={key}>
          <ProductListItem title={element.title} actionBox={actionBox} />
        </React.Fragment>
      ))}
    </div>
  );
};
