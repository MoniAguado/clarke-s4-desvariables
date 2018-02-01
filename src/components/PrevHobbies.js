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
					<img id="read" src={readSmall} alt="read hobbie"/>
					<img id="travel" src={travelSmall} alt="travel hobbie"/>
					<img id="game" src={videogameSmall} alt="game hobbie"/>
					<img id="sports" src={sportsSmall} alt="sports hobbie"/>
					<img id="cinema" src={cinemaSmall} alt="cinema hobbie"/>
					<img id="music" src={musicSmall} alt="music hobbie"/>
				</div>
			</section>
			<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevHobbies;
