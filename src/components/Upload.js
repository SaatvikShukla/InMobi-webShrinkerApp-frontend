import React, { Component } from 'react';

class Upload extends Component {
  baseUrl = 'http://localhost:3000/upload'

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  onClickHandler = () => {
    if (this.state.selectedFile) {
      let formData = new FormData();
      formData.append('uploadCsv', this.state.selectedFile)
      fetch(this.baseUrl, {
        method: 'POST',
        body: formData,
      }).then((response) => {
        response.json().then(result => {
          console.log(result)
        })
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Upload</h2>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
      </div>
    );
  }
}

export default Upload;