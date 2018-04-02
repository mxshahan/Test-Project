import React from 'react';
import MainContent from '../components/Contact/MainContent';
import Parallex from '../components/Contact/Parallex';
import Banner from '../components/Banner';

const About = (props) => (
	<div className="page-wrapper">
	    <Banner title="About"/>	
		<MainContent/>
		<Parallex/>
	</div>
);

export default About;