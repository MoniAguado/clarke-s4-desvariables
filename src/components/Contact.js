import React from 'react';
import './scss/main.css';

class Contact extends React.Component {
	render() {
		return (
			<body className="wrapper" >

				<header className="header">
					<div className="container-logo">
						<div>
							<a href="index.html"><img src="images/logoMaquina.png" alt="logoscriptoras" className="machine-logo"></img></a>
						</div>
						<div>
							<a href="index.html"><img src="images/logoLetras.png" alt="logoscriptoras" className="letters-log"></img></a>
						</div>
					</div>
				</header>
				<main className="main-wrapper flexible contact-main">
					<div className="contact-section">
						<div className="form-text">
							<h3 className="contact-title">¿NECESITAS AYUDA?. ESCRÍBENOS</h3>
							<p>Para consultas rellena el siguiente formulario y nos pondremos en contacto contigo. Gracias</p>
						</div>
						<div className="contact-form">
							<form className="fill" action="index.html" method="post">
								<div className="complete">
									<div className="fields">
										<input className="contact-box" id="name" type="text" placeholder="Nombre" name="firstname" required></input>
									</div>
									<div className="fields">
										<input className="contact-box" id="surname" type="text" placeholder="Apellidos" name="username" required></input>
									</div>
									<div className="fields">
										<input className="contact-box" id="email" type="email" placeholder="Correo electrónico" name="mail" required></input>
									</div>
									<div className="fields">
										<textarea  className="contact-box" id="comentarios" placeholder="Comentarios" name="comments" rows="25" cols="80"></textarea>
									</div>
									<button className="contact-button">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				</main>
				<footer className="footer">
					<div className="end">
						<h3>Scriptoras &copy; 2017</h3>
					</div>
					<div className="end">
						<p><a className="link-contact" href="contact.html">Contacta con nosotras</a></p>
					</div>
					<div className="logo">
						<a href="http://adalab.es/" target="blank">
							<img src="images/logo-adalab.png" alt="Logo Adalab" className="logo-adalab"></img>
						</a>
					</div>
				</footer>

			</body>

	)
}
}

export default Contact;
