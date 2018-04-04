import React from 'react';
import Dashboard from '../components/STD/Dashboard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

class stdDB extends React.Component{

	componentDidMount() {
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
			localStorage.setItem('email', res.data.email)
			localStorage.setItem('firstname', res.data.firstName)
		}).catch(e => {
			console.log(e)
		})
	}


    render(){
        return (
            <div classNameName="page-wrapper">
                <Dashboard/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
	token: localStorage.getItem('accessToken')
});

export default connect(mapStateToProps)(stdDB);