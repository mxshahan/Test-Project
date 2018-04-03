import React from 'react';
import AddressBar from '../components/AddressBar';
import axios from 'axios'
import CourseHeader from '../components/Course/CourseHeader'
import { setDownload } from '../actions/course'
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
// import 'react-owl-carousel2/style.css';

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
// const events = {
//     onDragged: function(event) {...},
//     onChanged: function(event) {...}
// };

class CourseDetails extends React.Component{
    
    state = {
        courses: '',
        images: [], 
        download: false
    }

    componentDidMount() {
        const courseID = this.props.location.search.substring(4)//Removing Query String ?id=
        axios.get(`/api/course/getCourse/${courseID}`).then((res) => {
            // console.log(res.data);
            this.setState({
                courses: res.data,
                images: res.data.media.link, 
            })
        }).catch(e => {
            console.log('Cannot get data', e)
        })
        // console.log(sessionStorage.getItem('accessToken'));
    }


    handlePayment = (e) => {
        e.preventDefault();         
        const courseID = this.props.location.search.substring(4)//Removing Query String ?id=

        const handler = StripeCheckout.configure({
            key: 'pk_test_w4b6hSLwG2b0zTdYBD1sK4hY',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: (token) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                // console.log(token);

                this.setState({
                    download: true                        
                })
                this.props.setDownload(courseID)
                const stripeElem = {
                    token,
                    amount: this.state.courses.price*100,
                    description: this.state.courses.title
                }
                console.log('Stripe Elem', stripeElem)
                axios.post(`/api/course/charge`, stripeElem)
                .then((res) => {
                    console.log('Respons', res);
                    // this.handleSaveData();
                    this.setState({
                        download: true                        
                    })

                }).catch(e => {
                    console.log('Error', e);
                }) 
                
            }
        });

        handler.open({
            name: this.state.courses.title,
            description: 'Demo Course',
            amount: this.state.courses.price*100
        });
    }
    

    render(){
        // console.log(this.state.images)
        return(
            <div className="page-wrapper">
                    <AddressBar title="Course Details"/>
                <div class="pv-40 banner light-gray-bg">
                    <div class="container clearfix">
                        <ul class="" style={{listStyle: "none"}}>
                            <li >
                                <img src="images/portfolio-item-banner-1.jpg" alt="slidebg1" width="100%"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <section class="main-container padding-ver-clear">
                    <div class="container pv-40">
                        <div class="row">
                            <div class="main col-md-8">
                                <h1 class="title">Course Title</h1>
                                <div class="separator-2"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed, quidem quis praesentium, ut unde. Quae sed, incidunt laudantium nesciunt, optio corporis quod earum pariatur omnis illo saepe numquam suscipit, nemo placeat dignissimos eius mollitia et quas officia doloremque ipsum labore rem deserunt vero! Magnam totam delectus accusantium voluptas et, tempora quos atque, fugiat, obcaecati voluptatibus commodi illo voluptates dolore nemo quo soluta quis.</p>
                                <p>Molestiae sed enim laboriosam atque delectus voluptates rerum nostrum sapiente obcaecati molestias quasi optio exercitationem, voluptate quis consequatur libero incidunt, in, quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nobis officiis, autem earum tenetur quidem. Quae non dicta earum. Ipsum autem eaque cum dolor placeat corporis quisquam dolorum at nesciunt.</p>
                                <h3>Students Testimonial</h3>
                                <blockquote class="margin-clear">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, magni, eos! Dignissimos voluptatum sequi ea sunt, nisi, doloribus facere asperiores dolorem quos laboriosam porro, velit in pariatur necessitatibus. Quisquam, mollitia!</p>
                                    <footer><cite title="Source Title">James </cite></footer>
                                </blockquote>
                            </div>
                            <aside class="col-md-4 col-lg-3 col-lg-offset-1">
                                <div class="sidebar">
                                    <div class="block clearfix">
                                        <h3 class="title">Course Info</h3>
                                        <div class="separator-2"></div>
                                        <ul class="list margin-clear">
                                            <li><strong>Faculty: </strong><span class="text-right">John Doe</span></li>
                                            <li><strong>Date: </strong><span class="text-right">May 2015</span></li>
                                            <li><strong>In: </strong><span class="text-right">IT/Technolgy</span></li>
                                            <li><strong>Place: </strong><span class="text-right">UK</span></li>
                                            <li><strong>Price: </strong><span class="text-right">{this.state.courses.price}</span></li>
                                        </ul>
                                        {this.state.download ? 
                                        <a href={this.state.images[0]} class="btn btn-animated btn-default btn-lg">Download Now <i class="fa fa-download"></i></a>
                                        : 
                                        <a onClick={this.handlePayment} href="#" class="btn btn-animated btn-default btn-lg">Enroll Now <i class="fa fa-external-link"></i></a> 
                                        }                                        
                                        <h3>Share This</h3>
                                        <div class="separator-2"></div>
                                        <ul class="social-links colored circle small">
                                            <li class="facebook"><a target="_blank" href="http://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                            <li class="twitter"><a target="_blank" href="http://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                            <li class="googleplus"><a target="_blank" href="http://plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
                                            <li class="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                                            <li class="xing"><a target="_blank" href="http://www.xing.com/"><i class="fa fa-xing"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     payment: state.course.payment
// })

const mapDispatchToProps = (dispatch) => ({
    setDownload : (id) => dispatch(setDownload(id))
})

export default connect(null, mapDispatchToProps)(CourseDetails);