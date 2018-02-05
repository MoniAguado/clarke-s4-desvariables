import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';
import Years from './Years';
import Months from './Months';

class Education extends React.Component {
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
			<form className="form-section-container" id="education-section" action="index.html" method="post">
				<div className="title-container" onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Formación</h2>
					<button id="openButtonFormac" className="open-section-button shown" type="button" name="languageButton" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonFormac" className="close-section-button hidden" type="button" name="education-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div id="education-box" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
					<h3 className="pic-previewtex-bar-preview">Titulación</h3>
					<div>
						<input className="inputs" type="text" name="title-name" placeholder="Indica el nombre de la titulación" onChange={this.props.functionOnchange}></input>
					</div>
					<div >
						<input className="inputs" id="center" type="text" name="center-name" placeholder="Indica el centro de estudios" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="dates-boxes">
						<label className="label-dates">Fecha de inicio</label>
						<Months onChangeSelect ={this.props.functionOnchange} name='experiencieStartMonth' />
						<Years onChangeSelect ={this.props.functionOnchange} name='experiencieStartYear' />
					</div>
					<div className="dates-boxes">
						<label className="label-dates">Fecha de finalización</label>
						<Months onChangeSelect ={this.props.functionOnchange} name='experiencieEndMonth' />
						<Years onChangeSelect ={this.props.functionOnchange} name='experiencieEndYear' />
					</div>
				</div>
			</form>

		)
	}
}

export default Education;
