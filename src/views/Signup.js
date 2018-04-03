import React from 'react';
import AddressBar from '../components/AddressBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { startCreateUser } from '../actions/auth';
const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}
const server = 'http://localhost:3000';

class Signup extends React.Component{
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        userName: '',
        accountType: '',
        licence: false
    }

    handleSignup = (e) => {
        e.preventDefault();
        // console.log(this.props)
        if(this.state.licence){
            // console.log(this.state);
            const userData = {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                accountType: this.state.accountType
            }

            axios.post(`${server}/api/user/signup`, userData).then((res) => {
                console.log('Successfully Signup with response', res);
                const body = {
                    token: res.data.token,
                    accountType: res.data.accountType
                }                
                localStorage.setItem('accessToken', body.token);
                localStorage.setItem('accountType', body.accountType);

                this.props.loginNewUser(body)
            }).catch(e => {
                console.log('Error creating Account', e)
            })
        }else{
            console.log('Fields are require')
        }
    }

    render(){
        return(
            <div className="page-wrapper">
                <AddressBar title="Login"/>
            
                <div className="main-container dark-translucent-bg" style={bannerStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="main object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                                <div className="form-block center-block p-30 light-gray-bg border-clear">
                                    <h2 className="title">Sign Up</h2>
                                    <form className="form-horizontal" role="form">
                                        <div className="form-group has-feedback">
                                            <label for="inputName" className="col-sm-3 control-label">First Name <span className="text-danger small">*</span></label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputName" placeholder="Fisrt Name" required onChange={(e) => {
                                                    this.setState({
                                                        firstName: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-pencil form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label for="inputLastName" className="col-sm-3 control-label">Last Name <span className="text-danger small">*</span></label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" required onChange={(e) => {
                                                    this.setState({
                                                        lastName: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-pencil form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label for="inputUserName" className="col-sm-3 control-label">User Name <span className="text-danger small">*</span></label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputUserName" placeholder="User Name" required onChange={(e) => {
                                                    this.setState({
                                                        userName: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-user form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label for="inputEmail" className="col-sm-3 control-label">Email <span className="text-danger small">*</span></label>
                                            <div className="col-sm-8">
                                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" required onBlur={(e) => {
                                                    this.setState({
                                                        email: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-envelope form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label for="inputPassword" className="col-sm-3 control-label">Password <span className="text-danger small">*</span></label>
                                            <div className="col-sm-8">
                                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" required onChange={(e) => {
                                                    this.setState({
                                                        password: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-lock form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-3 col-sm-8">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="radio" name="checkbox" value="Trainer" required onChange={(e) => {
                                                            this.setState({
                                                                accountType: e.target.value
                                                            })
                                                        }}/> Trainer 
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="checkbox" value="Student" required onChange={(e) => {
                                                            this.setState({
                                                                accountType: e.target.value
                                                            })
                                                        }}/> Student
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-3 col-sm-8">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" required onClick={(e) => {
                                                            this.setState({
                                                                licence: !this.state.licence
                                                            })
                                                        }}/> Accept our <a href="#">privacy policy</a> and <a href="#">customer agreement</a> </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-offset-3 col-sm-8">
                                                <button onClick={this.handleSignup} type="submit" className="btn btn-group btn-default btn-animated">Sign Up <i className="fa fa-check"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginNewUser: (body) => dispatch(startCreateUser(body))
})

export default connect(null, mapDispatchToProps)(Signup);