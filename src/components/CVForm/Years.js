import React from 'react'

class Years extends React.Component {

	createSelectItems() {
		let yearsInput = [];
		let actual = <option></option>;
		yearsInput.push (actual);
		for (let i = 1950; i <= 2019; i++) {
			if (i === 2019){
				yearsInput.push(<option key={i} value="Año" selected="selected">Año</option>);
			} else{
				yearsInput.push(<option key={i} value={i}>{i}</option>);
			}
		}
		return yearsInput;
	}

	render() {
		return (
			<div>
				<select id="end_year-education1" name={this.props.name} className="select-styles year"  onChange={this.props.onChangeSelect}> {this.createSelectItems()}
				</select>
			</div>
		);
	}
}

export default Years;
