import React, {Component} from 'react';

class HeaderStyle extends Component {
    render(){
        return(
            <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
                <header id="tg-header" className="tg-header tg-haslayout">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="tg-topbar">
                            <nav className="tg-infonav">
                                <ul>
                                    <li>
                                        <i><img src="http://wahabali.com/work/travelu/images/icons/icon-01.png" alt="image destinations" /></i>
                                        <span>1-800-321-6543</span>
                                    </li>
                                    <li>
                                        <i><img src="http://wahabali.com/work/travelu/images/icons/icon-02.png" alt="image destinations" /></i>
                                        <span>CHOOSE YOUR EXPERIENCE <a href="javascript:void(0);">Discover more</a></span>
                                    </li>
                                </ul>
                            </nav>
                            <div className="tg-addnavcartsearch">
                                <nav className="tg-addnav">
                                    <ul>
                                        <li><a href="aboutus.html">about</a></li>
                                        <li><a href="contactus.html">contact</a></li>
                                    </ul>
                                </nav>
                                <nav className="tg-cartsearch">
                                    <ul>
                                        <li>
                                        <a href="javascript:void(0);"><img src="http://wahabali.com/work/travelu/images/icons/icon-03.png" alt="image destinations" /></a>
                                        <div className="tg-cartitems">
                                            <div className="tg-cartlistitems">
                                                <h3>Shopping Cart</h3>
                                                <div className="tg-cartitem">
                                                    <figure className="tg-itemimg"><img src="http://wahabali.com/work/travelu/images/products/img-11.jpg" alt="image description" /></figure>
                                                    <div className="tg-contentbox">
                                                    <div className="tg-producthead">
                                                        <em>x 2</em>
                                                        <h4><a href="javascript:void(0);">Switzerland – 12 Days<span>Hiking Tour</span></a></h4>
                                                    </div>
                                                    <span>$600</span>
                                                    </div>
                                                </div>
                                                <div className="tg-cartitem">
                                                    <figure className="tg-itemimg"><img src="http://wahabali.com/work/travelu/images/products/img-11.jpg" alt="image description" /></figure>
                                                    <div className="tg-contentbox">
                                                    <div className="tg-producthead">
                                                        <em>x 2</em>
                                                        <h4><a href="javascript:void(0);">Switzerland – 12 Days<span>Hiking Tour</span></a></h4>
                                                    </div>
                                                    <span>$600</span>
                                                    </div>
                                                </div>
                                                <div className="tg-subtotal">
                                                    <h2>Subtotal</h2>
                                                    <span>$830</span>
                                                </div>
                                            </div>
                                            <div className="tg-btnarea">
                                                <a className="tg-btn" href="#"><span>view cart</span></a>
                                            </div>
                                        </div>
                                        </li>
                                        <li><a href="#tg-search"><img src="http://wahabali.com/work/travelu/images/icons/icon-04.png" alt="image destinations" /></a></li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                            <div className="tg-navigationarea tg-headerfixed">
                            <strong className="tg-logo"><a href="index.html"><img src="http://wahabali.com/work/travelu/images/logo.png" alt="company logo here" /></a></strong>
                            <div className="tg-socialsignin">
                                <ul className="tg-socialicons">
                                    <li><a href="javascript:void(0);"><i class="icon-facebook-logo-outline"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="icon-instagram-social-outlined-logo"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="icon-twitter-social-outlined-logo"></i></a></li>
                                </ul>
                                <div className="tg-userbox">
                                    <a id="tg-btnsignin" className="tg-btn" href="#tg-loginsingup"><span>sign in</span></a>
                                    <div className="dropdown tg-dropdown">
                                        <button className="tg-btndropdown" id="tg-dropdowndashboard" type="button" data-toggle="dropdown">
                                        <img src="http://wahabali.com/work/travelu/images/author/img-01.jpg" alt="image description" />
                                        <span>john smith</span>
                                        <i className="fa fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu tg-dropdownusermenu" aria-labelledby="tg-dropdowndashboard">
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="dashboard.html">Edit Profile</a></li>
                                        <li><a href="javascript:void(0);">Sign Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <nav id="tg-nav" className="tg-nav">
                                <div className="navbar-header">
                                    <a href="#menu" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    </a>
                                </div>
                                <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                    <ul>
                                        <li className="menu-item-has-children current-menu-item">
                                        <a href="javascript:void(0);">Home</a>
                                        <ul className="sub-menu">
                                            <li className="current-menu-item"><a href="index.html">Home ~ Modern</a></li>
                                            <li><a href="indexv2.html">Home ~ Full Screen</a></li>
                                            <li><a href="indexv3.html">Home ~ Creative</a></li>
                                            <li><a href="indexv4.html">Home ~ Simple</a></li>
                                            <li><a href="indexv5.html">Home ~ Video</a></li>
                                        </ul>
                                        </li>
                                        <li><a href="destinations.html">destinations</a></li>
                                        <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="javascript:void(0);">listings</a>
                                        <div className="mega-menu">
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
                                                        <a href="javascript:void(0);">
                                                            <img src="http://wahabali.com/work/travelu/images/tours/img-05.jpg" alt="image destinations" />
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
                                        <li className="menu-item-has-children">
                                        <a href="javascript:void(0);">pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="faqs.html">FAQ’s</a></li>
                                            <li><a href="packages.html">Table</a></li>
                                            <li><a href="aboutus.html">About Us</a></li>
                                            <li><a href="contactus.html">Contact us</a></li>
                                            <li><a href="billingdetail.html">Billing Detail</a></li>
                                            <li><a href="404error.html">404 Error</a></li>
                                            <li><a href="comingsoon.html">Coming Soon</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li className="menu-item-has-children">
                                                <a href="javascript:void(0);">Tours</a>
                                                <ul className="sub-menu">
                                                    <li><a href="tourcatagory.html">Tour Catagory</a></li>
                                                    <li><a href="tourbookingdetail.html">Tour Detail</a></li>
                                                    <li><a href="tourpaymentdetail.html">Tour Payment</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        </li>
                                        <li><a href="shop.html">shop</a></li>
                                        <li><a href="blog.html">blog</a></li>
                                    </ul>
                                </div>
                            </nav>
                            </div>
                        </div>
                    </div>
                </header>
                </div>
        );
    }
}
export default HeaderStyle;