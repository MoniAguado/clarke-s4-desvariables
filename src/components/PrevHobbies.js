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
				//En teroría aqui iría {this.props.read}, {this.props.travel} etc pero no sabemos como meterlo, sólo nos aparece el value de los inputs del componente hobbies, no sabemos como usarlo, he probado hasta meterlo en src y posarle como value el nombre la imagen a ver si colaba, pero no cuela. Hemos visto q los iconos están ocultos y al clicar se aparecen pero eso lo hemos visto ahora, supongo que tenemos q hacer algo cn ello pero aún no lo hemos trasteado
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
