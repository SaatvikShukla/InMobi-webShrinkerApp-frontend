import React from 'react'
import axios from 'axios';

class uploadCSV extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
        selectedFile: null
        }
    
    }
  render() {
    let onChangeHandler=event=>{

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          })
    
    }
    let onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:9000/upload-csv", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }
    
    return (
            <div>
                <h1>uploadCSV</h1>
                <input type="file" name="csvFile" accept=".csv" onChange={this.onChangeHandler}/>
                <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button> 

            </div>

        )
  }
}


export default uploadCSV



{/* <input type="file" id="csvFile" accept=".csv" /> */}
