import React from 'react';


const HomepageBanner = (props) => (
<div class="banner clearfix">
    <div class="slideshow">
        <div class="slider-banner-container">
            <div class="slider-banner-fullwidth">
                <ul class="slides">
                    <li data-transition="fade" data-slotamount="4" data-masterspeed="500" data-saveperformance="on" data-title="Training Academy">
                        <img src="images/education-slider-slide-1.jpg" alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover"/>
                    </li>
                    <li data-transition="fade" data-slotamount="4" data-masterspeed="500" data-saveperformance="on" data-title="Training Academy">
                        <img src="images/education-slider-slide-2.jpg" alt="slidebg2" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover"/>
                    </li>
                </ul>
                <div class="tp-bannertimer"></div>
            </div>
        </div>
    </div>
</div>
);

export default HomepageBanner;