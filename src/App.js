import React, { Component } from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Form from './components/Form';
import Preview from './components/Preview';
import Alerts from './components/Alerts';
import Share from './components/Share';
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
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			previewvisible: false,
			formvisible: true
		}
	}
		handleClick() {
			this.setState ({
				previewvisible:  !this.state.previewvisible,
				formvisible:  !this.state.formvisible
			})
	}

  render() {
    return (
			<div className="App">
				<body className="wrapper body" id="contenedorPrincipal">
			 		<Header clickButton ={this.handleClick}/>
			 		<main className="main-wrapper bloque index-main">
			 			<Cover />
						<section>
							<button id="button-down" type="button" name="button-down"><a href="index.html#empty-container"><img src={expandbuttonmedium} alt="rellena-los-campos"/></a></button>
							<div id="empty-container"></div>
							<div className="main-web-sections">
								{this.state.formvisible === true?
									<Form /> : null}
								{this.state.previewvisible === true?
									<Preview /> : null}
								<Alerts />
							</div>
						</section>
			 		</main>
					<Share />
					<Footer />
			 	</body>
			</div>

    );
  }
}

export default App;
