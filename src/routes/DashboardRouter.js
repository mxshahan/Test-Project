import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';

export const DashboardRouter = ({isAuthenticated, accountType}) => (
    isAuthenticated ? (
        <div>
            {accountType == 'Student' ? <Redirect to="/std-dashboard"/> : <Redirect to="/trainer-dashboard"/>}
        </div>
    ) : (
        <Redirect to="/login"/>
    )
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('accessToken'),
    accountType: localStorage.getItem('accountType')
});


export default connect(mapStateToProps)(DashboardRouter);