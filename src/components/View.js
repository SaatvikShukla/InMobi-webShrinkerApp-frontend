import React, { Component } from 'react';

class View extends Component {
    baseUrl = 'http://localhost:3000/view'

    constructor(props) {
        super(props);
        this.state = {
            viewData: []
        }
    }

    componentDidMount() {
        fetch(this.baseUrl).then((result) => {
            result.json().then(data => {
                this.setState({
                    viewData: data
                })
            })
        })
    }

    renderItem = () => {
        const { viewData } = this.state;

        return viewData.map((item, index) =>
                <div>
                    <table key={index}>
                        <tbody>
                            <tr>
                                <td className="dataId">{item._id}</td>
                                <td className="dataFilename">{item.filename}</td>
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

export default View;