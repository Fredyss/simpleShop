import React from 'react';
import { InputProps } from '../../../shared/globals/Interfaces';
import classes from './Input.module.css';

export const Input = (props: InputProps) => {
  switch (props.type) {
    case 'input':
      return (
        <div>
          <input
            className={classes.FormInput}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
        </div>
      );

    case 'count':
      return (
        <div>
          <input
            type='number'
            className={classes.CountInput}
            value={props.value}
            onChange={props.changed}
            placeholder={props.placeholder}
          />
        </div>
      );

    default:
      return null;
  }
};
