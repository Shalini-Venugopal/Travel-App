import React from 'react';

class Login extends React.Component {
    render() {
        return(
            // <div style="background-image: url(../images/tours/img-01.jpg);">
            <div>
            <div className="tg-contentarea tg-themescrollbar">
			<div className="tg-scrollbar">
				<button type="button" className="close">x</button>
				<div className="tg-logincontent">
					<nav id="tg-loginnav" className="tg-loginnav">
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Contact Us</a></li>
							<li><a href="#">My Account</a></li>
							<li><a href="#">My Wishlist</a></li>
						</ul>
					</nav>
					<div className="tg-themetabs">
						<ul className="tg-navtbs" role="tablist">
							<li role="presentation" className="active"><a href="#home" data-toggle="tab">Already Registered</a></li>
							<li role="presentation"><a href="#profile" data-toggle="tab">New to Travleu ?</a></li>
						</ul>
						<div className="tg-tabcontent tab-content">
							<div role="tabpanel" className="tab-pane active fade in" id="home">
								<form className="tg-formtheme tg-formlogin">
									<fieldset>
										<div className="form-group">
											<label>Name or Email <sup>*</sup></label>
											<input type="text" name="firstname" className="form-control" placeholder=""/>
										</div>
										<div className="form-group">
											<label>Password <sup>*</sup></label>
											<input type="password" name="password" className="form-control" placeholder=""/>
										</div>
										<div className="form-group">
											<div className="tg-checkbox">
												<input type="checkbox" name="remember" id="rememberpass"/>
												<label htmlFor="rememberpass">Remember Me</label>
											</div>
											<span><a href="#">Lost your password?</a></span>
										</div>
										<button className="tg-btn tg-btn-lg"><span>update profile</span></button>
									</fieldset>
								</form>
							</div>
							<div role="tabpanel" className="tab-pane fade" id="profile">
								<form className="tg-formtheme tg-formlogin">
									<fieldset>
										<div className="form-group">
											<label>Name or Email <sup>*</sup></label>
											<input type="text" name="firstname" className="form-control" placeholder=""/>
										</div>
										<div className="form-group">
											<label>Password <sup>*</sup></label>
											<input type="password" name="password" className="form-control" placeholder=""/>
										</div>
										<div className="form-group">
											<label>Confirm Password <sup>*</sup></label>
											<input type="password" name="password" className="form-control" placeholder=""/>
										</div>
										<div className="form-group">
											<div className="tg-checkbox">
												<input type="checkbox" name="remember" id="remember"/>
												<label htmlFor="remember">Remember Me</label>
											</div>
											<span><a href="#">Lost your password?</a></span>
										</div>
										<button className="tg-btn tg-btn-lg"><span>update profile</span></button>
									</fieldset>
								</form>
							</div>
						</div>
					</div>
					<div className="tg-shareor"><span>or</span></div>
					<div className="tg-signupwith">
						<h2>Sign in With...</h2>
						<ul className="tg-sharesocialicon">
							<li className="tg-facebook"><a href="#"><i className="icon-facebook-1"></i><span>Facebook</span></a></li>
							<li className="tg-twitter"><a href="#"><i className="icon-twitter-1"></i><span>Twitter</span></a></li>
							<li className="tg-googleplus"><a href="#"><i className="icon-google4"></i><span>Google+</span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
        </div>


        );
    }
}

export default Login;