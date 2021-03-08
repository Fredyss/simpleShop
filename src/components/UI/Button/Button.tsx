import React from 'react';
import { ButtonProps } from '../../../shared/globals/Interfaces';
import classes from './Button.module.css';

export const Button = (props: ButtonProps) => {
  switch (props.type) {
    case 'add':
      return (
        <button className={classes.Add} onClick={props.click}>
          {props.type}
        </button>
      );

    case 'remove':
      return (
        <button className={classes.Remove} onClick={props.click}>
          {props.type}
        </button>
      );

    case 'order':
      return (
        <button className={classes.Order} onClick={props.click}>
          {props.type.toUpperCase()}
        </button>
      );
    case 'login':
      return (
        <button className={classes.Login} onClick={props.click}>
          {props.type}
        </button>
      );

    default:
      return <button></button>;
  }
};
