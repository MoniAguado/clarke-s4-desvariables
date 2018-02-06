import React from 'react';

class PrevSkills extends React.Component {
	render() {
		return (
			<section>
				<section className="section-skills">
					<h2 className="title-section">Habilidades</h2>
					<div className="skill-pre">
						<div className="skill-title" id="skill1-preview">{this.props.skill1}</div>
						<div className={`barra barra_${this.props.visible ? 'visible' : 'invisible'}`}>
							<div className="barra_front" style={{width:`${this.props.percentage1}%`}} id="barra1"></div>
						</div>
						<div className="skill-title" id="skill2-preview">{this.props.skill2}</div>
						<div className={`barra barra_${this.props.visible ? 'visible' : 'invisible'}`}>
							<div className="barra_front" id="barra2" style={{width:`${this.props.percentage2}%`}}></div>
						</div>
						<div className="skill-title" id="skill3-preview">{this.props.skill3}</div>
						<div className={`barra barra_${this.props.visible ? 'visible' : 'invisible'}`}>
							<div className="barra_front" id="barra3" style={{width:`${this.props.percentage3}%`}}></div>
						</div>
						<div className="skill-title" id="skill4-preview">{this.props.skill4}</div>
						<div className={`barra barra_${this.props.visible ? 'visible' : 'invisible'}`}>
							<div className="barra_front" id="barra4" style={{width:`${this.props.percentage4}%`}}></div>
						</div>
					</div>
				</section>
				<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevSkills;
