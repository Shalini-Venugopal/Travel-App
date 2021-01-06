import React from 'react';

class MainSlide extends React.Component {
    render() {
        return (
            <div>
                <main id="tg-main" className="tg-main tg-haslayout">
                    <section className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-toursdestinations">
                                        <div className="tg-tourdestination tg-tourdestinationbigbox">
                                            <figure>
                                                <a href="#">
                                                    <img src="/images/destination/img-01.jpg" alt="image destinations" />
                                                        <div className="tg-hoverbox">
                                                            <div className="tg-adventuretitle">
                                                                <h2>Ice Adventure Vacations</h2>
                                                            </div>
                                                            <div className="tg-description">
                                                                <p>your best vacation ever</p>
                                                            </div>
                                                        </div>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="tg-tourdestination">
                                            <figure>
                                                <a href="#">
                                                    <img src="/images/destination/img-02.jpg" alt="image destinations" />
                                                        <div className="tg-hoverbox">
                                                            <div className="tg-adventuretitle">
                                                                <h2>National Park</h2>
                                                            </div>
                                                        </div>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="tg-tourdestination">
                                            <figure>
                                                <a href="#">
                                                    <img src="/images/destination/img-03.jpg" alt="image destinations" />
                                                    <div className="tg-hoverbox">
                                                        <div className="tg-adventuretitle">
                                                            <h2>Adult Vacations</h2>
                                                        </div>
                                                    </div>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="tg-sectionspace tg-zerotoppadding tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="tg-features">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="tg-feature">
                                        <div className="tg-featuretitle">
                                            <h2><span>01</span>Luxury Hotels</h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="tg-feature">
                                        <div className="tg-featuretitle">
                                            <h2><span>02</span>Tourist Guide</h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="tg-feature">
                                        <div className="tg-featuretitle">
                                            <h2><span>03</span>Flights Tickets</h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
   
                    
                    <section className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="tg-ourdestination">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                                    <figure><img src="/images/placeholder/placeholder-01.png" alt="image destinations" /></figure>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 tg-verticalmiddle">
                                    <div className="tg-ourdestinationcontent">
                                        <div className="tg-sectiontitle tg-sectiontitleleft">
                                            <h2>Popular Tours</h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam consectetuer adipiscing elit, sed diam nonummy nibh...</p>
                                        </div>
                                        <ul className="tg-destinations">
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>Europe</h3>
                                                <em>(05)</em>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>Africa</h3>
                                                <em>(15)</em>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>Asia</h3>
                                                <em>(12)</em>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>Oceania</h3>
                                                <em>(02)</em>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>North America</h3>
                                                <em>(08)</em>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="tourcatagory.html">
                                                <h3>South America</h3>
                                                <em>(27)</em>
                                            </a>
                                            </li>
                                        </ul>
                                        <a className="tg-btn" href="tourcatagory.html"><span>all destinations</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    

                    <section className="tg-parallax" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-02.jpg">
                        <div className="tg-sectionspace tg-haslayout">
                            <div className="container">
                                <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-calltoaction">
                                        <div className="tg-pattern"><img src="/images/patternw.png" alt="image destination"/></div>
                                        <h2>Get 10% Off on your Next Travel</h2>
                                        <div className="tg-description">
                                            <p>Travel between 22 April to 21 May and get existing offers along with a sure 10% cash discount</p>
                                        </div>
                                        <a className="tg-btn" href="#"><span>Explore Tour</span></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
   
                    <section className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="tg-sectionhead">
                                    <div className="tg-sectiontitle">
                                        <h2>Meet The Guides</h2>
                                    </div>
                                    <div className="tg-description">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam consectetuer.</p>
                                    </div>
                                </div>
                                <div id="tg-guidesslider" className="tg-guidesslider tg-guides owl-carousel">
                                    <div className="item tg-guide">
                                        <figure><img src="/images/Guides/img-01.jpg" alt="image destination"/></figure>
                                        <div className="tg-guidecontent">
                                            <div className="tg-guidecontenthead">
                                            <h3>Martin Blake</h3>
                                            <h4>Adventure Master</h4>
                                            <ul className="tg-socialicons tg-socialiconsvtwo">
                                                <li><a href="#"><i className="icon-facebook-logo-outline"></i></a></li>
                                                <li><a href="#"><i className="icon-instagram-social-outlined-logo"></i></a></li>
                                                <li><a href="#"><i className="icon-twitter-social-outlined-logo"></i></a></li>
                                            </ul>
                                            </div>
                                            <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item tg-guide">
                                        <figure><img src="/images/Guides/img-02.jpg" alt="image destination" /></figure>
                                        <div className="tg-guidecontent">
                                            <div className="tg-guidecontenthead">
                                            <h3>Martin Blake</h3>
                                            <h4>Adventure Master</h4>
                                            <ul className="tg-socialicons tg-socialiconsvtwo">
                                                <li><a href="#"><i className="icon-facebook-logo-outline"></i></a></li>
                                                <li><a href="#"><i className="icon-instagram-social-outlined-logo"></i></a></li>
                                                <li><a href="#"><i className="icon-twitter-social-outlined-logo"></i></a></li>
                                            </ul>
                                            </div>
                                            <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item tg-guide">
                                        <figure><img src="/images/Guides/img-03.jpg" alt="image destination" /></figure>
                                        <div className="tg-guidecontent">
                                            <div className="tg-guidecontenthead">
                                            <h3>Martin Blake</h3>
                                            <h4>Adventure Master</h4>
                                            <ul className="tg-socialicons tg-socialiconsvtwo">
                                                <li><a href="#"><i className="icon-facebook-logo-outline"></i></a></li>
                                                <li><a href="#"><i className="icon-instagram-social-outlined-logo"></i></a></li>
                                                <li><a href="#"><i className="icon-twitter-social-outlined-logo"></i></a></li>
                                            </ul>
                                            </div>
                                            <div className="tg-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
 
                    <section className="tg-parallax" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-03.jpg">
                        <div className="tg-sectionspace tg-haslayout">
                            <div className="container">
                                <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-ourpartners">
                                        <div className="tg-pattern"><img src="/images/patternw.png" alt="image destination"/></div>
                                        <h2>Our Partners</h2>
                                        <ul className="tg-partners">
                                            <li>
                                            <figure><a href="#"><img src="/images/partners/img-01.png" alt="image destinations"/></a></figure>
                                            </li>
                                            <li>
                                            <figure><a href="#"><img src="/images/partners/img-02.png" alt="image destinations"/></a></figure>
                                            </li>
                                            <li>
                                            <figure><a href="#"><img src="/images/partners/img-03.png" alt="image destinations"/></a></figure>
                                            </li>
                                            <li>
                                            <figure><a href="#"><img src="/images/partners/img-03.png" alt="image destinations"/></a></figure>
                                            </li>
                                            <li>
                                            <figure><a href="#"><img src="/images/partners/img-05.png" alt="image destinations"/></a></figure>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
   
                </main>
            </div>
        );
    }
}
export default MainSlide;