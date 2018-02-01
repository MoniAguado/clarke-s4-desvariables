import React from 'react';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';

class QR extends React.Component {
	render() {
		return (
			<section>
				<form className="form-section-container" action="index.html" method="post">
					<div className="title-container">
						<h2 className="title-form text-form-button">Portfolio</h2>
						<button  id="openButtonQr" className="open-section-button shown" type="button" name="networksButton" onclick="editar('showNetsocial')" value="openButton">
							<img src={expandbutton} alt="addButton"/>
						</button>
						<button  id="closeButtonQr" className="close-section-button hidden" type="button" name="showNetsocial-button" onclick="ocultar('showNetsocial')" value="closeButton">
							<img src={expandarrow} alt="minusbuttom"/>
						</button>
					</div>
					<div className="boxes-container net-social-hidden" id="showNetsocial">
						<div className="nets">
							<input className="inputPortfolio" id="inputQr" type="text" name="inputQr" placeholder=" Contenido para generar QR"></input>
							<button type="button" id="button-generateqr" value="Generar" className="buttons-save-general"></button>
						</div>
					</div>
				</form>
			</section>
		)
	}
}

export default QR;
