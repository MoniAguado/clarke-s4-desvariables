import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Hobbies extends React.Component {
	render() {
		return (
			<section id="hobbies-form-container">
				<div className="title-container">
					<h2 className="title-form text-form-button">Hobbies</h2>
					<button id="openButtonHobbies" className="addLanguageButton open-section-button shown" type="button" name="languageButton" onclick="editar('hobbies-form')" value="openButton"><img src={expandbutton} alt="addButton"/></button>
					<button id="closeButtonHobbies" className="close-section-button hidden" type="button" name="hobbiesForm-button" onclick="ocultar('hobbies-form')" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<form id="hobbies-form" action="index.html" method="post">
					<div className="check-box-hobbies">
						<label for="hobbie1">Leer</label>
						<input id ="hobbie1" type="checkbox" name="read" value="hobbies" onchange="showHobbiesPreview('read')"></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie2">Viajar</label>
						<input id ="hobbie2" type="checkbox" name="travel" value="hobbies" onchange="showHobbiesPreview('travel')"></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie3">Videojuegos</label>
						<input id ="hobbie3" type="checkbox" name="game" value="hobbies" onchange="showHobbiesPreview('game')"></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie4">Deportes</label>
						<input id ="hobbie4" type="checkbox" name="sports" value="hobbies" onchange="showHobbiesPreview('sports')"></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie5">Cine</label>
						<input id ="hobbie5" type="checkbox" name="movies" value="hobbies" onchange="showHobbiesPreview('cinema')"></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie6">Música</label>
						<input id ="hobbie6" type="checkbox" name="music" value="hobbies" onchange="showHobbiesPreview('music')"></input>
					</div>
				</form>
			</section>
		)
	}
}

export default Hobbies;
