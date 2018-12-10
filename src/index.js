import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import NewContextAPI from "./NewContextAPI";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <NewContextAPI />
  </div>
);

render(<App />, document.getElementById("root"));
