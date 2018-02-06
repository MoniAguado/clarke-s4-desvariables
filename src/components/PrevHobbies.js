import React from 'react';

import cinemaSmall from '../images/cinemaSmall.png';
import musicSmall from '../images/musicSmall.png';
import readSmall from '../images/readSmall.png';
import travelSmall from '../images/travelSmall.png';
import sportsSmall from '../images/sportsSmall.png';
import videogameSmall from '../images/videogameSmall.png';

class PrevHobbies extends React.Component {

	render() {
		return (
			<section>
				<section id="hobbies-preview">
					<h2 className="title-section">Hobbies</h2>
					<div className="all-hobbies-preview">
						{this.props.read?
							<img src={readSmall} alt="read hobbie"></img>
						: null}
						{this.props.travel?
							<img src={travelSmall} alt="travel hobbie"></img>
						: null}
						{this.props.games?
							<img src={videogameSmall} alt="game hobbie"></img>
						: null}
						{this.props.sports?
							<img src={sportsSmall} alt="sports hobbie"></img>
						: null}
						{this.props.cinema?
							<img src={cinemaSmall} alt="cinema hobbie"></img>
						: null}
						{this.props.music?
							<img src={musicSmall} alt="music hobbie"></img>
						: null }
					</div>
				</section>
				<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevHobbies;
