import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import Destinations from "../pages/Destinations";


class DestinationComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <Destinations />
                <Footer />
			</div>
        );
    }
}
export default DestinationComponent;
