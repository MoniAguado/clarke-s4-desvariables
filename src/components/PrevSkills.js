import React from 'react';

class PrevSkills extends React.Component {
	render() {
		return (
			<section>
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
			</section>
		)
	}
}

export default PrevSkills;
