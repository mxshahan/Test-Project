import React from 'react';
import Header from '../components/Homepage/Header';
import Banner from '../components/Homepage/Banner';
import MainContent from '../components/Homepage/MainContent';
import Parallex from '../components/Homepage/Parallex';
import Footer from '../components/Homepage/Footer';

const Homepage = (props) => (
	<div className="page-wrapper">
		<Header/>
		<Banner/>
		<MainContent/>
		<Parallex/>
		<Footer/>
	</div>
);

export default Homepage;