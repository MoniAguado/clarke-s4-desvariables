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

import expandbutton from '../../images/expandbutton.png';
import expandarrow from '../../images/expandarrow.png';
import expandbuttonmedium from '../../images/expandbuttonmedium.png';

class Form extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

		handleChange(event){
			this.props.updatePreview(event.target.name, event.target.value)
		}

		handleClick(event){
			this.props.updatePreview(event.target.name, event.target.value)
		}

		handleCheck(event){
			this.props.updatePreview(event.target.name, event.target.checked)
		}

		addNewJob(jobList) {
			this.props.updatePreview("jobList", jobList)
		}


	render() {
		return (
					<section className={`form-section box-${this.props.visible ? 'visible' : 'invisible'}`} id="ventana1">
						<Data functionOnchange = {this.handleChange}/>
						<Aboutme functionOnchange = {this.handleChange}/>
						<Experience functionOnchange = {this.handleChange}/>
						<Education functionOnchange = {this.handleChange}/>
						<Skills functionOnchange = {this.handleChange}/>
						<Languages functionOnchange = {this.handleChange}/>
						<Hobbies functionOnchange = {this.handleCheck}/>
						<RRSS functionOnchange = {this.handleChange}/>
					</section>
		)
	}
}

export default Form ;
