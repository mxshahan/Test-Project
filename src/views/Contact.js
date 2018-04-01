import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MainContent from '../components/Contact/MainContent';
import Parallex from '../components/Contact/Parallex';
import Footer from '../components/Footer';

const Contact = (props) => (
	<div className="page-wrapper">
		<Header/>
		<Banner/>
		<MainContent/>
		<Parallex/>
		<Footer/>
	</div>
);

export default Contact;