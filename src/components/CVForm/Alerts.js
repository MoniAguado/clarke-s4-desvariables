import React from 'react';

import btnclose from '../../images/btnclose.png';

class Alerts extends React.Component {
	render() {
		return (
			<section>
				<div className="alert-dates invisible">
					<button className="button-alert-img" type="button" name="button">
						<img className="alert-cruise" src={btnclose} alt="cruise-button"/>
					</button>
					<p className="text-alert">¡Ojo! La fecha de inicio no debe ser posterior a la fecha de finalización.</p>
				</div>
				<div className="alert-dates invisible" id="alert-month">
					<button className="button-alert-img" id="close-button-alert-month" type="button" name="button">
						className="alert-cruise" src={btnclose} alt="cruise-button"/>
					</button>
					<p className="text-alert">¡Ojo! No has introducido el mes.</p>
				</div>
			</section>
		)
	}
}

export default Alerts;
