import React from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from "../Component/headerStyle";
import BlogDetail from "../pages/BlogDetail";

class BlogDetailComponent extends React.Component {
	render() {
        return(
			<div>
				<Header />
                <HeaderStyle />
                <BlogDetail />
                <Footer />
			</div>
        );
    }
}
export default BlogDetailComponent;
