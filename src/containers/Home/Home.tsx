import React, { useContext } from 'react';
import { Checkout } from '../../components/Checkout/Checkout';
import { Navigation } from '../../components/Navigation/Navigation';
import { ProductList } from '../../components/ProductList/ProductList';
import { OrderContext } from '../../context/order-context';
import { PRODUCTS } from '../../shared/globals/Globals';

const mainStyle = {
  display: 'grid',
  gridTemplateColumns: '70% 30%',
  marginLeft: '20%'
};

export const Home = () => {
  const orderContext = useContext(OrderContext);

  return (
    <>
      <Navigation />
      <main style={mainStyle}>
        <ProductList data={PRODUCTS} actionBox={true} />
        <Checkout data={orderContext.items} />
      </main>
    </>
  );
};
