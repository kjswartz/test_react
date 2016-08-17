import "../css/test.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

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
  <Route path="/" component={App} />
);

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));
