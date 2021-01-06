import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import AboutUs from "../pages/AboutUs";


class AboutUsComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <AboutUs />
                <Footer />
			</div>
        );
    }
}
export default AboutUsComponent;
