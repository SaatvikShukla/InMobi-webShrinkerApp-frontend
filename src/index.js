import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import uploadCSV from './pages/uploadCSV'
import files from './pages/files'

const routing = (
<Router>
    <div>
    <Route path="/" component={App} />
    <Route path="/uploadCSV" component={uploadCSV} />
    <Route path="/files" component={files} />
    </div>
</Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) module.hot.accept();