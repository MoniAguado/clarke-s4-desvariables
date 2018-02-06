import React from 'react';

class PrevEducation extends React.Component {
	render() {
		return (
			<section>
				<section>
					<section className="timeline">

						<div className="container-timeline right" id="container-timeline-right"><div className="content-timeline">
							<div className="dates-output-container">
								<div className="dates-container">
									<h3 id="start-job-year-preview" className="title-year"></h3>
									<p id="start-job-month-preview"></p>
								</div>
								<h3 className="title-year"></h3>
								<div className="dates-container">
									<h3 id="end-job-year-preview" className="title-year"></h3>
									<p id="end-job-month-preview"> </p>
								</div>
							</div>
							<div className="work-information-output-container">
								<p id="job-preview" className="job-title" name="careertitle">{this.props.careertitle}</p>
								<p id="company-preview" name="studiescenter">{this.props.studiescenter}</p>
							</div>
						</div>
						</div>
					</section>
				</section>
				<p className="separator">* * * * * * * * * * * * * * * </p>
			</section>
		)
	}
}

export default PrevEducation;
