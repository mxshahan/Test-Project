import React from 'react';
import AddressBar from '../components/AddressBar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startCreateUser } from '../actions/auth';
import axios from 'axios';
const bannerStyle = {
    backgroundImage: "url('images/background-img-6.jpg')",
    backgroundPosition: "50% 30%"
}
const server = 'http://localhost:3000';

class Login extends React.Component{
    state = {
        email: '',
        password: '',
        accountType: '',
        loginStatus: false
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            loginStatus: true
        })
        axios.post(`/api/user/login`, userData).then((res) => {
            console.log('Successfully login', res);
            const body = {
                token: res.data.token,
                accountType: res.data.accountType
            }

            localStorage.setItem('accessToken', body.token);
            localStorage.setItem('accountType', body.accountType);
            this.props.loginUser(body)
        }).catch(e => {
            console.log('Login error', e)
        })

		axios({
			method: 'get', 
			url: `/api/user/me`,
            headers: {
                'Content-Type': 'application/json',
                'auth': this.props.token
            }
		}).then(res => {
			// console.log(res)
			this.setState({
				data: res.data
			});
			localStorage.setItem('userID', res.data._id)
		}).catch(e => {
			console.log(e)
		})
	
    }

    render(){
        return (
            <div classNameName="page-wrapper">
                <div className="main-container dark-translucent-bg" style={bannerStyle}>
                    <div className="container">
                        <div className="row">
                            <div className="main object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100">
                                <div className="form-block center-block p-30 light-gray-bg border-clear">
                                    <h2 className="title">Login</h2>
                                    <form className="form-horizontal">
                                        <div className="form-group has-feedback">
                                            <label for="inputUserName" className="col-sm-3 control-label">Email</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputUserName" placeholder="Email" required onChange={(e) => {
                                                    this.setState({
                                                        email: e.target.value
                                                    })
                                                }}/> 
                                                <i className="fa fa-user form-control-feedback"></i></div>
                                        </div>
                                        <div className="form-group has-feedback">
                                            <label for="inputPassword" className="col-sm-3 control-label">Password</label>
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
                                                        <input type="checkbox" required/> Remember me. </label>
                                                </div>
                                                {this.state.loginStatus ? 
                                                    <button onClick={this.handleLogin} type="submit" className="btn btn-group btn-default btn-animated">Please Wait... <img src="https://thumbs.gfycat.com/AggressiveGrouchyHammerkop-max-1mb.gif" width="10px" alt=""/></button>
                                                    :
                                                    <button onClick={this.handleLogin} type="submit" className="btn btn-group btn-default btn-animated">Log In <i className="fa fa-user"></i></button>
                                                }
                                                <ul className="space-top">
                                                    <li><a href="#">Forgot your password?</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <p className="text-center space-top">Don't have an account yet? <Link to="signup">Sign up</Link> now.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (body) => dispatch(startCreateUser(body))
})


export default connect(null, mapDispatchToProps)(Login);