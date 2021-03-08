import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/auth-context';

const itemStyle = {
  fontSize: '26px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: ' whitesmoke'
};

interface NavigationItemProps {
  name: string;
  path: string;
}

export const NavigationItem = ({ name, path }: NavigationItemProps) => {
  const { setName } = useContext(AuthContext);

  return (
    <li style={itemStyle}>
      {name === 'Logout' ? (
        <Link onClick={() => setName('')} style={itemStyle} to={path}>
          {name}
        </Link>
      ) : (
        <Link style={itemStyle} to={path}>
          {name}
        </Link>
      )}
    </li>
  );
};
