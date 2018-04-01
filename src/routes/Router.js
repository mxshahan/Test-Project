import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
//COMPONENTS
import Homepage from '../views/Homepage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" component={Homepage}/>
    </Switch>
  </Router>
)



export default AppRouter;