import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import addButton24px from './images/addButton24px.png';
import addButton32px from './images/addButton32px.png';
import addimg from './images/addimg.png';
import arriba from './images/arriba.png';
import btnaddimg from './images/btnaddimg.png';
import btnclose from './images/btnclose.png';
import btndown from './images/btndown.png';
import btndownload from './images/btndownload.png';
import btndownload2 from './images/btndownload2.png';
import btnfile from './images/btnfile.png';
import btnfile2 from './images/btnfile2.png';
import btnprint from './images/btnprint.png';
import btnprint2 from './images/btnprint2.png';
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
import logoadalab from './images/logoadalab.png';
import logofinal from './images/logofinal.png';
import logoLetras from './images/logoLetras.png';
import logoLetrasRegular from './images/logoLetrasRegular.png';
import logoMaquina from './images/logoMaquina.png';
import logoPrueba from './images/logoPrueba.png';
import menos from './images/menos.png';
import minbutom from './images/minbutom.png';
import minus from './images/minus.svg';
import minus from './images/minus.png';
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
						 <a href="index.html"><img src="images/logoMaquina.png" alt="logoscriptoras" className="machine-logo"></a>
					 </div>
					 <div className="container-letters">
						 <a href="index.html"><img src="images/logoLetras.png" alt="logoscriptoras" className="letters-log"></a>
					 </div>
				 </div>
				 <div className="container-icons">
					<button className="icons" id="btnview" title="Vista previa"></button>
					<button className="icons" id="btnprint" title="Imprimir"></button>
				 </div>
			 </header>
			 <main className="main-wrapper bloque index-main">
				 <div id="header-fondo" className="header-background">
					 <h1 className="title-crea text-crea"></h1>
					 <audio id="sound-efx" src=""></audio>
				 </div>
				 <button id="button-down" type="button" name="button-down"><a href="index.html#empty-container"><img src="images/expand-button-medium.png" alt="rellena-los-campos"></a></button>
				 <div id="empty-container"></div>
				 <div className="main-web-sections">
					 <section className="form-section" id="ventana1">
						 <form className="form-section-container" id=principal-section action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button" onclick="editar('principal-box')">Datos principales</h2>
								 <button id="openButtonPrincipal" className="open-section-button shown" type="button" name="principales-button" onclick="editar('principal-box')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button id="closeButtonPrincipal" className="close-section-button hidden" type="button" name="principales-button" onclick="ocultar('principal-box')" value="closeButton">
									 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <div className="boxes-container" id="principal-box">
								 <div className="containerinfo">
									 <input type="file" id="files" name="files[]" className=""></input>
									 <div className="foto photo" title="Subir imagen" onclick="simularClick()"></div>
									 <div className="datosprin">
										 <input type="text" name="name" placeholder="Introduce nombre" className="inputs name title-name" required id="nameForm"></input>
										 <input type="text" name="surname" placeholder="Introduce apellidos" className="inputs" required id="surnameForm"></input>
										 <input type="text" name="profesion" placeholder="Introduce profesión" className="inputs" required id="professionForm"></input>
										 <input type="email" name="mail" placeholder="Introduce email" className="inputs" id="mailForm"></input>
										 <input type="tel" name="telephone" placeholder="Introduce teléfono móvil" className="inputs" id="phoneForm"></input>
									 </div>
								 </div>
							 </div>
						 </form>
						 <form className="form-section-container" action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button" onclick="editar('content-about')">Sobre mí</h2>
								 <button id="openButtonAbout" className="open-section-button shown" type="button" name="about-me-button" onclick="editar('content-about')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button id="closeButtonAbout" className="close-section-button hidden" type="button" name="about-me-button" onclick="ocultar('content-about')" value="closeButton">
									 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <div  id="content-about" className="boxes-container"><!--Oculto-->
								 <label for="about"></label>
								 <textarea name="about-me" rows="6" cols="25" placeholder="Introduce una breve descripción sobre ti." className="textarea" id="text-about"></textarea>
							 </div>
						 </form>
						 <form className="form-section-container" id=experience-section action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button" onclick="editar('job-box')">Experiencia laboral</h2>
								 <button id="openButtonExperience" className="open-section-button shown" type="button" name="experience-button" onclick="editar('job-box')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button id="closeButtonExperience" className="close-section-button hidden" type="button" name="job-box-button" onclick="ocultar('job-box')" value="closeButton">
								 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <div className="boxes-container" id="job-box">
								 <h3 className="subtitle-section">Puesto de trabajo</h3>
								 <div>
									 <label for="job"></label>
									 <input className="inputs" id="job" type="text" name="job-name" placeholder="Indica el puesto de trabajo"></input>
								 </div>
								 <div>
									 <label for="company"></label>
									 <input className="inputs" id="company" type="text" name="company-name" placeholder="Indica el nombre de la empresa"></input>
								 </div>
								 <div className="dates-boxes">
									 <label>Fecha de inicio:</label>
									 <select className="select-styles month" id="month-job-start" name="job-start-month"></select>
									 <select className="select-styles year-ini" id="year-job-start" name="job-start-year"></select>
								 </div>
								 <div className="dates-boxes">
									 <label>Fecha de finalización</label>
									 <select className="select-styles month" id="month-job-end" name="job-end-month"></select>
									 <select className="select-styles year" id="year-job-end" name="job-end-year"></select>
								 </div>
								 <div className="buttons-container">
									 <button className="buttons-save-general experiencia" id="button-add-exp" type="button" name="add-exp" value="Añadir"></button>
									 <button className="buttons-save-general experiencia" id="button-delete-exp" type="button" name="delete-exp" value="Borrar"></button>
								 </div>
							 </div>
						 </form>
						 <form className="form-section-container" id="education-section" action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button" onclick="editar('education-box')">Formación</h2>
								 <button id="openButtonFormac" className="open-section-button shown" type="button" name="languageButton" onclick="editar('education-box')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button id="closeButtonFormac" className="close-section-button hidden" type="button" name="education-button" onclick="ocultar('education-box')" value="closeButton">
								 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <div className="boxes-container" id="education-box">
								 <h3 className="pic-previewtex-bar-preview">Titulación</h3>
								 <div>
									 <input className="inputs" id="educ-title" type="text" name="title-name" placeholder="Indica el nombre de la titulación"></input>
								 </div>
								 <div >
									 <input className="inputs" id="center" type="text" name="center-name" placeholder="Indica el centro de estudios"></input>
								 </div>
								 <div className="dates-boxes">
									 <label>Fecha de inicio</label>
									 <select className="select-styles month" id="month-training-start" name="training-start-month"></select>
									 <select className="select-styles year-ini" id="year-training-start" name="training-start-year"></select>
								 </div>
								 <div className="dates-boxes">
									 <label>Fecha de finalización</label>
									 <select className="select-styles month" id="month-training-end" name="training-end-month"></select>
									 <select className="select-styles year" id="year-training-end" name="training-end-year"></select>
								 </div>
								 <div className="buttons-container">
									 <button type="button" value="Añadir" name="add-ed" id="button-add-ed" className="buttons-save-general formacion"></button>
									 <button type="button" value="Borrar" name="delete-ed" id="button-delete-ed" className="buttons-save-general formacion"></button>
								 </div>
							 </div>
						 </form>
						 <section  className="form-section-container">
							 <div className="title-container">
								 <h2 className="title-form text-form-button">Habilidades</h2><!--Mostrado-->
								 <button id="openButtonSkill" className="open-section-button shown" type="button" name="skills-button" onclick="editar('content-skills')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button id="closeButtonSkill" className="close-section-button hidden" type="button" name="content-skills-button" onclick="ocultar('content-skills')" value="closeButton">
										 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <form action="index.html" method="post">
								 <div id="content-skills" className="boxes-container"><!--Oculto-->
									 <div className="input-skill">
										 <input className="inputs skill" type="text" name="skill1" value="" placeholder="Escribe una habilidad" id="skill1"></input>
										 <input className="inputs skill-percent" type="text" name="percentage1" value="" placeholder="Escribe un porcentaje" id="percentage1"></input>
									 </div>
									 <div className="input-skill">
										 <input className="inputs skill" type="text" name="skill2" value="" placeholder="Escribe una habilidad" id="skill2"></input>
										 <input className="inputs skill-percent"  type="text" name="percentage2" value="" placeholder="Escribe un porcentaje" id="percentage2"></input>
									 </div>
									 <div className="input-skill">
										 <input className="inputs skill"  type="text" name="skill3" value="" placeholder="Escribe una habilidad" id="skill3"></input>
										 <input className="inputs skill-percent"  type="text" name="percentage3" value="" placeholder="Escribe un porcentaje" id="percentage3"></input>
									 </div>
									 <div className="input-skill">
										 <input className="inputs skill" type="text" name="skill4" value="" placeholder="Escribe una habilidad" id="skill4"></input>
										 <input className="inputs skill-percent" type="text" name="percentage4" value="" placeholder="Escribe un porcentaje" id="percentage4"></input>
									 </div>
								 </div>
							 </form>
						 </section>
						 <section id="languages-form-container">
							 <div className="title-container">
								 <h2 className="title-form text-form-button">Idiomas</h2>
								 <button id="openButtonlanguages" className="open-section-button shown" type="button" name="languageButton" onclick="editar('languages-form')" value="openButton"><img src="images/expand-button.png" alt="addButton"></button>
								 <button id="closeButtonlanguages" className="close-section-button hidden" type="button" name="job-box-button" onclick="ocultar('languages-form')" value="closeButton">
								 <img src="images/expand-arrow.png" alt="minusbuttom"></button>
							 </div>
							 <form id="languages-form" action="index.html" method="post">
								 <div className="input-lang">
									 <input className="language inputs" type="text" name="language1" value="" placeholder="Escribe un idioma"></input>
									 <input className="percentage inputs" type="text" name="percentage1" value="" placeholder="Escribe su porcentaje"></input>
								 </div>
								 <div className="input-lang">
									 <input className="language inputs" type="text" name="language2" value="" placeholder="Escribe un idioma"></input>
									 <input className="percentage inputs" type="text" name="percentage2" value="" placeholder="Escribe su porcentaje"></input>
								 </div>
								 <div className="input-lang">
									 <input className="language inputs" type="text" name="language3" value="" placeholder="Escribe un idioma"></input>
									 <input className="percentage inputs" type="text" name="percentage3" value="" placeholder="Escribe su porcentaje"></input>
								 </div>
							 </form>
						 </section>
						 <section id="hobbies-form-container">
							 <div className="title-container">
								 <h2 className="title-form text-form-button">Hobbies</h2>
								 <button id="openButtonHobbies" className="addLanguageButton open-section-button shown" type="button" name="languageButton" onclick="editar('hobbies-form')" value="openButton"><img src="images/expand-button.png" alt="addButton"></button>
								 <button id="closeButtonHobbies" className="close-section-button hidden" type="button" name="hobbiesForm-button" onclick="ocultar('hobbies-form')" value="closeButton">
								 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <form id="hobbies-form" action="index.html" method="post">
								 <div className="check-box-hobbies">
									 <label for="hobbie1">Leer</label>
									 <input id ="hobbie1" type="checkbox" name="read" value="hobbies" onchange="showHobbiesPreview('read')"></input>
								 </div>
								 <div className="check-box-hobbies">
									 <label for="hobbie2">Viajar</label>
									 <input id ="hobbie2" type="checkbox" name="travel" value="hobbies" onchange="showHobbiesPreview('travel')"></input>
								 </div>
								 <div className="check-box-hobbies">
									 <label for="hobbie3">Videojuegos</label>
									 <input id ="hobbie3" type="checkbox" name="game" value="hobbies" onchange="showHobbiesPreview('game')"></input>
								 </div>
								 <div className="check-box-hobbies">
									 <label for="hobbie4">Deportes</label>
									 <input id ="hobbie4" type="checkbox" name="sports" value="hobbies" onchange="showHobbiesPreview('sports')"></input>
								 </div>
								 <div className="check-box-hobbies">
									 <label for="hobbie5">Cine</label>
									 <input id ="hobbie5" type="checkbox" name="movies" value="hobbies" onchange="showHobbiesPreview('cinema')"></input>
								 </div>
								 <div className="check-box-hobbies">
									 <label for="hobbie6">Música</label>
									 <input id ="hobbie6" type="checkbox" name="music" value="hobbies" onchange="showHobbiesPreview('music')"></input>
								 </div>
							 </form>
						 </section>
						 <form className="form-section-container" action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button">Redes Sociales</h2>
									 <button id="openButtonNet" className="open-section-button shown" type="button" name="networksButton" onclick="showNetsocial()" value="openButton">
										 <img src="images/expand-button.png" alt="addButton"></button>
									 <button id="closeButtonNet" className="close-section-button hidden" type="button" name="minredes-button" onclick="ocultar('minredes')" value="closeButton">
										 <img src="images/expand-arrow.png" alt="minusbuttom">
									 </button>
							 </div>
							 <div className="boxes-container net-social-hidden" id="minredes">
								 <div className="nets">
									 <label className="socialLabel" for="linkedin">Linkedin</label>
										<input className="users inputs" id="linkedin" type="text" name="net1" placeholder=" Rellena con tu usuario"></input>
								 </div>
								 <div className="nets">
									 <label className="socialLabel" for="facebook">Facebook</label>
									 <input className="users inputs" id="facebook" type="text" name="net2" placeholder=" Rellena con tu usuario"></input>
								 </div>
								 <div className="nets">
									 <label className="socialLabel" for="github">Github</label>
									 <input className="users inputs" id="github" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
								 </div>
								 <div className="nets">
									 <label className="socialLabel" for="twitter">Twitter</label>
									 <input className="users inputs" id="twitter" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
								 </div>
								 <div className="nets">
									 <label className="socialLabel" for="instagram">Instagram</label>
									 <input className="users inputs" id="instagram" type="text" name="net3" placeholder=" Rellena con tu usuario"></input>
								 </div>
							 </div>
						 </form>
						 <form className="form-section-container" action="index.html" method="post">
							 <div className="title-container">
								 <h2 className="title-form text-form-button">Portfolio</h2>
								 <button  id="openButtonQr" className="open-section-button shown" type="button" name="networksButton" onclick="editar('showNetsocial')" value="openButton">
									 <img src="images/expand-button.png" alt="addButton">
								 </button>
								 <button  id="closeButtonQr" className="close-section-button hidden" type="button" name="showNetsocial-button" onclick="ocultar('showNetsocial')" value="closeButton">
									 <img src="images/expand-arrow.png" alt="minusbuttom">
								 </button>
							 </div>
							 <div className="boxes-container net-social-hidden" id="showNetsocial">
								<div className="nets">
									<input className="inputPortfolio" id="inputQr" type="text" name="inputQr" placeholder=" Contenido para generar QR"></input>
									<button type="button" id="button-generateqr" value="Generar" className="buttons-save-general"></button>
								</div>
							</div>
						</form>
					</section>
				 <section className="preview-section" id="ventana2">
						 <div className="box-icons-preview">
							 <button className="cross-section-button" type="button" name="cruz-button" onclick="closePreview('ventana2')">
							 <img src="images/btnclose.png" alt="cruzbuttom"></button>
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
							 <img id="read" src="images/readSmall.png" alt="read hobbie">
							 <img id="travel" src="images/travelSmall.png" alt="travel hobbie">
							 <img id="game" src="images/videogameSmall.png" alt="game hobbie">
							 <img id="sports" src="images/sportsSmall.png" alt="sports hobbie">
							 <img id="cinema" src="images/cinemaSmall.png" alt="cinema hobbie">
							 <img id="music" src="images/musicSmall.png" alt="music hobbie">
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
							 <a href='' id='qrlink'>
								 <div id="codigoqr" className="codigoqr"></div>
							 </a>
							</div>

					 </section>
				 </section>

				 </div>
				 <div className="alert-dates invisible">
					 <button className="button-alert-img" type="button" name="button">
						 <img className="alert-cruise" src="images/btnclose.png" alt="cruise-button">
					 </button>
					 <p className="text-alert">¡Ojo! La fecha de inicio no debe ser posterior a la fecha de finalización.</p>
				 </div>
				 <div className="alert-dates invisible" id="alert-month">
					 <button className="button-alert-img" id="close-button-alert-month" type="button" name="button">
						 <img className="alert-cruise" src="images/btnclose.png" alt="cruise-button">
					 </button>
					 <p className="text-alert">¡Ojo! No has introducido el mes.</p>
				 </div>
			 </main>
			 <div id="btrs">
			<p><b>Comparte nuestra página en redes sociales</b></p>

			var ub = window.location;
			var us="https://slack.com/share?url="+"https://adalab.github.io/clarke-s2-scriptoras";
			var uf="https://www.facebook.com/sharer.php?u="+"https://adalab.github.io/clarke-s2-scriptoras";
			var ut="https://twitter.com/share?url="+"https://adalab.github.io/clarke-s2-scriptoras";
			var ug="https://plus.google.com/share?url="+"https://adalab.github.io/clarke-s2-scriptoras";
			var up="https://www.pinterest.com/pin/create/button/?url="+"https://adalab.github.io/clarke-s2-scriptoras";
			var ul="https://www.linkedin.com/shareArticle?mini=true&url="+"https://adalab.github.io/clarke-s2-scriptoras";
			var uw="whatsapp://share?url="+"https://adalab.github.io/clarke-s2-scriptoras";
			</script>
			<a href="javascript:void(0);" onclick="window.open(us,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en Slack"><img alt="Compartir en slack" className="sl" height="40" src="https://i.pinimg.com/originals/5c/49/e7/5c49e71075941267cfaf5eb2700e7049.png" title="Compartir en slack" width="40" /></a>
			<a href="javascript:void(0);" onclick="window.open(uf,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en Facebook"><img alt="Compartir en facebook" className="fb" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/facebook-long.png" title="Compartir en facebook" width="40" /></a>
			<a href="javascript:void(0);" onclick="window.open(ug,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en Google+"><img alt="Compartir en google+" className="glg" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/google-long.png" title="Compartir en google+" width="40" /></a>
			<a href="javascript:void(0);" onclick="window.open(ut,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en Twitter"><img alt="Compartir en twitter" className="twtr" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/twitter-long.png" title="Compartir en twitter" width="40" /></a>
			<a href="javascript:void(0);" onclick="window.open(up,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en Pinterest"><img alt="Compartir en pinterest" className="pnt" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/pinterest-long.png" title="Compartir en pinterest" width="40" /></a>
			<a href="javascript:void(0);" onclick="window.open(ul,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en linkedin+"><img alt="Compartir en likedin" className="lkdn" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/linkedin-long.png" title="Compartir en Likedin" width="40" /></a>
			<a href="javascript:void(0);" data-action=”share/whatsapp/share” onclick="window.open(uw,&quot;gplusshare&quot;,&quot;toolbar=0,status=0,width=548,height=325&quot;);" rel="nofollow" title="Compartir en WhatsApp+"><img alt="Compartir en WhatsApp " className="lkdn" height="40" src="https://cdn.tahonadedonpio.es/wp-content/uploads/social/whatsapp-long.png" title="Compartir en WhatsApp " width="40" /></a>
			</div>
				<footer className="footer">
					<div className="end"><h3>Scriptoras &copy; 2017</h3></div>
					<div className="end">
						<p><a className="link-contact" href="contact.html">Contacta con nosotras</a></p>
					</div>
					<div className="logo">
						<a href="http://adalab.es/" target="blank">
							<img src="images/logo-adalab.png" alt="Logo Adalab" className="logo-adalab">
						</a>
					</div>
					<a id="arriba" title="Arriba" className="invisible">
						<img src="images/arriba.png" title="Arriba" alt="Arriba">
					</a>
				</footer>
			 </body>
			</div>

    );
  }
}

export default App;
