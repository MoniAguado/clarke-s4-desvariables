import React from 'react';

import Aboutme from './Aboutme';
import Data from './Data';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import RRSS from './RRSS';
import QR from './QR';

import expandbutton from '../images/expandbutton.png';
import expandarrow from '../images/expandarrow.png';
import expandbuttonmedium from '../images/expandbuttonmedium.png';

class Form extends React.Component {
	render() {
		return (
			<section>
				<button id="button-down" type="button" name="button-down"><a href="index.html#empty-container"><img src={expandbuttonmedium} alt="rellena-los-campos"/></a></button>
				<div id="empty-container"></div>
				<div className="main-web-sections">
					<section className="form-section" id="ventana1">
						<Data />
						<Aboutme />
						<Experience />
						<Education />
						<Skills />
						<Languages />
						<Hobbies />
						<RRSS />
						<QR />

					</section>
				</div>
			</section>

		)
	}
}

export default Form ;
