import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Haze from "../.";

import List from "../showcase/List";
import "../showcase/style.css";

const App = () => {
  return (
    <div>
      <Haze
        orientation="horizontal"
        gradientSize="50px"
        offset={20}
        color="rgb(255, 254, 249)"
      >
        <List.Horizontal />
      </Haze>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
