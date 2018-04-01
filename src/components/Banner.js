import React from 'react';

const bannerStyle = {
    backgroundImage: "url('images/background-img-3.jpg')",
    backgroundPosition: "50% 30%"
}

const Banner = () => (
    <div class="banner dark-translucent-bg" style={bannerStyle}>
        <div class="breadcrumb-container">
            <div class="container">
                <ol class="breadcrumb">
                    <li><i class="fa fa-home pr-10"></i><a class="link-dark" href="index.html">Home</a></li>
                    <li class="active">Contact</li>
                </ol>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 text-center col-md-offset-2 pv-20">
                    <h1 class="page-title text-center">Contact Us</h1>
                    <div class="separator"></div>
                    <p class="lead text-center">It would be great to hear from you! Just drop us a line and ask for anything with which you think we could be helpful. We are looking forward to hearing from you!</p>
                    <ul class="list-inline mb-20 text-center">
                        <li><i class="text-default fa fa-map-marker pr-5"></i>7 Boroughbridge Road, Birley, UK</li>
                        <li><a href="tel:+00 1234567890" class="link-dark"><i class="text-default fa fa-phone pl-10 pr-5"></i>+44 079 8708-6739</a></li>
                        <li><a href="mailto:info@theproject.com" class="link-dark"><i class="text-default fa fa-envelope-o pl-10 pr-5"></i>info@domain.com</a></li>
                    </ul>
                    <div class="separator"></div>
                    <ul class="social-links circle animated-effect-1 margin-clear text-center space-bottom">
                        <li class="twitter"><a target="_blank" href="http://www.twitter.com/"><i class="fa fa-twitter"></i></a></li>
                        <li class="skype"><a target="_blank" href="http://www.skype.com/"><i class="fa fa-skype"></i></a></li>
                        <li class="linkedin"><a target="_blank" href="http://www.linkedin.com/"><i class="fa fa-linkedin"></i></a></li>
                        <li class="googleplus"><a target="_blank" href="http://plus.google.com/"><i class="fa fa-google-plus"></i></a></li>
                        <li class="youtube"><a target="_blank" href="http://www.youtube.com/"><i class="fa fa-youtube-play"></i></a></li>
                        <li class="facebook"><a target="_blank" href="http://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Banner;