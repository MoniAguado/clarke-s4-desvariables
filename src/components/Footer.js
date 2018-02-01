import React from 'react';
import logoadalab from '../images/logoadalab.png';
import arriba from '../images/arriba.png';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<div className="end"><h3>Scriptoras &copy; 2017</h3></div>
				<div className="end">
					<p><a className="link-contact" href="contact.html">Contacta con nosotras</a></p>
				</div>
				<div className="logo">
					<a href="http://adalab.es/" target="blank">
						<img src={logoadalab} alt="Logo Adalab" className="logo-adalab"/>
					</a>
				</div>
				<a id="arriba" title="Arriba" className="invisible">
					<img src={arriba} title="Arriba" alt="Arriba"/>
				</a>
			</footer>

		)
	}
}

export default Footer;
