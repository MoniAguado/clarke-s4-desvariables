import React from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Image from './components/CVForm/Image';
import Form from './components/CVForm/Form';
import Alerts from './components/CVForm/Alerts';
import Share from './components/Share';
import Footer from './components/Footer';
import './scss/main.css';

import PrevData from './components/CVPreview/PrevData';
import PrevAboutme from './components/CVPreview/PrevAboutme';
import PrevExperience from './components/CVPreview/PrevExperience';
import PrevEducation from './components/CVPreview/PrevEducation';
import PrevSkills from './components/CVPreview/PrevSkills';
import PrevLanguages from './components/CVPreview/PrevLanguages';
import PrevHobbies from './components/CVPreview/PrevHobbies';
import PrevRRSS from './components/CVPreview/PrevRRSS';


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
import group from './images/group.png';
import groupMobile from './images/groupMobile.png';
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
import videogame from './images/videogame.png';
import videogameSmall from './images/videogameSmall.png'
import machine from './images/vintage8Machine.png';

class App extends React.Component {
	constructor(props){
		super(props);
		this.updateState = this.updateState.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.state = {
			previewvisible: false,
			formvisible: true,
			imagevisible: true,
			file: '',
			imagePreviewUrl: ''
		}

	}

		handleSubmit(e) {
			e.preventDefault();
			console.log('handle uploading-', this.state.file);
		}

		handleImageChange(e) {
			e.preventDefault();

			let reader = new FileReader();
			let file = e.target.files[0];

			reader.onloadend = () => {
				this.setState({
					file: file,
					imagePreviewUrl: reader.result,

				});
			}

			reader.readAsDataURL(file)
		}

		updateState(prop, value){
			const newState = {};
			newState[prop] = value;
			this.setState(newState);
		}

		handleClick() {
			this.setState ({
				open: !this.state.open,
				previewvisible:  !this.state.previewvisible,
				formvisible:  !this.state.formvisible,
				imagevisible: !this.state.imagevisible
			});
		}


  render() {
		let {imagePreviewUrl} = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<div className="thumb2" style={{backgroundImage: `url(${imagePreviewUrl})`}}></div>);
		}

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
								<section className="complete-form">
									<Image onSubmitFunction = {(e)=>this.handleSubmit(e)}
										onChangeUploadImage = {(e)=>this.handleImageChange(e)}
										newImagePreview = {$imagePreview} visible={this.state.imagevisible}/>
									<Form updatePreview={this.updateState} visible={this.state.formvisible}/>
								</section>
								<section className={`preview-section box-${this.state.previewvisible ? 'visible' : 'invisible'}`} id="ventana2">

									<section className="container-pic-preview">
										<div id="prefoto">{$imagePreview}
										</div>
									</section>
									<PrevData
										name={this.state.name}
										surname={this.state.surname}
										job={this.state.job}
										email={this.state.email}
										phone={this.state.telephone}/>
									<PrevAboutme about = {this.state.about}/>
									<PrevExperience
										jobname = {this.state.jobname}
										companyname = {this.state.companyname}
										experiencieStartYear ={this.state.experiencieStartYear}
										experiencieEndYear ={this.state.experiencieEndYear}
										experiencieStartMonth = {this.state.experiencieStartMonth}
										experiencieEndMonth = {this.state.experiencieEndMonth}/>
									<PrevEducation
										careertitle = {this.state.careertitle}
										studiescenter = {this.state.studiescenter}
										educationStartYear ={this.state.educationStartYear}
										educationEndYear ={this.state.educationEndYear}
										educationStartMonth = {this.state.educationStartMonth}
										educationEndMonth = {this.state.educationEndMonth}/>
										<PrevSkills
										skill1 = {this.state.skill1}
										skill2 = {this.state.skill2}
										skill3 = {this.state.skill3}
										skill4 = {this.state.skill4}
										percentage1 = {this.state.percentage1}
										percentage2 = {this.state.percentage2}
										percentage3 = {this.state.percentage3}
										percentage4 = {this.state.percentage4}
										visible = {this.state.visible}/>
									<PrevLanguages
										lang1 = {this.state.lang1}
										lang2 = {this.state.lang2}
										lang3 = {this.state.lang3}
										percentage1 = {this.state.percentage1}
										percentage2 = {this.state.percentage2}
										percentage3 = {this.state.percentage3}
										visible = {this.state.visible}/>
									<PrevHobbies
										read = {this.state.read}
										travel = {this.state.travel}
										games = {this.state.games}
										sports = {this.state.sports}
										cinema = {this.state.cinema}
										music = {this.state.music}/>


									<section>
										<PrevRRSS
										 	linkedin = {this.state.linkedin}
											facebook = {this.state.facebook}
											github = {this.state.github}
											twitter = {this.state.twitter}
											instagram = {this.state.instagram}/>

									</section>
								</section>

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
