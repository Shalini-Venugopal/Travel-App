import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import ShopDetail from '../pages/ShopDetail';


class ShopDetailComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <ShopDetail />
                <Footer />
			</div>
        );
    }
}
export default ShopDetailComponent;
