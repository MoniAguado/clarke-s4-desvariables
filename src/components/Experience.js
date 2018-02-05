import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Experience extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			open: false
		}

	}
	handleClick() {
		this.setState ({
			open: !this.state.open
		})
	}
	render() {
		return (
			<form className="form-section-container" id="experience-section" action="index.html" method="post">
				<div className="title-container"  onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Experiencia laboral</h2>
					<button id="openButtonExperience" className="open-section-button shown" type="button" name="experience-button" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonExperience" className="close-section-button hidden" type="button" name="job-box-button" value="closeButton">
					<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div className="boxes-container" id="job-box" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
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
						<button className="buttons-save-general experiencia" id="button-add-exp" type="button" name="add-exp" value="Añadir">Añadir</button>
						<button className="buttons-save-general experiencia" id="button-delete-exp" type="button" name="delete-exp" value="Borrar">Borrar</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Experience;
