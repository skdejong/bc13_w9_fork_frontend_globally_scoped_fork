import React from "react";
import Activities from "../Activities/index.js";
import Gratitude from "../Gratitude/index.js";
import Joke from "../Joke/index.js";

import "./index.css";

export default function App() {
  return (
    <div className="app">
        <div className="left">
          <Joke />
          <Activities />
        </div>
        <Gratitude />
    </div>
  );
}
