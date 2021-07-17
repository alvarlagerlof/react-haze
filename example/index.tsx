import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Haze from "react-haze";

import List from "../showcase/List";
import "../showcase/style.css";

const App = () => {
  return (
    <div>
      <Haze
        orientation="horizontal"
        scrollOffset={20}
        gradientSize={50}
        gradientColor="rgb(255, 254, 249)"
      >
        <List.Horizontal />
      </Haze>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
