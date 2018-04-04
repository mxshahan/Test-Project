import React from 'react';
import {
	Link,
	NavLink,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { LogoutUser } from '../actions/auth';
import axios from 'axios';

class Header extends React.Component{
	state = {
		data: {
			firstName: localStorage.getItem('firstname'),
			email: localStorage.getItem('email')
		}
	}

	render(){
		return (
			<div>
				<div className="scrollToTop circle"><i className="icon-up-open-big"></i></div>
				<div className="page-wrapper">
					<div className="header-container">
						<div className="header-top dark ">
							<div className="container">
								<div className="row">
									<div className="col-xs-3 col-sm-6 col-md-8">
										<div className="header-top-first clearfix">
											<ul className="social-links circle small clearfix hidden-xs">
												<li className="twitter"><Link target="_blank" to="http://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
												<li className="skype"><Link target="_blank" to="http://www.skype.com/"><i className="fa fa-skype"></i></Link></li>
												<li className="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></Link></li>
												<li className="googleplus"><Link target="_blank" to="http://plus.google.com/"><i className="fa fa-google-plus"></i></Link></li>
												<li className="youtube"><Link target="_blank" to="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></Link></li>
												<li className="facebook"><Link target="_blank" to="http://www.facebook.com/"><i className="fa fa-facebook"></i></Link></li>
											</ul>
											<div className="social-links hidden-lg hidden-md hidden-sm circle small">
												<div className="btn-group dropdown">
													<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
													<ul className="dropdown-menu dropdown-animation">
														<li className="twitter"><Link target="_blank" to="http://www.twitter.com/"><i className="fa fa-twitter"></i></Link></li>
														<li className="skype"><Link target="_blank" to="http://www.skype.com/"><i className="fa fa-skype"></i></Link></li>
														<li className="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i className="fa fa-linkedin"></i></Link></li>
														<li className="googleplus"><Link target="_blank" to="http://plus.google.com/"><i className="fa fa-google-plus"></i></Link></li>
														<li className="youtube"><Link target="_blank" to="http://www.youtube.com/"><i className="fa fa-youtube-play"></i></Link></li>
														<li className="facebook"><Link target="_blank" to="http://www.facebook.com/"><i className="fa fa-facebook"></i></Link></li>
													</ul>
												</div>
											</div>
											<ul className="list-inline hidden-sm hidden-xs">
												<li><i className="fa fa-map-marker pr-5 pl-10"></i>7 Boroughbridge Road, Birley, UK</li>
												<li><i className="fa fa-phone pr-5 pl-10"></i>+44 079 8708-6739</li>
												<li><i className="fa fa-envelope-o pr-5 pl-10"></i>mail@domain.com</li>
											</ul>
										</div>
									</div>
									<div className="col-xs-9 col-sm-6 col-md-4">
										
										<div id="header-top-second" className="clearfix text-right">
										{this.props.isAuthenticated ?							
											<div id="header-top-second" className="clearfix">
												<div className="header-top-dropdown text-right">
													<div className="btn-group"><a href="#" className="btn btn-default btn-sm" onClick={(e) => {
														// localStorage.removeItem('accessToken');
														// localStorage.removeItem('accountType');
														// localStorage.removeItem('userID');
														localStorage.clear();
														this.props.LogoutUser()
													}}>
													<i className="fa fa-user pr-10"></i> Hi {this.state.data.firstName}, Logout</a>
													<Link to="/dashboard" className="btn btn-default btn-sm">
													<i className="fa fa-edit pr-10"></i> Dashboard</Link>
													</div>
												</div>
											</div>
											:
											<nav>
												<ul className="list-inline">
													<li><Link className="link-light " to="/login"><i className="fa fa-users pr-5"></i>Log In</Link></li>
													<li><Link className="link-light " to="/signup"><i className="fa fa-user pr-5"></i>Sign Up</Link></li>
												</ul>
											</nav>
										}
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<header className="header  fixed   clearfix">
							<div className="container">
								<div className="row">
									<div className="col-md-3">
										<div className="header-left clearfix">
											<div id="logo" className="logo">
												<Link to="/"><h2 className="logo-font title pr-10">Training Academy</h2></Link>
											</div>
										
										</div>
									</div>
									<div className="col-md-9">
										<div className="header-right clearfix pull-right">
											<div className="main-navigation  animated with-dropdown-buttons">
												<nav className="navbar navbar-default" role="navigation">
													<div className="container-fluid">
														<div className="navbar-header">
															<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
																<span className="sr-only">Toggle navigation</span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
																<span className="icon-bar"></span>
															</button>
														</div>
														<div className="collapse navbar-collapse" id="navbar-collapse-1">
															<ul className="nav navbar-nav ">
																<li><NavLink activeclassNameName="active" to="/">Home</NavLink></li>
																<li><NavLink activeclassNameName="active" to="/about">About</NavLink></li>
																<li><NavLink activeclassNameName="active" to="/courses">Courses</NavLink></li>
																<li><NavLink activeclassNameName="active" to="/contact">Contact</NavLink></li>
															</ul>
														</div>
													</div>
												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>
						</header>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	isAuthenticated: !!localStorage.getItem('accessToken'),
	accountType: localStorage.getItem('accountType'),
	token: localStorage.getItem('accessToken'),
	firstname: localStorage.getItem('firstname')
});

const mapDispatchToProps = (dispatch) => ({
	LogoutUser: () => dispatch(LogoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);