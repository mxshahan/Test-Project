import React from 'react';

const Pagination = () => (                   
<div className="row">
    <div className="col-md-12">
        <nav>
            <ul className="pagination">
                <li><a href="#" aria-label="Previous"><i className="fa fa-angle-left"></i></a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" aria-label="Next"><i className="fa fa-angle-right"></i></a></li>
            </ul>
        </nav>
    </div>
</div>
);

export default Pagination;