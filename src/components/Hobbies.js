import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Hobbies extends React.Component {
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
			<section id="hobbies-form-container">
				<div className="title-container" onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Hobbies</h2>
					<button id="openButtonHobbies" className="addLanguageButton open-section-button shown" type="button" name="languageButton" value="openButton"><img src={expandbutton} alt="addButton"/></button>
					<button id="closeButtonHobbies" className="close-section-button hidden" type="button" name="hobbiesForm-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<form id="hobbies-form" action="index.html" method="post" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
					<div className="check-box-hobbies">
						<label for="hobbie1">Leer</label>
						<input id ="hobbie1" type="checkbox" name="read" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie2">Viajar</label>
						<input id ="hobbie2" type="checkbox" name="travel" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie3">Videojuegos</label>
						<input id ="hobbie3" type="checkbox" name="games" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie4">Deportes</label>
						<input id ="hobbie4" type="checkbox" name="sports" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie5">Cine</label>
						<input id ="hobbie5" type="checkbox" name="cinema" onChange={this.props.functionOnchange}></input>
					</div>
					<div className="check-box-hobbies">
						<label for="hobbie6">Música</label>
						<input id ="hobbie6" type="checkbox" name="music" onChange={this.props.functionOnchange}></input>
					</div>
				</form>
			</section>
		)
	}
}

export default Hobbies;
