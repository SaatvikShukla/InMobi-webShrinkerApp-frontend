import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";
import {UploadCSV} from "./components/UploadCSV";
import {Files} from "./components/Files";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"user/:id"} component={User} />
                    <Route path={"home"} component={Home} />
                    <Route path={"uploadCSV"} component={UploadCSV} />
                    <Route path={"files"} component={Files} />
                    <Route path={"files/:id"} component={Files} />
                </Route>
                {/* <Route path={"home-single"} component={Home}/> */}
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));