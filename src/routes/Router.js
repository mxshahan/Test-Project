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
import stdDB from '../views/StudentDB';
import trnDB from '../views/TrainerDB';
import CourseDetails from '../views/CourseDetails';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DashboardRouter from './DashboardRouter';

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
            <PublicRoute path="/login" component={Login}/>
            <PublicRoute path="/signup" component={Signup}/>
            <PrivateRoute path="/std-dashboard" component={stdDB} exact={true}/>
            <PrivateRoute path="/course-details" component={CourseDetails}/>
            <PrivateRoute path="/trainer-dashboard" component={trnDB}/>
            <Route path="/dashboard" component={DashboardRouter}/>
            <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)



export default AppRouter;