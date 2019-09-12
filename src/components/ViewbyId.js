import React, { Component } from 'react';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewData: []
        }
    };

    baseUrl = 'http://localhost:3000/view';

    
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
        console.log(this.props.id)

        const { viewData } = this.state;

        return viewData.map((item, index) =>
            <table key={index}>
                <tr>
                    <td className="dataId">{item._id}</td>
                    <td className="dataFilename">{item.filename}</td>
                </tr>
            </table>)
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