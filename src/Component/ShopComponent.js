import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import Shop from "../pages/Shop";


class ShopComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <Shop />
                <Footer />
			</div>
        );
    }
}
export default ShopComponent;
