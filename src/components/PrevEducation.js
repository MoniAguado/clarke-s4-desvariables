import React from 'react';

class PrevEducation extends React.Component {
	render() {
		return (
			<section>
				<section>
					<section className="timeline">

						<div class="container-timeline right" id="container-timeline-right"><div class="content-timeline">
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
							<div class="work-information-output-container">
								<p id="job-preview" class="job-title" name="careertitle">{this.props.careertitle}</p>
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
