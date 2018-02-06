import React from 'react';

import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import twitter from '../../images/twitter.png';

class PrevRRSS extends React.Component {
	render() {
		return (
			<div className="sociality">
				<div className="socialNetworks">
					<ul className="social">
						<li className="linkedin">
							<a className="printnet add-linkedin"
								href={this.props.linkedin} target="_blank">linkedin</a>
						</li>
						<li className="facebook">
							<a className="printnet add-facebook" href={this.props.facebook} target="_blank">facebook</a>
						</li>
						<li className="github">
							<a className="printnet add-github" href={this.props.github} target="_blank">github</a>
						</li>
						<li className="twitter">
							<a className="printnet add-twitter" href={this.props.twitter} target="_blank">twitter</a>
						</li>
						<li className="instagram">
							<a className="printnet add-instagram" href={this.props.instagram} target="_blank">instagram</a>
						</li>
					</ul>
				</div>
			</div>
			)
		}
	}

	export default PrevRRSS;
