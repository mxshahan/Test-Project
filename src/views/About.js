import React from 'react';
import MainContent from '../components/Contact/MainContent';
import Parallex from '../components/Contact/Parallex';
import Banner from '../components/Banner';

const styleSheet = {
    backgroundImage: "url('images/page-about-banner-1.jpg')",
    backgroundPosition: "50% 27%"
}

const About = (props) => (
	<div classNameName="page-wrapper">           
        <div className="banner dark-translucent-bg" style={styleSheet}>
            <div className="breadcrumb-container">
                <div className="container">
                    <ol className="breadcrumb">
                        <li><i className="fa fa-home pr-10"></i><a className="link-dark" href="index.html">Home</a></li>
                        <li className="active">About</li>
                    </ol>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-center col-md-offset-2 pv-20">
                        <h3 className="title logo-font object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">The <span className="text-default">Training</span> Academy.</h3>
                        <div className="separator object-non-visible mt-10" data-animation-effect="fadeIn" data-effect-delay="100"></div>
                        <p className="text-center object-non-visible" data-animation-effect="fadeIn" data-effect-delay="100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis magnam ea necessitatibus, officiis voluptas odit! Aperiam omnis, cupiditate laudantium velit nostrum, exercitationem accusamus, possimus soluta illo deserunt tempora qui.</p>
                    </div>
                </div>
            </div>
        </div>
        <section className="main-container padding-bottom">
            <div className="container">
                <div className="row">
                    <div className="main col-md-12">
                        <h3 className="title">Who <strong>We Are</strong></h3>
                        <div className="separator-2"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus illo vero cupiditate, sed enim voluptatibus provident consectetur. Quo dolor sunt nostrum, eligendi illo accusamus odit, ipsam excepturi voluptatem nulla minus.</p>
                                <p>Blanditiis aspernatur, non quasi, maxime corporis officiis quia. Cupiditate, voluptatibus ducimus, natus, labore mollitia dolorem incidunt voluptatum, delectus eius fugit porro placeat animi voluptatem autem hic eligendi sint. Amet pariatur odit repudiandae sunt. Rem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores a.</p>
                                <ul className="list-icons">
                                    <li><i className="icon-check-1"></i>We are here to support you</li>
                                    <li><i className="icon-check-1"></i>Free updates</li>
                                    <li><i className="icon-check-1"></i>Unlimited courses and variations</li>
                                    <li><i className="icon-check-1"></i>ipsam asperiores fugiat quo</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <div className="owl-carousel content-slider-with-controls">
                                    <div className="overlay-container overlay-visible"><img src="images/page-about-1.jpg" alt=""/>
                                        <div className="overlay-bottom hidden-xs">
                                            <div className="text">
                                                <h3 className="title">We Can Do It</h3></div>
                                        </div><a href="images/page-about-1.jpg" className="popup-img overlay-link" title="image title"><i className="icon-plus-1"></i></a></div>
                                    <div className="overlay-container overlay-visible"><img src="images/page-about-2.jpg" alt=""/>
                                        <div className="overlay-bottom hidden-xs">
                                            <div className="text">
                                                <h3 className="title">You Can Trust Us</h3></div>
                                        </div><a href="images/page-about-2.jpg" className="popup-img overlay-link" title="image title"><i className="icon-plus-1"></i></a></div>
                                    <div className="overlay-container overlay-visible"><img src="images/page-about-3.jpg" alt=""/>
                                        <div className="overlay-bottom hidden-xs">
                                            <div className="text">
                                                <h3 className="title">We Love What We Do</h3></div>
                                        </div><a href="images/page-about-3.jpg" className="popup-img overlay-link" title="image title"><i className="icon-plus-1"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

	</div>
);

export default About;