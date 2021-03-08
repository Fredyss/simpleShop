import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Home } from './containers/Home/Home';
import { OrderHistory } from './containers/OrderHistory/OrderHistory';
import { AuthContext } from './context/auth-context';

export const Routes = () => {
  const authContext = useContext(AuthContext);
  const routes = authContext.name ? AuthRoutes : DefaultRoute;

  return <div>{routes}</div>;
};

const AuthRoutes = (
  <Switch>
    <Route exact path='/Home' component={Home} />
    <Route exact path='/OrderHistory' component={OrderHistory} />
    <Route path='/*' render={() => <Redirect to='/Home' />} />
  </Switch>
);

const DefaultRoute = (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/*' render={() => <Redirect to='/Login' />} />
  </Switch>
);
