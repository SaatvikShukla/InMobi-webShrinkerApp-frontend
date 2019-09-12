import React, { Component } from 'react';
import Row from "./row.js"

class View extends Component {
    constructor(){
        super();
        this.state = {
            dataRcvd : {
                // maps of filename, id
            }
        }
    }
    
    componentWillMount() {
        let url = 'http://localhost:3000/view'
        let filename = {
            dataRcvd : []
        }

        fetch(url)
        .then(results => {
            return results.json()
        })
        .then(data => {
            this.setState({ dataRcvd: data })
            // console.log("start")
            // console.log(data)
            // if(data){
            //     console.log("start2")

                // for(let i =0; i<data.length; i++){
                //     filename = data[i].results.map((info, key) => {
                //         let file = info[key].filename;
                //         let url = info[key]._id;
                //         console.log("file:"+file)
                //         console.log("url:"+url)
                //         return(
                //             <div>
                //                 <p id={info.results}>
                //                     {info}
                //                     {file}
                //                     <br></br>
                //                     {url}
                //                 </p>
                //             </div>
                //         )
                //     })
                // }
                
    
            // }
            
            this.setState({dataRcvd: filename})
            console.log("state:"+this.state.dataRcvd)

        })

    }


    render() {
        return (
            <div>
                {/* <Row dataRcvd={this.state.dataRcvd.filename} /> */}
            </div>
        );
    }
}

export default View;