import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Skills extends React.Component {
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
			<section  className="form-section-container">
				<div className="title-container" onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Habilidades</h2>
					<button id="openButtonSkill" className="open-section-button shown" type="button" name="skills-button" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonSkill" className="close-section-button hidden" type="button" name="content-skills-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<form action="index.html" method="post" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
					<div id="content-skills" className="boxes-container">
						<div className="input-skill">
							<input className="inputs skill" type="text" name="skill1" placeholder="Escribe una habilidad" id="skill1" onChange = {this.props.functionOnchange}></input>
							<input className="inputs skill-percent" type="text" name="percentage1" value="" placeholder="Escribe un porcentaje" id="percentage1"></input>
						</div>
						<div className="input-skill">
							<input className="inputs skill" type="text" name="skill2" placeholder="Escribe una habilidad" id="skill2" onChange = {this.props.functionOnchange}></input>
							<input className="inputs skill-percent"  type="text" name="percentage2" value="" placeholder="Escribe un porcentaje" id="percentage2"></input>
						</div>
						<div className="input-skill">
							<input className="inputs skill"  type="text" name="skill3" placeholder="Escribe una habilidad" id="skill3" onChange = {this.props.functionOnchange}></input>
							<input className="inputs skill-percent"  type="text" name="percentage3" value="" placeholder="Escribe un porcentaje" id="percentage3"></input>
						</div>
						<div className="input-skill">
							<input className="inputs skill" type="text" name="skill4" placeholder="Escribe una habilidad" id="skill4" onChange = {this.props.functionOnchange}></input>
							<input className="inputs skill-percent" type="text" name="percentage4" value="" placeholder="Escribe un porcentaje" id="percentage4"></input>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

export default Skills;
