import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class Data extends React.Component {
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
				<form className="form-section-container" id="principal-section" action="index.html" method="post">
					<div className="title-container" onClick={this.handleClick}>
						<h2 className="title-form text-form-button">Datos principales</h2>
						<button id="openButtonPrincipal" className="open-section-button shown" type="button" name="principales-button" value="openButton">
							<img src={expandbutton} alt="addButton"/>
						</button>
						<button id="closeButtonPrincipal" className="close-section-button hidden" type="button" name="principales-button" value="closeButton">
							<img src={expandarrow} alt="minusbuttom"/>
						</button>
					</div>
					<div id="principal-box" className={`boxes-container box-${this.state.open ? 'open' : 'close'}`}>
						<div className="containerinfo">
							<div className="datosprin">
								<input type="text" name="name" placeholder="Introduce nombre" className="inputs name title-name" required id="nameForm" onChange={this.props.functionOnchange}></input>
								<input type="text" name="surname" placeholder="Introduce apellidos" className="inputs" required id="surnameForm" onChange={this.props.functionOnchange}></input>
								<input type="text" name="job" placeholder="Introduce profesión" className="inputs" required id="professionForm" onChange={this.props.functionOnchange}></input>
								<input type="email" name="email" placeholder="Introduce email" className="inputs" id="mailForm" onChange={this.props.functionOnchange}></input>
								<input type="tel" name="telephone" placeholder="Introduce teléfono móvil" className="inputs" id="phoneForm" onChange={this.props.functionOnchange}></input>
							</div>
						</div>
					</div>
				</form>
				)
			}
		}


		export default Data;
