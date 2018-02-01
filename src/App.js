import React, { Component } from 'react';
import Cover from './components/Cover';
import Form from './components/Form';
import Footer from './components/Footer';
import './scss/main.css';


import addButton24px from './images/addButton24px.png';
import addButton32px from './images/addButton32px.png';
import addimg from './images/addimg.png';
import btnaddimg from './images/btnaddimg.png';
import btnclose from './images/btnclose.png';
import btndown from './images/btndown.png';
import btndownload from './images/btndownload.png';
import btndownload2 from './images/btndownload2.png';
import btnfile from './images/btnfile.png';
import btnfile2 from './images/btnfile2.png';
import btnprint from './images/btnprint.png';
import btnprint3 from './images/btnprint3.png';
import btnshare from './images/btnshare.png';
import btnshare2 from './images/btnshare2.png';
import btnshare3 from './images/btnshare3.png';
import btnview from './images/btnview.jpg';
import cinema from './images/cinema.png';
import cinemaSmall from './images/cinemaSmall.png';
import expandarrow from './images/expandarrow.png';
import expandbuttonmedium from './images/expandbuttonmedium.png';
import expandbutton from './images/expandbutton.png';
import facebook from './images/facebook.png';
import github from './images/github.png';
import group from './images/group.png';
import groupMobile from './images/groupMobile.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import logofinal from './images/logofinal.png';
import logoLetras from './images/logoLetras.png';
import logoLetrasRegular from './images/logoLetrasRegular.png';
import logoMaquina from './images/logoMaquina.png';
import logoPrueba from './images/logoPrueba.png';
import menos from './images/menos.png';
import minbutom from './images/minbutom.png';
import minus from './images/minus.svg';
import minus32 from './images/minus32.png';
import minus32px from './images/minus32px.png';
import music from './images/music.png';
import musicSmall from './images/musicSmall.png';
import read from './images/read.png';
import readSmall from './images/readSmall.png';
import sports from './images/sports.png';
import sportsSmall from './images/sportsSmall.png';
import travel from './images/travel.png';
import travelSmall from './images/travelSmall.png';
import twitter from './images/twitter.png';
import videogame from './images/videogame.png';
import videogameSmall from './images/videogameSmall.png'
import machine from './images/vintage8Machine.png';

class App extends Component {
  render() {
    return (
			<div className="App">
			<body className="wrapper body" id="contenedorPrincipal">
			 <header className="header">
				 <div className="container-logo">
					 <div>
						 <a href="index.html"><img src={logoMaquina} alt="logoscriptoras" className="machine-logo"/></a>
					 </div>
					 <div className="container-letters">
						 <a href="index.html"><img src={logoLetras} alt="logoscriptoras" className="letters-log"/></a>
					 </div>
				 </div>
				 <div className="container-icons">
					<button className="icons" id="btnview" title="Vista previa"></button>
					<button className="icons" id="btnprint" title="Imprimir"></button>
				 </div>
			 </header>
			 <main className="main-wrapper bloque index-main">

			 		<Form />

				 <section className="preview-section" id="ventana2">
						 <div className="box-icons-preview">
							 <button className="cross-section-button" type="button" name="cruz-button" onclick="closePreview('ventana2')">
							 <img src="images/btnclose.png" alt="cruzbuttom"/></button>
							 <button className="iconsprev" type="button" onclick="printCurriculum()" id="btnprintprev" title="Imprimir"></button>
							 <button className="iconsprev" type="button" onclick="download()" id="btndownloadprev" title="Descargar"></button>
						 </div>
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
					 <section>
						 <h2 className="section-title">Sobre mí</h2>
							 <p id="aboutMe-preview" className="section-title"></p>
					 </section>
					 <p className="separator">* * * * * * * * * * * * * * * </p>
					 <section>
						 <h2 className="section-title">Experiencia y Formación</h2>
						 <section className="timeline">
						 </section>
					 </section>
				 <p className="separator">* * * * * * * * * * * * * * * </p>
					 <section className="section-skills">
						 <h2 className="title-section">Habilidades</h2>
						 <div className="skill-pre">
							 <div className="skill-title" id="skill1-preview"></div>
							 <div className="barra">
								 <div className="barra_front" id="barra1"></div>
							 </div>
								 <div className="skill-title" id="skill2-preview"></div>
								 <div className="barra">
									 <div className="barra_front" id="barra2"></div>
								 </div>
								 <div className="skill-title" id="skill3-preview"></div>
								 <div className="barra">
									 <div className="barra_front" id="barra3"></div>
								 </div>
								 <div className="skill-title" id="skill4-preview"></div>
								 <div className="barra">
									 <div className="barra_front" id="barra4"></div>
								 </div>
							 </div>
					 </section>
					 <p className="separator">* * * * * * * * * * * * * * * </p>
					 <section id="languages-preview">
						 <h2 className="title-section">Idiomas</h2>
						 <div className="languages-bar-preview">
							 <div className="percentage-bar">
								 <p className="text-bar-preview"></p>
							 </div>
						 </div>
						 <div className="languages-bar-preview">
							 <div className="percentage-bar">
								 <p className="text-bar-preview"></p>
							 </div>
						 </div>
						 <div className="languages-bar-preview">
							 <div className="percentage-bar">
								 <p className="text-bar-preview"></p>
							 </div>
						 </div>
					 </section>
					 <p className="separator">* * * * * * * * * * * * * * * </p>
					 <section id="hobbies-preview">
						 <h2 className="title-section">Hobbies</h2>
						 <div className="all-hobbies-preview">
							 <img id="read" src={readSmall} alt="read hobbie"/>
							 <img id="travel" src={travelSmall} alt="travel hobbie"/>
							 <img id="game" src={videogameSmall} alt="game hobbie"/>
							 <img id="sports" src={sportsSmall} alt="sports hobbie"/>
							 <img id="cinema" src={cinemaSmall} alt="cinema hobbie"/>
							 <img id="music" src={musicSmall} alt="music hobbie"/>
						 </div>
					 </section>
					 <p className="separator">* * * * * * * * * * * * * * * </p>
					 <section>
						 <div className="sociality">
							 <div className="socialNetworks">
								 <ul className="social">
									 <li className="linkedin invisible">
										 <a id="a-linkedin" className="printnet" href="https://www.linkedin.com/in/" target="_blank">linkedin</a>
									 </li>
									 <li className="facebook invisible">
										 <a id="a-facebook" className="printnet" href="https://www.facebook.com/" target="_blank">facebook</a>
									 </li>
									 <li className="github invisible">
										 <a id="a-github" className="printnet" href="https://github.com/" target="_blank">github</a>
									 </li>
									 <li className="twitter invisible">
										 <a id="a-twitter" className="printnet" href="https://twitter.com/" target="_blank">twitter</a>
									 </li>
									 <li className="instagram invisible">
										 <a id="a-instagram" className="printnet" href="https://www.instagram.com/" target="_blank">instagram</a>
									 </li>
								 </ul>
							 </div>
							 <a href='' id='qrlink'><div id="codigoqr" className="codigoqr"></div>
							 </a>
							</div>
					 </section>
				 </section>
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
			 </main>
			 <div id="btrs">
			<p><b>Comparte nuestra página en redes sociales</b></p>


			</div>
				<Footer />
			 </body>
			</div>

    );
  }
}

export default App;
