import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Navbar } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
             <nav id="menu">
            <ul>
                <li><a href="javascript:void(0);">Home</a>
                    <ul>
                        <li><a href="index.html">Home ~ Modern</a></li>
                        <li><a href="indexv2.html">Home ~ Full Screen</a></li>
                        <li><a href="indexv3.html">Home ~ Creative</a></li>
                        <li><a href="indexv4.html">Home ~ Simple</a></li>
                        <li><a href="indexv5.html">Home ~ Video</a></li>
                    </ul>
                </li>
                <li><a href="destinations.html">Destinations</a></li>
                <li><a href="javascript:void(0);">Listings</a>
                    <div>
                        <ul>
                            <li><a href="listingvone.html">list style one</a></li>
                            <li><a href="listingvtwo.html">list style two</a></li>
                            <li><a href="listingvthree.html">list style three</a></li>
                            <li><a href="listingvfour.html">list style four</a></li>
                            <li><a href="listingvfive.html">list style five</a></li>
                            <li><a href="listingvsix.html">list style six</a></li>
                        </ul>
                        <div className="tg-sliderarea">
                            <h2>Popular Tours</h2>
                            <div className="tg-trendingtripsslider tg-trendingtrips owl-carousel">
                                <div className="item tg-trendingtrip">
                                    <figure>
                                        <a href="#">
                                            <img src="http://wahabali.com/work/travelu/images/tours/img-05.jpg" alt="image destinations"/>
                                            <div className="tg-hover">
                                                <span className="tg-stars"><span></span></span>
                                                <span className="tg-tourduration">7 Days</span>
                                                <span className="tg-locationname">Paris</span>
                                                <div className="tg-pricearea">
                                                    <span>from</span>
                                                    <h4>$600</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </figure>
                                </div>
                                <div className="item tg-trendingtrip">
                                    <figure>
                                        <a href="javascript:void(0);">
                                            <img src="http://wahabali.com/work/travelu/images/tours/img-06.jpg" alt="image destinations" />
                                            <div className="tg-hover">
                                                <span className="tg-stars"><span></span></span>
                                                <span className="tg-tourduration">7 Days</span>
                                                <span className="tg-locationname">Paris</span>
                                                <div className="tg-pricearea">
                                                    <span>from</span>
                                                    <h4>$600</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </figure>
                                </div>
                                <div className="item tg-trendingtrip">
                                    <figure>
                                        <a href="javascript:void(0);">
                                            <img src="http://wahabali.com/work/travelu/images/tours/img-07.jpg" alt="image destinations" />
                                            <div className="tg-hover">
                                                <span className="tg-stars"><span></span></span>
                                                <span className="tg-tourduration">7 Days</span>
                                                <span className="tg-locationname">Paris</span>
                                                <div className="tg-pricearea">
                                                    <span>from</span>
                                                    <h4>$600</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </figure>
                                </div>
                                <div className="item tg-trendingtrip">
                                    <figure>
                                        <a href="javascript:void(0);">
                                            <img src="http://wahabali.com/work/travelu/images/tours/img-08.jpg" alt="image destinations" />
                                            <div className="tg-hover">
                                                <span className="tg-stars"><span></span></span>
                                                <span className="tg-tourduration">7 Days</span>
                                                <span className="tg-locationname">Paris</span>
                                                <div className="tg-pricearea">
                                                    <span>from</span>
                                                    <h4>$600</h4>
                                                </div>
                                            </div>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="javascript:void(0);">Pages</a>
                    <ul>
                        <li><a href="faqs.html">FAQ’s</a></li>
                        <li><a href="packages.html">Table</a></li>
                        <li><a href="aboutus.html">About Us</a></li>
                        <li><a href="contactus.html">Contact us</a></li>
                        <li><a href="billingdetail.html">Billing Detail</a></li>
                        <li><a href="404error.html">404 Error</a></li>
                        <li><a href="comingsoon.html">Coming Soon</a></li>
                        <li><a href="cart.html">cart</a></li>
                        <li>
                            <a href="javascript:void(0);">Tours</a>
                            <ul>
                                <li><a href="tourcatagory.html">Tour Catagory</a></li>
                                <li><a href="tourbookingdetail.html">Tour Detail</a></li>
                                <li><a href="tourpaymentdetail.html">Tour Payment</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="javascript:void(0);">Shop</a>
                    <ul>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shopdetail.html">Shop Detail</a></li>
                        <li><a href="cart.html">Cart</a></li>
                    </ul>
                </li>
                <li><a href="javascript:void(0);">Blog</a>
                    <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blogdetail.html">Blog Detail</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

            
            
            </div>
            
        );
    }
}
export default Header;