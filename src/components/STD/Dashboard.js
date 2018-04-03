import React from 'react';
import DBSidebar from './DBSidebar';
import IndCourse from './IndCourse';
import Pagination from './Pagination';
import StdFilter from './StdFilter';
import axios from 'axios';
import { setCourse } from '../../actions/course';
import { connect } from 'react-redux'
// const server = 'http://localhost:3000';


class Dashboard extends React.Component{
    state = {
        data: null,
        courses: []
    }

    componentDidMount() {
        axios.get(`/api/course/getAllCourse`).then((res) => {
            // console.log(res.data);
            this.setState({
                courses: res.data
            })
            this.props.setAllCourse(res.data);
        }).catch(e => {
            console.log('Cannot get data', e)
        })
        // console.log(sessionStorage.getItem('accessToken'));
    }

    render(){
        // console.log('state',this.state.courses)
        return (
        <section className="main-container">
            <div className="container">
                <div className="row">
                    <div className="main col-md-8 col-lg-offset-1 col-md-push-4 col-lg-push-3">
                        <h3 className="title">Select Courses</h3>
                        <div className="separator-2"></div>
                
                        <div className="row">
                            {this.state.courses.map((data, index) => {
                                // console.log(data)
                                return <IndCourse course={data} key={index}/>
                            })}
                        </div>
                        <Pagination/>
                        
                    </div>
                    <StdFilter/>
                </div>
            </div>
        </section>
        )
    }
}

// console.log('LocalStorage',localStorage.getItem('accessToken'))

const mapDispatchToProps = (dispatch) => ({
    setAllCourse: (data) => dispatch(setCourse(data))
})
const mapStateToProps = (state) => ({
    courses: state.courses
})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);