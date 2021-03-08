import React from 'react';

interface Type {
  id?: number;
  title: string;
  count: number;
}

export const GridItem = ({ title, count }: Type) => {
  return (
    <div>
      Product {title} pieces {count}
    </div>
  );
};
