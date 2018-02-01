import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Aboutme extends React.Component {
	render() {
		return (
			<form className="form-section-container" action="index.html" method="post">
				<div className="title-container">
					<h2 className="title-form text-form-button" onclick="editar('content-about')">Sobre mí</h2>
					<button id="openButtonAbout" className="open-section-button shown" type="button" name="about-me-button" onclick="editar('content-about')" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonAbout" className="close-section-button hidden" type="button" name="about-me-button" onclick="ocultar('content-about')" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div  id="content-about" className="boxes-container">
					<label for="about"></label>
					<textarea name="about-me" rows="6" cols="25" placeholder="Introduce una breve descripción sobre ti." className="textarea" id="text-about"></textarea>
				</div>
			</form>

		)
	}
}

export default Aboutme;
