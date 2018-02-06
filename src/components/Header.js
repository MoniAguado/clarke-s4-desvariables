import React from 'react';

import logoMaquina from '../images/logoMaquina.png';
import logoLetras from '../images/logoLetras.png';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="container-logo">
					<div>
						<a href="index.html"><img src={logoMaquina} alt="logoscriptoras" className="machine-logo"/></a>
					</div>
					<div className="container-letters">
						<a href="index.html"><img src={logoLetras} alt="logoscriptoras" className="letters-log"/></a>
					</div>
				</div>
				<div className="container-icons">
					<button className="icons" id="btnview" onClick= {this.props.clickButton} title="Vista previa"></button>
					<button className="icons" id="btnprint" title="Imprimir"></button>
				</div>
			</header>
		)
	}
}

export default Header;
