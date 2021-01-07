import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import TourCategory from "../pages/TourCategory";


class TourCategoryComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <TourCategory />
                <Footer />
			</div>
        );
    }
}
export default TourCategoryComponent;
