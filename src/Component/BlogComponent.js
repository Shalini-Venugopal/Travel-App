import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import Blog from "../pages/Blog";

class BlogComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <Blog />
                <Footer />
			</div>
        );
    }
}
export default BlogComponent;
