import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Followers from "./components/Followers";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>GITHUB FOLLOWERS</h1>
          <Followers />
        </div>
      </Provider>
    );
  }
}

export default App;
