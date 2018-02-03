import React from 'react';

class  Share extends React.Component {
	render() {
		return (
			<div id="btrs">
				<p><b>Comparte nuestra página en redes sociales</b></p>
				<div className="share">
					<div className="share-box share-slack">Slack</div>
					<div className="share-box share-fb">Facebook</div>
					<div className="share-box share-gog">Google+</div>
					<div className="share-box share-tw">Twitter</div>
					<div className="share-box share-pint">Pinterest</div>
					<div className="share-box share-li">Linkedin</div>
					<div className="share-box share-wp">WhatsApp</div>
				</div>
			</div>
		)
	}
}

export default Share;
