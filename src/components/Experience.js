import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Experience extends React.Component {
	render() {
		return (
			<form className="form-section-container" id="experience-section" action="index.html" method="post">
				<div className="title-container">
					<h2 className="title-form text-form-button" onclick="editar('job-box')">Experiencia laboral</h2>
					<button id="openButtonExperience" className="open-section-button shown" type="button" name="experience-button" onclick="editar('job-box')" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonExperience" className="close-section-button hidden" type="button" name="job-box-button" onclick="ocultar('job-box')" value="closeButton">
					<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div className="boxes-container" id="job-box">
					<h3 className="subtitle-section">Puesto de trabajo</h3>
					<div>
						<label for="job"></label>
						<input className="inputs" id="job" type="text" name="job-name" placeholder="Indica el puesto de trabajo"></input>
					</div>
					<div>
						<label for="company"></label>
						<input className="inputs" id="company" type="text" name="company-name" placeholder="Indica el nombre de la empresa"></input>
					</div>
					<div className="dates-boxes">
						<label>Fecha de inicio:</label>
						<select className="select-styles month" id="month-job-start" name="job-start-month"></select>
						<select className="select-styles year-ini" id="year-job-start" name="job-start-year"></select>
					</div>
					<div className="dates-boxes">
						<label>Fecha de finalización</label>
						<select className="select-styles month" id="month-job-end" name="job-end-month"></select>
						<select className="select-styles year" id="year-job-end" name="job-end-year"></select>
					</div>
					<div className="buttons-container">
						<button className="buttons-save-general experiencia" id="button-add-exp" type="button" name="add-exp" value="Añadir"></button>
						<button className="buttons-save-general experiencia" id="button-delete-exp" type="button" name="delete-exp" value="Borrar"></button>
					</div>
				</div>
			</form>
		)
	}
}

export default Experience;
