import React from 'react';
import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
import { loginUser, LogoutUser } from '../actions/auth';

export const PublicRoute = ({isAuthenticated, accountType, component: Component, ...rest}) => (
    <Route {...rest} component={(props)=> (
        isAuthenticated ? (
            <div>
                {accountType == 'Student' ? <Redirect to="/std-dashboard"/> : <Redirect to="/trainer-dashboard"/>}
            </div>
        ) : (
            <Component {...props}/>            
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('accessToken'),    
    accountType: localStorage.getItem('accountType')
});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadUser: () => {
//             let token = sessionStorage.getItem('accessToken');
//             dispatch(loginUser(token))
//             .then((res) => {
//                 if(!res.error){
//                     sessionStorage.setItem('accessToken', {
//                         accountType: res.data.accountType,
//                         token: res.data.token
//                     })
//                 }else{
//                     sessionStorage.removeItem('accessToken');
//                     dispatch(LogoutUser());
//                 }
//             })
//         }, 
//         resetMe: () =>{ // logout
//             sessionStorage.removeItem('accessToken'); //remove token from storage
//             dispatch(LogoutUser());
//         }
//     }
// }

export default connect(mapStateToProps)(PublicRoute);