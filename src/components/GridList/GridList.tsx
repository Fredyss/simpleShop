import React from 'react';
import { GridItem } from './GridItem/GridItem';

export const GridList = ({ data }: any) => {
  if (!data) return <></>;

  return (
    <div>
      {data.map((element: any, key: number) => {
        if (!element) return null;
        return (
          <div>
            <GridItem key={key} title={element.title} count={element.count} />
          </div>
        );
      })}
    </div>
  );
};
