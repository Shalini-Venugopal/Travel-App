import React from 'react';

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <section className="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-05.jpg">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h1>Contact Us</h1>
                                    <h2>Donec id elit non mi porta gravida at eget metus</h2>
                                    <ol className="tg-breadcrumb">
                                        <li><a href="javascript:void(0);">Home</a></li>
                                        <li className="tg-active">Contact Us</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div id="tg-content" className="tg-content">
                                    <ul className="tg-contactinfo">
                                        <li>
                                            <span className="tg-contactinfoicon"><i className="fa fa-commenting-o"></i></span>
                                            <h2>Get in Touch</h2>
                                            <span>Telephone: +51 900 321 4564</span>
                                            <span>Mobile: +501 860 3210</span>
                                            <strong><a href="mailto:hello@Travleu.com">hello@Travleu.com</a></strong>
                                        </li>
                                        <li>
                                            <span className="tg-contactinfoicon"><i className="icon-map-marker"></i></span>
                                            <h2>Visit Our Location</h2>
                                            <address>Manhatta Hall Veerpolder 7 2361 Empor Ltd 1258, Melbourne, Australia</address>
                                            <strong><a href="javascript:void(0);">Get Directions</a></strong>
                                        </li>
                                        <li>
                                            <span className="tg-contactinfoicon"><i className="icon-briefcase"></i></span>
                                            <h2>Looking for a career?</h2>
                                            <div className="tg-description"><p>perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p></div>
                                            <strong><a href="mailto:careers@travleu.com">careers@travleu.com</a></strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
export default ContactUs;