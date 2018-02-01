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
				<p id="prenombre" className="name">Nombre</p>
				<p id="preapellidos">Apellido</p>
				<p id="preprofesion">Profesion</p>
				<p id="preemail">Email</p>
				<p id="pretelefono">Telefono</p>
			</section>
			<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevData;
