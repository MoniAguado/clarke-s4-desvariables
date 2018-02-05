import React from 'react';


class Image extends React.Component{

  render() {
    return (
			<div>
				<input type="file" id="files" name="name" className="" onChange={this.props.onChangeUploadImage}>{this.props.newImagePreview}</input>
				<div className="foto photo" title="Subir imagen" onSubmit = {this.props.onSubmitFunction}  ></div>
			</div>
	);
}
}

export default Image;
