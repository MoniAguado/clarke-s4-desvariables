import React from 'react';

class PrevExperience extends React.Component {
	render() {
		return (
			<section>
				<section>
					<h2 className="section-title">Experiencia y Formación</h2>
					<section className="timeline">
						<div class="container-timeline left" id="container-timeline-left"><div class="content-timeline">
							<div class="dates-output-container">
								<div class="dates-container">
									<h3 id="start-job-year-preview" class="title-year">{this.props.experiencieStartYear}</h3>
									<p id="start-job-month-preview">{this.props.experiencieStartMonth}</p>
								</div>
								<h3 class="title-year"></h3>
								<div class="dates-container">
									<h3 id="end-job-year-preview" class="title-year">{this.props.experiencieEndYear}</h3>
									<p id="end-job-month-preview">{this.props.experiencieEndMonth}</p>
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
