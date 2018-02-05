import React from 'react';



class Image extends React.Component{

  render() {
    return (
			<form className="container-image" onSubmit={this.props.onSubmitFunction}>
				<div className="foto photo" title="Subir imagen"></div>
				<input type="file" id="files" name="name" className="button-upload" onChange={this.props.onChangeUploadImage}></input>
			</form>
	);
}
}

export default Image;
