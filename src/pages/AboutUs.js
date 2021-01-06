import React from 'react';

class AboutUs extends React.Component {
    render() {
        return(
            <div>
                <section className="tg-parallax tg-innerbanner" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/parallax/bgparallax-05.jpg">
                    <div className="tg-sectionspace tg-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h1>About Us</h1>
                                    <h2>Donec id elit non mi porta gravida at eget metus</h2>
                                    <ol className="tg-breadcrumb">
                                        <li className="tg-active">about us</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><br></br>
                <section className="tg-aboutus">
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className="row">
						<figure data-vide-bg="poster: images/aboutus/img-01.jpg" data-vide-options="position: 0% 50%"></figure>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className="row">
						<div className="tg-textbox">
							<div className="tg-sectiontitle">
								<h2>A Little About Us</h2>
							</div>
							<div className="tg-description">
								<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
								<p>Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-right">
					<div className="row">
						<figure data-vide-bg="poster: images/aboutus/img-02.jpg" data-vide-options="position: 0% 50%"></figure>
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-left">
					<div className="row">
						<div className="tg-textbox">
							<div className="tg-sectiontitle">
								<h2>A Little About Us</h2>
							</div>
							<div className="tg-description">
								<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
								<p>Electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
            </div>
        );
    }
}
export default AboutUs;