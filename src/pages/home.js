import React from 'react';

import Header from '../Component/header';
import Footer from '../Component/footer';
import HeaderStyle from '../Component/headerStyle';
import Search from '../pages/search';
import HomeSlider from '../pages/homeSlider';
import MainSlide from './mainSlide';
// import LoginSignUp from './LoginSignUp';


class Home extends React.Component {
    render () {
        return (
            <div>
                <HeaderStyle />
                <Header />
                <Search />
                <HomeSlider/>
                <MainSlide />
                <Footer />
            </div>
            
        );
    }
}
export default Home;
