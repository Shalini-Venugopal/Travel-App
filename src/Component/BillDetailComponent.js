import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import BillDetail from "../pages/BillDetail";

class BillDetailComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <BillDetail />
                <Footer />
			</div>
        );
    }
}
export default BillDetailComponent;
