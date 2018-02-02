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
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
		handleChange(event){
			this.props.updatePreview(event.target.name, event.target.value)
		}

	render() {
		return (
					<section className={`form-section box-${this.props.visible ? 'visible' : 'invisible'}`} id="ventana1">
<<<<<<< HEAD
						<Data onChange={this.handleChange}/>
=======
						<Data />
>>>>>>> c52aa3207c32383a65c434ae9adb22edb8b71622
						<Aboutme />
						<Experience />
						<Education />
						<Skills />
						<Languages />
						<Hobbies />
						<RRSS />
						<QR />

					</section>

		)
	}
}

export default Form ;
