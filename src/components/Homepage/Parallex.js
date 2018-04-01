import React from 'react';

const Parallex = () => (
<section class="section pv-40 parallax background-img-1 dark-translucent-bg" style={{backgroundPosition:"50% 60%"}}>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="call-to-action text-center">
                    <div class="row">
                        <div class="col-sm-8 col-sm-offset-2">
                            <h2 class="title">Subscribe to Our Newsletter</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus error pariatur deserunt laudantium nam, mollitia quas nihil inventore, quibusdam?</p>
                            <div class="separator"></div>
                            <form class="form-inline margin-clear">
                                <div class="form-group has-feedback">
                                    <label class="sr-only" for="subscribe2">Email address</label>
                                    <input type="email" class="form-control" id="subscribe2" placeholder="Enter email" name="subscribe2" required=""/> <i class="fa fa-envelope form-control-feedback"></i></div>
                                <button type="submit" class="btn btn-gray-transparent btn-animated margin-clear">Submit <i class="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);

export default Parallex;