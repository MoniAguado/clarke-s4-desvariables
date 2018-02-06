import React from 'react';

class PrevExperience extends React.Component {
	render() {
		return (
			<section>
				<section>
					<h2 className="section-title">Experiencia y Formación</h2>
					<section className="timeline">
						<div className="container-timeline left" id="container-timeline-left"><div className="content-timeline">
							<div className="dates-output-container">
								<div className="dates-container">
									<h3 id="start-job-year-preview" className="title-year"></h3>
									<p id="start-job-month-preview"></p>
								</div>
								<h3 className="title-year"></h3>
								<div className="dates-container">
									<h3 id="end-job-year-preview" className="title-year"></h3>
									<p id="end-job-month-preview"></p>
								</div>
							</div>
							<div className="work-information-output-container">
								<p id="job-preview" className="job-title">{this.props.jobname}</p>
								<p id="company-preview">{this.props.companyname}</p>
							</div>
						</div>
						</div>

					</section>
				</section>
			</section>
		)
	}
}

export default PrevExperience;
