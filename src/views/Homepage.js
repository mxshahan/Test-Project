import React from 'react';
import Courses from '../components/Homepage/Courses';
import TrainingHistory from '../components/Homepage/TrainingHistory';
import Banner from '../components/Banner';

const Homepage = () => (
<div className="page-wrapper">    
    <div id="page-start"></div>
    <Banner title="Homepage"/>	    
    <Courses/>
    <TrainingHistory/>

</div>    
)

export default Homepage;