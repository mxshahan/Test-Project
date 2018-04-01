import React from 'react';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
//COMPONENTS
import Contact from '../views/Contact';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" exact={true} component={Contact}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
  </Router>
)



export default AppRouter;