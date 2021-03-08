import React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';
import classes from './Navigation.module.css';

const NAVBAR_ITEMS = [
  { name: 'Home', path: '/Home' },
  { name: 'Orders history', path: '/OrderHistory' },
  { name: 'Logout', path: '/Login' }
];

export const Navigation = () => {
  return (
    <ul className={classes.Navigation}>
      {NAVBAR_ITEMS.map((item, index) => (
        <NavigationItem key={index} name={item.name} path={item.path} />
      ))}
    </ul>
  );
};
