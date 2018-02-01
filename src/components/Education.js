import React from 'react';
import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';
class Education extends React.Component {
	render() {
		return (
			<form className="form-section-container" id="education-section" action="index.html" method="post">
				<div className="title-container">
					<h2 className="title-form text-form-button" onclick="editar('education-box')">Formación</h2>
					<button id="openButtonFormac" className="open-section-button shown" type="button" name="languageButton" onclick="editar('education-box')" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonFormac" className="close-section-button hidden" type="button" name="education-button" onclick="ocultar('education-box')" value="closeButton">
					<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div className="boxes-container" id="education-box">
					<h3 className="pic-previewtex-bar-preview">Titulación</h3>
					<div>
						<input className="inputs" id="educ-title" type="text" name="title-name" placeholder="Indica el nombre de la titulación"></input>
					</div>
					<div >
						<input className="inputs" id="center" type="text" name="center-name" placeholder="Indica el centro de estudios"></input>
					</div>
					<div className="dates-boxes">
						<label>Fecha de inicio</label>
						<select className="select-styles month" id="month-training-start" name="training-start-month"></select>
						<select className="select-styles year-ini" id="year-training-start" name="training-start-year"></select>
					</div>
					<div className="dates-boxes">
						<label>Fecha de finalización</label>
						<select className="select-styles month" id="month-training-end" name="training-end-month"></select>
						<select className="select-styles year" id="year-training-end" name="training-end-year"></select>
					</div>
					<div className="buttons-container">
						<button type="button" value="Añadir" name="add-ed" id="button-add-ed" className="buttons-save-general formacion"></button>
						<button type="button" value="Borrar" name="delete-ed" id="button-delete-ed" className="buttons-save-general formacion"></button>
					</div>
				</div>
			</form>

		)
	}
}

export default Education;
