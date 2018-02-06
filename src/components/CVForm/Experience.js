import React from 'react';

import expandbutton from '../../images/expandbutton.png';
import expandarrow from '../../images/expandarrow.png';
import Years from './Years';
import Months from './Months';

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
						<input className="inputs jobname"  type="text" name="jobname" placeholder="Indica el puesto de trabajo" onChange={this.props.functionOnchange}></input>
					</div>
					<div>
						<label for="company"></label>
						<input className="inputs" id="company" type="text" name="companyname" placeholder="Indica el nombre de la empresa" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="dates-boxes">
						<label className="label-dates">Fecha de inicio:</label>
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

export default Experience;
