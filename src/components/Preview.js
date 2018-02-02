import React from 'react';



import cinemaSmall from '../images/cinemaSmall.png';
import musicSmall from '../images/musicSmall.png';
import read from '../images/read.png';
import readSmall from '../images/readSmall.png';
import sports from '../images/sports.png';
import sportsSmall from '../images/sportsSmall.png';
import travel from '../images/travel.png';
import travelSmall from '../images/travelSmall.png';
import videogameSmall from '../images/videogameSmall.png'

class Preview extends React.Component {
	render() {
		return (
<<<<<<< HEAD
=======
			<section className={`preview-section box-${this.props.visible ? 'visible' : 'invisible'}`} id="ventana2">
					<div className="box-icons-preview">
						<button className="cross-section-button" type="button" name="cruz-button" onclick="closePreview('ventana2')">
						<img src="images/btnclose.png" alt="cruzbuttom"/></button>
						<button className="iconsprev" type="button" onclick="printCurriculum()" id="btnprintprev" title="Imprimir"></button>
						<button className="iconsprev" type="button" onclick="download()" id="btndownloadprev" title="Descargar"></button>
					</div>
					<PrevData />
					<PrevAboutme />
					<PrevExperienceEducation />
					<PrevSkills />
					<PrevLanguages />
					<PrevHobbies />

>>>>>>> c52aa3207c32383a65c434ae9adb22edb8b71622

		)
	}
}

export default Preview;
