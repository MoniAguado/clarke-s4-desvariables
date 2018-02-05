import React from 'react';

class Months extends React.Component {
	render() {
		const monthsArray = [ "Mes", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic", "Actual"];
		return (
      <div>
				<select id="end_month-education1" name={this.props.name} className="select-styles month" onChange={this.props.onChangeSelect}>
					{monthsArray.map(option => {
						return <option value={option} key={option}>{option}</option>})}
				</select>
			</div>

    );
  }
}
export default Months;
