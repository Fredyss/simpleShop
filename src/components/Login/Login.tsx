import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth-context';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';

const formStyle = {
  border: '2px solid darkgay',
  display: 'flex',
  justifyContent: 'center',
  margin: '40px'
};

export const Login = () => {
  const authContext = useContext(AuthContext);

  const [name, setName] = useState('');

  const formHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    authContext.setName(name);
  };

  return (
    <form style={formStyle} onSubmit={event => formHandler(event)}>
      <Input
        placeholder='name'
        value={name}
        type='input'
        changed={event => setName(event.target.value)}
      />
      <Button type='login' />
    </form>
  );
};
