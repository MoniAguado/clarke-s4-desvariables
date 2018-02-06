import React from 'react';

class PrevAboutme extends React.Component {
	render() {
		return (
			<section>
				<section>
					<h2 className="section-title">Sobre mí</h2>
					<p id="aboutMe-preview" className="section-title">{this.props.about}</p>
				</section>
				<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevAboutme;
