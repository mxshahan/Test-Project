import React from 'react';

const AddressBar = (props) => (
    <div class="breadcrumb-container">
        <div class="container">
            <ol class="breadcrumb">
                <li><i class="fa fa-home pr-10"></i><a class="link-dark" href="index.html">Home</a></li>
                <li class="active">{props.title}</li>
            </ol>
        </div>
    </div>
);

export default AddressBar;