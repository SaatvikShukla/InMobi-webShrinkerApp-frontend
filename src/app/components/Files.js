import React from "react";
import { browserHistory } from "react-router";

export class Files extends React.Component {
    state = {
        availableFiles: []
      };
    
      alpha = [];
    componentDidMount() {
    fetch('http://localhost:9000/upload-csv/files')
    .then(res => res.json())
    .then((data) => {
        // 
        let n = data.length
        for(let i = 0; i<n; i++){
            this.alpha.push({_id: data[i]._id, viewId: data[i].viedId})
            // console.log(data)
            // this.setState({
            //     availableFiles : i,
            //     data:{
            //             _id: data[i]._id, 
            //             viewId: data[i].viedId
            //         }
            //     })
        }
        this.setState({
            availableFiles : this.alpha
        })
        console.log(this.state.availableFiles[0])
    })
    .catch(console.log)
    }

    onNavigateHome() {
        browserHistory.push("/home");
    }

    render() {
        
        return (
            <div>
                <h3>The Files Page</h3>
                <p>User ID: {this.props.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }
}