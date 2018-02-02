import React from 'react';

class PrevExperienceEducation extends React.Component {
	render() {
		return (
			<section>
				<section>
					<h2 className="section-title">Experiencia y Formación</h2>
					<section className="timeline">
						<div class="container-timeline left" id="container-timeline-left"><div class="content-timeline">
							<div class="dates-output-container">
								<div class="dates-container">
									<h3 id="start-job-year-preview" class="title-year"></h3>
									<p id="start-job-month-preview"></p>
								</div>
								<h3 class="title-year"></h3>
								<div class="dates-container">
									<h3 id="end-job-year-preview" class="title-year"></h3>
									<p id="end-job-month-preview"></p>
								</div>
							</div>
							<div class="work-information-output-container">
								<p id="job-preview" class="job-title"></p>
								<p id="company-preview"></p>
							</div>
						</div>
						</div>
						<div class="container-timeline right" id="container-timeline-right"><div class="content-timeline">
							<div class="dates-output-container">
								<div class="dates-container">
									<h3 id="start-job-year-preview" class="title-year"></h3>
									<p id="start-job-month-preview"></p>
								</div>
								<h3 class="title-year"></h3>
								<div class="dates-container">
									<h3 id="end-job-year-preview" class="title-year"></h3>
									<p id="end-job-month-preview"> </p>
								</div>
							</div>
							<div class="work-information-output-container">
								<p id="job-preview" class="job-title"></p>
								<p id="company-preview"></p>
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

export default PrevExperienceEducation;
