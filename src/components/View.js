import React, { Component } from 'react';
import Fetch from './fetch.js'


class View extends Component {
    render() {
        return (
            <div>
                below is fetch
                <Fetch />
            </div>
        );
    }
}

export default View;