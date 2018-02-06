import React from 'react';



class Image extends React.Component{

  render() {
    return (
			<form onSubmit={this.props.onSubmitFunction} className={`container-image box-${this.props.visible ? 'visible' : 'invisible'}`}>
				<div className="foto photo" title="Subir imagen"></div>
				<input type="file" id="files" name="name" className="button-upload" onChange={this.props.onChangeUploadImage}></input>
			</form>
	);
}
}

export default Image;
