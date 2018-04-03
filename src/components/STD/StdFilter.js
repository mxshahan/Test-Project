import React from 'react';

const StdFilter = () => (
    <aside className="col-md-4 col-lg-3 col-md-pull-8 col-lg-pull-9">
    <div className="sidebar">
        <div className="block clearfix">
            <h3 className="title">Course Category</h3>
            <div className="separator-2"></div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Real Estate</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Education</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Interior Design</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Motivation</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> IT/Technology</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Health/Fitness</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Finance/Investment</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Retail/Wholesale</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Tours/Travel</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Advertisement</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Photography</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> News/Publishing</label>
            </div>
            
        </div>
        <div className="block clearfix">
            <h3 className="title">Pricing</h3>
            <div className="separator-2"></div>
           
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Paid</label>
            </div>
            <div className="checkbox">
                <label><input type="checkbox" value=""/> Free</label>
            </div>                       
        </div>
    </div>
</aside>
);

export default StdFilter;