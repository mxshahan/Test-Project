import React from 'react';
import { Link } from 'react-router-dom'
const IndCourse = (props) => (
<div className="col-md-4">
    <div className="image-box shadow text-center mb-20">
        <div className="overlay-container"><img src={props.course.media.link[0]} alt=""/>
            <div className="overlay-top"></div>
            <div className="overlay-bottom">
                <div className="links"><Link to={"/course-details?id="+props.course._id} className="btn btn-gray-transparent btn-animated btn-sm">View Details <i className="pl-10 fa fa-arrow-right"></i></Link></div>
            </div>
        </div>
    </div>
</div>
);

export default IndCourse;