import React from 'react';
import AddressBar from '../components/AddressBar';
import { Link } from 'react-router-dom';

const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}

const Login = (props) => (
	<div classNameName="page-wrapper">
	    <AddressBar title="Login"/>
    
        <div className="main-container dark-translucent-bg" style={bannerStyle}>
            <div className="container">
                <div className="row">
                    <div className="main object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                        <div className="form-block center-block p-30 light-gray-bg border-clear">
                            <h2 className="title">Login</h2>
                            <form className="form-horizontal">
                                <div className="form-group has-feedback">
                                    <label for="inputUserName" className="col-sm-3 control-label">User Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="inputUserName" placeholder="User Name" required/> <i className="fa fa-user form-control-feedback"></i></div>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="inputPassword" className="col-sm-3 control-label">Password</label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/> <i className="fa fa-lock form-control-feedback"></i></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" required/> Remember me. </label>
                                        </div>
                                        <button type="submit" className="btn btn-group btn-default btn-animated">Log In <i className="fa fa-user"></i></button>
                                        <ul className="space-top">
                                            <li><a href="#">Forgot your password?</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p className="text-center space-top">Don't have an account yet? <Link to="signup">Sign up</Link> now.</p>
                    </div>
                </div>
            </div>
        </div>
	</div>
);

export default Login;