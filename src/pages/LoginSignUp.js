import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import Login from "../pages/Login";


class LoginSignUp extends React.Component {

    constructor(props) {
		super(props);
    }
	render() {
        return(
			<div>
				<Header />
				<HeaderStyle />
                <Login />
                <Footer />
			</div>
        );
    }
}
export default LoginSignUp;
