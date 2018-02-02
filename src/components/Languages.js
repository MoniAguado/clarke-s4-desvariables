import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Languages extends React.Component {
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
			<section id="languages-form-container" onClick={this.handleClick}>
				<div className="title-container">
					<h2 className="title-form text-form-button">Idiomas</h2>
					<button id="openButtonlanguages" className="open-section-button shown" type="button" name="languageButton" value="openButton"><img src={expandbutton} alt="addButton"/></button>
					<button id="closeButtonlanguages" className="close-section-button hidden" type="button" name="job-box-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/></button>
					</div>
					<form id="languages-form" action="index.html" method="post" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
						<div className="input-lang">
							<input className="language inputs" type="text" name="language1" value="" placeholder="Escribe un idioma"></input>
							<input className="percentage inputs" type="text" name="percentage1" value="" placeholder="Escribe su porcentaje"></input>
						</div>
						<div className="input-lang">
							<input className="language inputs" type="text" name="language2" value="" placeholder="Escribe un idioma"></input>
							<input className="percentage inputs" type="text" name="percentage2" value="" placeholder="Escribe su porcentaje"></input>
						</div>
						<div className="input-lang">
							<input className="language inputs" type="text" name="language3" value="" placeholder="Escribe un idioma"></input>
							<input className="percentage inputs" type="text" name="percentage3" value="" placeholder="Escribe su porcentaje"></input>
						</div>
					</form>
				</section>
		)
	}
}

export default Languages;
