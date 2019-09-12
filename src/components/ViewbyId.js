import React, { Component } from 'react';

class ViewbyId extends Component {
    baseUrl = 'http://localhost:3000/view'

    constructor(props) {
        super(props);
        this.state = {
            viewData: []
        }
    }

    componentWillMount() {
        const { match: { params } } = this.props;
        console.log()
        
        fetch(this.baseUrl+"/"+params.id).then((result) => {
            result.json().then(data => {
                this.setState({
                    viewData: data.domains
                })
            })
        })
    }

    renderItem = () => {
        const { viewData } = this.state;
        console.log((viewData));
        // return(
        //     <div>

        //     </div>
        // );
        return viewData.map((item, index) =>
                <div>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>{(item.url).trim()}</td>
                                <td>{item.targetURL.trim()}</td>
                                {/* <td className="dataFilename">{item.domains.targetURL}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
    }

    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        );
    }
}

export default ViewbyId;