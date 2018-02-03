import React from 'react';

class PrevLanguages extends React.Component {
	render() {
		return (
			<section>
				<section id="languages-preview">
					<h2 className="title-section">Idiomas</h2>
					<div className="languages-bar-preview">
						<div className="percentage-bar" style={{width:`${this.props.percentage1}%`}}>
							<p className="text-bar-preview">{this.props.lang1}</p>
						</div>
					</div>
					<div className="languages-bar-preview">
						<div className="percentage-bar" style={{width:`${this.props.percentage2}%`}}>
							<p className="text-bar-preview">{this.props.lang2}</p>
						</div>
					</div>
					<div className="languages-bar-preview">
						<div className="percentage-bar" style={{width:`${this.props.percentage3}%`}}>
							<p className="text-bar-preview">{this.props.lang3}</p>
						</div>
					</div>
				</section>
			<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevLanguages;
