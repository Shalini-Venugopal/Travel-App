import React from 'react';

class HomeSlider extends React.Component {
    render() {
        return (
            <div className="tg-bannerholder">
			<div className="tg-slidercontent">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<h1>Experience the Wonder</h1>
							<h2>People don’t take trips, trips take People</h2>
							<form className="tg-formtheme tg-formtrip">
								<fieldset>
									<div className="form-group">
										<div className="tg-select">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Destinations">Destinations</option>
												<option data-tokens="All Areas">All Areas</option>
												<option data-tokens="Bayonne">Bayonne</option>
												<option data-tokens="Greenville">Greenville</option>
												<option data-tokens="Manhattan">Manhattan</option>
												<option data-tokens="Queens">Queens</option>
												<option data-tokens="The Heights">The Heights</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="tg-select">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Adventure Type">Adventure Type</option>
												<option data-tokens="Ice Adventure Vacations">Ice Adventure Vacations</option>
												<option data-tokens="National Park">National Park</option>
												<option data-tokens="Adult Vacations">Adult Vacations</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="tg-select">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Travel Month">Travel Month</option>
												<option data-tokens="January">January</option>
												<option data-tokens="February">February</option>
												<option data-tokens="March">March</option>
												<option data-tokens="April">April</option>
												<option data-tokens="May">May</option>
												<option data-tokens="June">June</option>
												<option data-tokens="July">July</option>
												<option data-tokens="August">August</option>
												<option data-tokens="September">September</option>
												<option data-tokens="October">October</option>
												<option data-tokens="November">November</option>
												<option data-tokens="December">December</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="tg-select">
											<select className="selectpicker" data-live-search="true" data-width="100%">
												<option data-tokens="Duration">Duration</option>
												<option data-tokens="2 weeks">2 weeks</option>
												<option data-tokens="3 weeks">3 weeks</option>
												<option data-tokens="4 weeks">4 weeks</option>
												<option data-tokens="5 weeks">5 weeks</option>
												<option data-tokens="6 weeks">6 weeks</option>
												<option data-tokens="7 weeks">7 weeks</option>
												<option data-tokens="8 weeks">8 weeks</option>
												<option data-tokens="9 weeks">9 weeks</option>
												<option data-tokens="10 weeks">10 weeks</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<button className="tg-btn" type="submit"><span>find tours</span></button>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div id="tg-homeslider" className="tg-homeslider owl-carousel tg-haslayout">
				<img className="item" src="girl_Image.jpg" data-vide-options="position: 0% 50%"></img>
				<figure className="item" data-vide-bg="poster: images/slider/img-02.jpg" data-vide-options="position: 0% 50%"></figure>
				<figure className="item" data-vide-bg="poster: images/slider/img-03.jpg" data-vide-options="position: 0% 50%"></figure>
			</div>
		</div>
        );
    }
}
export default HomeSlider;