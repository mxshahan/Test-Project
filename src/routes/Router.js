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
import Homepage from '../views/Homepage';
import About from '../views/About';
import Login from '../views/Login';
import Signup from '../views/Signup';
import NotFound from '../views/NotFound';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <div className="scrollToTop circle"><i class="icon-up-open-big"></i></div>
      <Header/>
      <Switch>
            <Route path="/" exact={true} component={Homepage}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/About" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)



export default AppRouter;