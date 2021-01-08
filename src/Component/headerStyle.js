import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                                        <i><img src="/images/icons/icon-01.png" alt="image destinations" /></i>
                                        <span>1-800-321-6543</span>
                                    </li>
                                    <li>
                                        <i><img src="/images/icons/icon-02.png" alt="image destinations" /></i>
                                        <span>CHOOSE YOUR EXPERIENCE <a href="#">Discover more</a></span>
                                    </li>
                                </ul>
                            </nav>
                            <div className="tg-addnavcartsearch">
                                <nav className="tg-addnav">
                                    <ul>
                                        <li><Link to="/aboutus">about</Link></li>
                                        <li><Link to="/contactus">contact</Link></li>
                                    </ul>
                                </nav>
                                <nav className="tg-cartsearch">
                                    <ul>
                                        <li>
                                        <a href="#"><img src="/images/icons/icon-03.png" alt="image destinations" /></a>
                                        <div className="tg-cartitems">
                                            <div className="tg-cartlistitems">
                                                <h3>Shopping Cart</h3>
                                                <div className="tg-cartitem">
                                                    <figure className="tg-itemimg"><img src="/images/products/img-11.jpg" alt="image description" /></figure>
                                                    <div className="tg-contentbox">
                                                    <div className="tg-producthead">
                                                        <em>x 2</em>
                                                        <h4><a href="#">Switzerland – 12 Days<span>Hiking Tour</span></a></h4>
                                                    </div>
                                                    <span>$600</span>
                                                    </div>
                                                </div>
                                                <div className="tg-cartitem">
                                                    <figure className="tg-itemimg"><img src="/images/products/img-11.jpg" alt="image description" /></figure>
                                                    <div className="tg-contentbox">
                                                    <div className="tg-producthead">
                                                        <em>x 2</em>
                                                        <h4><a href="#">Switzerland – 12 Days<span>Hiking Tour</span></a></h4>
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
                                        <li><a href="#tg-search"><img src="/images/icons/icon-04.png" alt="image destinations" /></a></li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                            <div className="tg-navigationarea tg-headerfixed">
                            <strong className="tg-logo"><a href="index.html"><img src="/images/logo.png" alt="company logo here" /></a></strong>
                            <div className="tg-socialsignin">
                                <ul className="tg-socialicons">
                                    <li><a href="#"><i className="icon-facebook-logo-outline"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram-social-outlined-logo"></i></a></li>
                                    <li><a href="#"><i className="icon-twitter-social-outlined-logo"></i></a></li>
                                </ul>
                                <div className="tg-userbox">
                                    <a id="tg-btnsignin" className="tg-btn" href="/signup"><span>sign in</span></a>
                                    <div className="dropdown tg-dropdown">
                                        <button className="tg-btndropdown" id="tg-dropdowndashboard" type="button" data-toggle="dropdown">
                                        <img src="/images/author/img-01.jpg" alt="image description" />
                                        <span>john smith</span>
                                        <i className="fa fa-caret-down"></i>
                                        </button>
                                        <ul className="dropdown-menu tg-dropdownusermenu" aria-labelledby="tg-dropdowndashboard">
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="dashboard.html">Edit Profile</a></li>
                                        <li><a href="#">Sign Out</a></li>
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
                                        
                                        <Link to="/">Home</Link>
                                        </li>
                                        <li><Link to="/destination">Destination</Link></li>
                                        <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <Link to="/billdetail">Billing Detail</Link>
                                        </li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
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