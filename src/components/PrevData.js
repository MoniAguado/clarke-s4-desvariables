import React from 'react';


class PrevData extends React.Component {
	render() {
		return (
			<section>
				<section className="container-pic-preview">
					<div id="prefoto"></div>
				</section>
				<p className="separator">* * * * * * * * * * * * * * * </p>
				<section className="main-details-preview" id="preprincipales-link">
					<p id="prenombre" className="name">{this.props.name}</p>
					<p id="preapellidos">{this.props.surname}</p>
					<p id="preprofesion">{this.props.profession}</p>
					<p id="preemail">{this.props.email}</p>
					<p id="pretelefono">{this.props.phone}</p>
			</section>
			<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}
// PrevData.defaultProps = {
// 	name: "Nombre",
// 	surname: "Apellido",
// 	job: "Profesión",
// 	email: "Email",
// 	phone: "Teléfono"
// }



export default PrevData;
