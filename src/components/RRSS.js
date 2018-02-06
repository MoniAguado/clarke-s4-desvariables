import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class RRSS extends React.Component {
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
			<section>
				<form className="form-section-container" action="index.html" method="post">
					<div className="title-container" onClick={this.handleClick}>
						<h2 className="title-form text-form-button">Redes Sociales</h2>
						<button id="openButtonNet" className="open-section-button shown" type="button" name="networksButton" value="openButton">
							<img src={expandbutton} alt="addButton"/></button>
						<button id="closeButtonNet" className="close-section-button hidden" type="button" name="minredes-button" value="closeButton">
							<img src={expandarrow} alt="minusbuttom"/>
						</button>
					</div>
					<div className="boxes-container net-social-hidden" id="minredes" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
						<div className="nets">
							<label className="socialLabel" for="linkedin">Linkedin</label>
							<input className="users inputs" id="linkedin" type="text" name="linkedin" placeholder="Copia aquí tu link" onChange={this.props.functionOnchange}></input>
						</div>
						<div className="nets">
							<label className="socialLabel" for="facebook">Facebook</label>
							<input className="users inputs" id="facebook" type="text" name="facebook" placeholder="Copia aquí tu link" onChange={this.props.functionOnchange}></input>
						</div>
						<div className="nets">
							<label className="socialLabel" for="github">Github</label>
							<input className="users inputs" id="github" type="text" name="github" placeholder="Copia aquí tu link" onChange={this.props.functionOnchange}></input>
						</div>
						<div className="nets">
							<label className="socialLabel" for="twitter">Twitter</label>
							<input className="users inputs" id="twitter" type="text" name="twitter" placeholder="Copia aquí tu link" onChange={this.props.functionOnchange}></input>
						</div>
						<div className="nets">
							<label className="socialLabel" for="instagram">Instagram</label>
							<input className="users inputs" id="instagram" type="text" name="instagram" placeholder="Copia aquí tu link" onChange={this.props.functionOnchange}></input>
						</div>
					</div>
				</form>
			</section>
			)
		}
	}

	export default RRSS;
