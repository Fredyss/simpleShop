import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext({
  name: '',
  setName: (name: any) => name
});

interface props {
  children: any;
}

const AuthContextProvider = (props: props) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (userName) setUserName(userName);
  }, [userName]);

  const userController = (name: string) => {
    setUserName(name);
  };

  return (
    <AuthContext.Provider
      value={{
        name: userName,
        setName: data => userController(data)
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
