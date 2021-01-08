import React from 'react';

class ShopDetail extends React.Component {
    render() {
        return(
            <div>
                <section className="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-08.jpg">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h1>Product Detail</h1>
                                    <h2>Donec id elit non mi porta gravida at eget metus</h2>
                                    <ol className="tg-breadcrumb">
                                        <li><a href="javascript:void(0);">Home</a></li>
                                        <li><a href="javascript:void(0);">Shop</a></li>
                                        <li className="tg-active">Shop detail</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main id="tg-main" className="tg-main tg-haslayout">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="tg-productdetail">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-5">
                                        <div id="tg-productdetailsider" className="tg-productdetailsider owl-carousel">
                                            <figure className="item">
                                                <img src="images/products/img-10.jpg" alt="image description" />
                                            </figure>

                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-7">
                                        <div className="tg-productinfo">
                                            <h3>Simple Fabric Bag</h3>
                                            <div className="tg-pricearea">
                                                <del>$2,800</del>
                                                <h4>$2,500</h4>
                                            </div>
                                            <div className="tg-description">
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                                            </div>
                                            <div className="tg-quantitycolor">
                                                <form className="tg-formtheme tg-formquantity">
                                                    <fieldset>
                                                        <div className="form-group">
                                                            <input type="number" className="form-control" name="numbers" placeholder="2" />
                                                        </div>
                                                        <div className="form-group">
                                                            <span className="tg-select">
                                                                <select>
                                                                    <option>Choose Color</option>
                                                                    <option>Blue</option>
                                                                    <option>Black</option>
                                                                    <option>Green</option>
                                                                    <option>Grey</option>
                                                                    <option>White</option>
                                                                </select>
                                                            </span>
                                                        </div>
                                                        <div className="form-group">
                                                            <a className="tg-btnaddtocart" href="javascript:void(0);">
                                                                <i className="icon-icons240"></i>
                                                                <span>add to bag</span>
                                                            </a>
                                                        </div>
                                                    </fieldset>
                                                    <fieldset>
                                                        <ul className="tg-likeshare">
                                                            <li className="tg-shareicon">
                                                                <a href="javascript:void(0);"><i className="icon-share-button-outline"></i><span>share</span></a>
                                                                <ul className="tg-share">
                                                                    <li><a href="javascript:void(0);"><i className="icon-twitter"></i></a></li>
                                                                    <li><a href="javascript:void(0);"><i className="icon-facebook"></i></a></li>
                                                                    <li><a href="javascript:void(0);"><i className="icon-pinterest"></i></a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="javascript:void(0);"><i className="icon-heart"></i><span>save to wish list</span></a></li>
                                                        </ul>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>			
                </main>                

            </div>
        );
    }
}
export default ShopDetail;

                