import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Aboutme extends React.Component {
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
			<form className="form-section-container" action="index.html" method="post">
				<div className="title-container"  onClick={this.handleClick}>
					<h2 className="title-form text-form-button">Sobre mí</h2>
					<button id="openButtonAbout" className="open-section-button shown" type="button" name="about-me-button" value="openButton">
						<img src={expandbutton} alt="addButton"/>
					</button>
					<button id="closeButtonAbout" className="close-section-button hidden" type="button" name="about-me-button" value="closeButton">
						<img src={expandarrow} alt="minusbuttom"/>
					</button>
				</div>
				<div id="content-about" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
					<label for="about"></label>
					<textarea name="about" rows="6" cols="25" placeholder="Introduce una breve descripción sobre ti." className="textarea" id="text-about" onChange={this.props.functionOnchange}></textarea>
					</div>

			</form>

		)
	}
}

export default Aboutme;
