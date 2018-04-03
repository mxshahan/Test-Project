import React from 'react';

const CourseHeader = (props) => (
    <li data-transition="slidehorizontal" data-slotamount="1" data-masterspeed="500" data-saveperformance="on" data-title="Slide 1"><img src={props.details} alt="slidebg1" data-bgposition="center top" data-bgrepeat="no-repeat" data-bgfit="cover" style={{height: "300px", width: "100%"}}/>
        <div class="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="0"></div>
        <div class="tp-caption sfb fadeout text-center large_white" data-x="center" data-y="110" data-speed="500" data-start="1000" data-easing="easeOutQuad">Course Name</div>
        <div class="tp-caption sfb fadeout text-center large_white tp-resizeme" data-x="center" data-y="155" data-speed="500" data-start="1300" data-easing="easeOutQuad">
            <div class="separator light"></div>
        </div>
        <div class="tp-caption sfb fadeout medium_white text-center" data-x="center" data-y="190" data-speed="500" data-start="1300" data-easing="easeOutQuad" data-endspeed="600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br/>Nesciunt, maiores, aliquid. Repellat eum numquam
            <br/>culpa offici, tenetur fugiat dolorum sapiente...</div>
    </li>
);

export default CourseHeader