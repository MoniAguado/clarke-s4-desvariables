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
			<section id="languages-form-container">
				<div className="title-container" onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Idiomas</h2>
					<button id="openButtonlanguages" className="open-section-button shown" type="button" name="languageButton" value="openButton"><img src={expandbutton} alt="addButton"/></button>
					<button id="closeButtonlanguages" className="close-section-button hidden" type="button" name="job-box-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/></button>
				</div>
				<form id="languages-form" action="index.html" method="post" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
					<div className="input-lang">
						<input className="language inputs" type="text" name="lang1"  placeholder="Escribe un idioma" onChange = {this.props.functionOnchange}></input>
						<input className="percentage inputs" type="text" name="percentage1"  placeholder="Escribe su porcentaje" onChange = {this.props.functionOnchange}></input>
					</div>
					<div className="input-lang">
						<input className="language inputs" type="text" name="lang2"  placeholder="Escribe un idioma" onChange = {this.props.functionOnchange}></input>
						<input className="percentage inputs" type="text" name="percentage2"  placeholder="Escribe su porcentaje" onChange = {this.props.functionOnchange}></input>
					</div>
					<div className="input-lang">
						<input className="language inputs" type="text" name="lang3"  placeholder="Escribe un idioma" onChange = {this.props.functionOnchange}></input>
						<input className="percentage inputs" type="text" name="percentage3"  placeholder="Escribe su porcentaje" onChange = {this.props.functionOnchange}></input>
					</div>
				</form>
			</section>
			)
		}
	}

	export default Languages;
