import React from 'react';
import AddressBar from '../components/AddressBar';
import { Link } from 'react-router-dom';

const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}

const Signup = (props) => (
	<div className="page-wrapper">
	    <AddressBar title="Login"/>
    
        <div className="main-container dark-translucent-bg" style={bannerStyle}>
            <div className="container">
                <div className="row">
                    <div className="main object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                        <div className="form-block center-block p-30 light-gray-bg border-clear">
                            <h2 className="title">Sign Up</h2>
                            <form className="form-horizontal" role="form">
                                <div className="form-group has-feedback">
                                    <label for="inputName" className="col-sm-3 control-label">First Name <span className="text-danger small">*</span></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="inputName" placeholder="Fisrt Name" required/> <i className="fa fa-pencil form-control-feedback"></i></div>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="inputLastName" className="col-sm-3 control-label">Last Name <span className="text-danger small">*</span></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" required/> <i className="fa fa-pencil form-control-feedback"></i></div>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="inputUserName" className="col-sm-3 control-label">User Name <span className="text-danger small">*</span></label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" id="inputUserName" placeholder="User Name" required/> <i className="fa fa-user form-control-feedback"></i></div>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="inputEmail" className="col-sm-3 control-label">Email <span className="text-danger small">*</span></label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" required/> <i className="fa fa-envelope form-control-feedback"></i></div>
                                </div>
                                <div className="form-group has-feedback">
                                    <label for="inputPassword" className="col-sm-3 control-label">Password <span className="text-danger small">*</span></label>
                                    <div className="col-sm-8">
                                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/> <i className="fa fa-lock form-control-feedback"></i></div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" required/> Trainer </label>
												<label>
                                                <input type="checkbox" required/> Student </label>
                                        </div>
                                    </div>
                                </div>
								<div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" required/> Accept our <a href="#">privacy policy</a> and <a href="#">customer agreement</a> </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-3 col-sm-8">
                                        <button type="submit" className="btn btn-group btn-default btn-animated">Sign Up <i className="fa fa-check"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
);

export default Signup;