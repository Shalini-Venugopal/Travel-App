import React from 'react';

class BillDetail extends React.Component {
    render() {
        return(
            <div>
                <section className="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-09.jpg">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h1>Billing Details</h1>
                                    <h2>Donec id elit non mi porta gravida at eget metus</h2>
                                    <ol className="tg-breadcrumb">
                                        <li><a href="javascript:void(0);">Home</a></li>
                                        <li className="tg-active">Billing Detail</li>
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
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div id="tg-content" className="tg-content">
                                        <div className="tg-billingdetail">
                                            <form className="tg-formtheme tg-formbillingdetail">
                                                <fieldset>
                                                    <div className="tg-bookingdetail">
                                                        <div className="tg-box">
                                                            <div className="tg-heading">
                                                                <h3>Billing Details</h3>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                            <div className="row">
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>First name <sup>*</sup></label>
                                                                        <input type="text" name="firstname" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Last name <sup>*</sup></label>
                                                                        <input type="text" name="lastname" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                    <div className="form-group">
                                                                        <label>Company name <sup>*</sup></label>
                                                                        <input type="text" name="companyname" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                    <div className="form-group">
                                                                        <label>Country<sup>*</sup></label>
                                                                        <span className="tg-select">
                                                                            <select>
                                                                                <option value="">Select Country</option>
                                                                                <option value="aberdeen">Aberdeen</option>
                                                                                <option value="aldershot">Aldershot</option>
                                                                                <option value="altrincham">Altrincham</option>
                                                                                <option value="aylesbury">Aylesbury</option>
                                                                                <option value="bamber">Bamber</option>
                                                                                <option value="bangor">Bangor</option>
                                                                                <option value="batley">Batley</option>
                                                                                <option value="bebingto">Bebingto</option>
                                                                                <option value="bedford">Bedford</option>
                                                                                <option value="birmingham">Birmingham</option>
                                                                                <option value="blackpool">Blackpool</option>
                                                                                <option value="brentwood">Brentwood</option>
                                                                                <option value="bristol">Bristol</option>
                                                                                <option value="cardiff">Cardiff</option>
                                                                                <option value="carlisle">Carlisle</option>
                                                                                <option value="crawley">Crawley</option>
                                                                                <option value="darlington">Darlington</option>
                                                                                <option value="eastleigh">Eastleigh</option>
                                                                                <option value="edinburg">Edinburg</option>
                                                                                <option value="esher">Esher</option>
                                                                                <option value="glasgow-sco">Glasgow SCO</option>
                                                                                <option value="guildford">Guildford</option>
                                                                                <option value="halesowen">Halesowen</option>
                                                                                <option value="halifax">Halifax</option>
                                                                                <option value="hamilton">Hamilton</option>
                                                                                <option value="leeds">Leeds</option>
                                                                                <option value="leicester">Leicester</option>
                                                                                <option value="liverpool">Liverpool</option>
                                                                                <option value="london">London</option>
                                                                                <option value="louisville">Louisville</option>
                                                                                <option value="manchester">Manchester</option>
                                                                                <option value="sheffield">Sheffield</option>
                                                                            </select>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                    <div className="form-group">
                                                                        <label>State / County <sup>*</sup></label>
                                                                        <input type="text" name="statecountry" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Town / City <sup>*</sup></label>
                                                                        <input type="text" name="towncity" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Postcode / ZIP <sup>*</sup></label>
                                                                        <input type="text" name="postcode" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Email Address <sup>*</sup></label>
                                                                        <input type="email" name="email" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Phone Number <sup>*</sup></label>
                                                                        <input type="text" name="phonename" className="form-control" placeholder="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tg-bookingdetail">
                                                        <div className="tg-box tg-addtionalinfo">
                                                            <div className="tg-heading">
                                                                <h3>Additional Information</h3>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Your Comment</label>
                                                                <textarea placeholder="Notes about your order, e.g."></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="tg-box tg-yourorder">
                                                            <div className="tg-heading">
                                                                <h3>Your Order</h3>
                                                            </div>
                                                            <div className="tg-widgetpersonprice">
                                                                <div className="tg-widgetcontent">
                                                                    <ul>
                                                                        <li className="tg-personprice"><div className="tg-perperson"><span>Person Base Price  (5 x $3,000.00)</span><em>$3,000.00</em></div></li>
                                                                        <li><span>Sub Total</span><em>$3,000.00</em></li>
                                                                        <li><span>Tax Rate</span><em>$10</em></li>
                                                                        <li><span>Tax Due</span><em>$300</em></li>
                                                                        <li className="tg-totalprice"><div className="tg-totalpayment"><span>Total Price</span><em>$3,000.00</em></div></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset className="tg-paymentarea">
                                                    <div id="tg-accordion" className="tg-accordion" role="tablist" aria-multiselectable="true">
                                                        <div className="tg-panel">
                                                            <h4 className="tg-radio">
                                                                <input type="radio" id="bank-transfer" name="paymenttype" checked />
                                                                <label for="bank-transfer">Direct Bank Transfer</label>
                                                            </h4>
                                                            <div className="tg-panelcontent">
                                                                <div className="tg-description">
                                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tg-panel">
                                                            <h4 className="tg-radio">
                                                                <input type="radio" id="cash" name="paymenttype" />
                                                                <label for="cash">Cash On Delivery</label>
                                                            </h4>
                                                            <div className="tg-panelcontent">
                                                                <div className="tg-description">
                                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tg-panel">
                                                            <h4 className="tg-radio">
                                                                <input type="radio" id="paypal" name="paymenttype" />
                                                                <label for="paypal">PayPal Express Checkout </label>
                                                                <img src="images/paypal.jpg" alt="image description" />
                                                            </h4>
                                                            <div className="tg-panelcontent">
                                                                <div className="tg-description">
                                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tg-panel">
                                                            <h4 className="tg-radio">
                                                                <input type="radio" id="creditcard" name="paymenttype" />
                                                                <label for="creditcard"> Credit Card (Stripe)</label>
                                                                <img src="images/visastrip.jpg" alt="image description" />
                                                            </h4>
                                                            <div className="tg-panelcontent">
                                                                <div className="tg-description">
                                                                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                                <fieldset>
                                                    <button className="tg-btn" type="submit"><span>place order</span></button>
                                                </fieldset>
                                            </form>
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
export default BillDetail;