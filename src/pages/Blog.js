import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
    render() {
        return(
            <div>
                <section className="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/blog/img-04.jpg">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h1>Latest News</h1>
                                    <h2>Donec id elit non mi porta gravida at eget metus</h2>
                                    <ol className="tg-breadcrumb">
                                        <li><a href="javascript:void(0);">Home</a></li>
                                        <li className="tg-active">Listing</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main id="tg-main" className="tg-main tg-sectionspace tg-haslayout">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="tg-posts tg-blogposts">
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-05.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">The Healing Power of Adaptogens</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-06.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">New level of the Shop</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-07.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Title With Special Characters</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-08.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Why It’s Never The Perfect Time To Travel</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-09.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">The Epitome of Symbiosis</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-10.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">New level of the Shop</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-11.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Engineers by day, dreamers by night</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-12.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Passionate about design</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-13.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">The Healing Power of Adaptogens</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-14.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">New level of the Shop</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-15.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Title With Special Characters</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <article className="tg-post tg-verticaltop">
                                    <figure><a href="blogdetail.html"><img src="images/blog/img-16.jpg" alt="image description" /></a></figure>
                                    <div className="tg-postcontent">
                                        <div className="tg-postcontenthead">
                                            <div className="tg-author">
                                                <a href="javascript:void(0);"><img src="images/author/img-01.jpg" alt="image description" /></a>
                                                <span>Johny bravo</span>
                                            </div>
                                            <time className="tg-date" datetime="2017-06-12">15-01-2017</time>
                                        </div>
                                        <div className="tg-posttitle">
                                            <h2><a href="blogdetail.html">Why It’s Never The Perfect Time To Travel</a></h2>
                                        </div>
                                        <div className="tg-description">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its distribution of letters...</p>
                                        </div>
                                        <Link to="/blogdetail">Read More...</Link>
                                    </div>
                                </article>
                                <nav className="tg-pagination">
                                    <ul>
                                        <li className="tg-prevpage"><a href="javascript:void(0);"><i className="fa fa-angle-left"></i></a></li>
                                        <li className="tg-active"><a href="javascript:void(0);">1</a></li>
                                        <li><a href="javascript:void(0);">2</a></li>
                                        <li><a href="javascript:void(0);">3</a></li>
                                        <li><a href="javascript:void(0);">4</a></li>
                                        <li className="tg-nextpage"><a href="javascript:void(0);"><i className="fa fa-angle-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        );
    }
}
export default Blog;