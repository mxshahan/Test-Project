import React from 'react';
import {
	Link,
	NavLink,
} from 'react-router-dom'

const Header = () => (
    <div>
        <div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>
		<div class="page-wrapper">
			<div class="header-container">
				<div class="header-top dark ">
					<div class="container">
						<div class="row">
							<div class="col-xs-3 col-sm-6 col-md-9">
								<div class="header-top-first clearfix">
									<ul class="social-links circle small clearfix hidden-xs">
										<li class="twitter"><Link target="_blank" to="http://www.twitter.com/"><i class="fa fa-twitter"></i></Link></li>
										<li class="skype"><Link target="_blank" to="http://www.skype.com/"><i class="fa fa-skype"></i></Link></li>
										<li class="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></Link></li>
										<li class="googleplus"><Link target="_blank" to="http://plus.google.com/"><i class="fa fa-google-plus"></i></Link></li>
										<li class="youtube"><Link target="_blank" to="http://www.youtube.com/"><i class="fa fa-youtube-play"></i></Link></li>
										<li class="facebook"><Link target="_blank" to="http://www.facebook.com/"><i class="fa fa-facebook"></i></Link></li>
									</ul>
									<div class="social-links hidden-lg hidden-md hidden-sm circle small">
										<div class="btn-group dropdown">
											<button type="button" class="btn dropdown-toggle" data-toggle="dropdown"><i class="fa fa-share-alt"></i></button>
											<ul class="dropdown-menu dropdown-animation">
												<li class="twitter"><Link target="_blank" to="http://www.twitter.com/"><i class="fa fa-twitter"></i></Link></li>
												<li class="skype"><Link target="_blank" to="http://www.skype.com/"><i class="fa fa-skype"></i></Link></li>
												<li class="linkedin"><Link target="_blank" to="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></Link></li>
												<li class="googleplus"><Link target="_blank" to="http://plus.google.com/"><i class="fa fa-google-plus"></i></Link></li>
												<li class="youtube"><Link target="_blank" to="http://www.youtube.com/"><i class="fa fa-youtube-play"></i></Link></li>
												<li class="facebook"><Link target="_blank" to="http://www.facebook.com/"><i class="fa fa-facebook"></i></Link></li>
											</ul>
										</div>
									</div>
									<ul class="list-inline hidden-sm hidden-xs">
										<li><i class="fa fa-map-marker pr-5 pl-10"></i>7 Boroughbridge Road, Birley, UK</li>
										<li><i class="fa fa-phone pr-5 pl-10"></i>+44 079 8708-6739</li>
										<li><i class="fa fa-envelope-o pr-5 pl-10"></i>info@domain.com</li>
									</ul>
								</div>
							</div>
							<div class="col-xs-9 col-sm-6 col-md-3">
								
								<div id="header-top-second" class="clearfix text-right">
									<nav>
										<ul class="list-inline">
											<li><Link class="link-light " to="/login"><i class="fa fa-users pr-5"></i>Log In</Link></li>
											<li><Link class="link-light " to="/signup"><i class="fa fa-user pr-5"></i>Sign Up</Link></li>
										</ul>
									</nav>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<header class="header  fixed   clearfix">
					<div class="container">
						<div class="row">
							<div class="col-md-3">
								<div class="header-left clearfix">
									<div id="logo" class="logo">
										<Link to="/"><h2 class="logo-font title pr-10">Training Academy</h2></Link>
									</div>
								
								</div>
							</div>
							<div class="col-md-9">
								<div class="header-right clearfix pull-right">
									<div class="main-navigation  animated with-dropdown-buttons">
										<nav class="navbar navbar-default" role="navigation">
											<div class="container-fluid">
												<div class="navbar-header">
													<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
														<span class="sr-only">Toggle navigation</span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
														<span class="icon-bar"></span>
													</button>
												</div>
												<div class="collapse navbar-collapse" id="navbar-collapse-1">
													<ul class="nav navbar-nav ">
														<li><NavLink activeClassName="active" to="/">Home</NavLink></li>
														<li><NavLink activeClassName="active" to="/about">About</NavLink></li>
														<li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
														<li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
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
);

export default Header;