import React from 'react';

const MainContent = () => (
    <section className="main-container">
    <div className="container">
        <div className="row">
            <div className="main col-md-12 space-bottom">
                <h2 className="title">Drop Us a Line</h2>
                <div className="row">
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quisquam.</p>
                        <div className="alert alert-success hidden" id="MessageSent">We have received your message, we will contact you very soon.</div>
                        <div className="alert alert-danger hidden" id="MessageNotSent">Oops! Something went wrong please refresh the page and try again.</div>
                        <div className="contact-form">
                            <form id="contact-form" className="margin-clear" role="form">
                                <div className="form-group has-feedback">
                                    <label for="name">Name*</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder=""/> <i className="fa fa-user form-control-feedback"></i></div>
                                <div className="form-group has-feedback">
                                    <label for="email">Email*</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder=""/> <i className="fa fa-envelope form-control-feedback"></i></div>
                                <div className="form-group has-feedback">
                                    <label for="subject">Subject*</label>
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder=""/> <i className="fa fa-navicon form-control-feedback"></i></div>
                                <div className="form-group has-feedback">
                                    <label for="message">Message*</label>
                                    <textarea className="form-control" rows="6" id="message" name="message" placeholder=""></textarea> <i className="fa fa-pencil form-control-feedback"></i></div>
                                <input type="submit" value="Submit" className="submit-button btn btn-default"/>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="map-canvas"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default MainContent;