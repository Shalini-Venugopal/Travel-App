import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import ContactUs from "../pages/ContactUs";


class ContactUsComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <ContactUs />
                <Footer />
			</div>
        );
    }
}
export default ContactUsComponent;
