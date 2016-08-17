import "../css/test.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

///////////////////////////////////////////////////////////////////////////////
var App = React.createClass({
  render() {
    return (
      <div id="test-app">
        <div id="content" className="container">
          Hello World
        </div>
      </div>
    );
  },
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
