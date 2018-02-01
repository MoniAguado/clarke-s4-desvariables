import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Aboutme extends React.Component {
	const archivo = (evt) => {
	  const files = evt.target.files;
	  for (let i = 0, f; f = files[i]; i++) {
	    if (!f.type.match('image.*')) {
	      continue;
	  	}
	  const reader = new FileReader();
	  reader.onload = ((theFile) => {
	    return function(e) {

	      document.getElementById("foto").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
	    };
	  })(f);
	    reader.readAsDataURL(f);
	  }
	}
	document.getElementById('files').addEventListener('change', archivo, false);
	// duplico para img prev
	const archivo2 = (evt) => {
		const files = evt.target.files;
		for (let i = 0, f; f = files[i]; i++) {
		//Solo admitimos imágenes.
			if (!f.type.match('image.*')) {
				continue;
			}
			const reader = new FileReader();
			reader.onload = ((theFile) => {
				return function(e) {
				// Creamos la imagen.
					document.getElementById("prefoto").innerHTML = ['<img class="thumb2" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
				};
			})(f);
			reader.readAsDataURL(f);name-formnameForm
		}
	}
	document.getElementById('files').addEventListener('change', archivo2, false);
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
