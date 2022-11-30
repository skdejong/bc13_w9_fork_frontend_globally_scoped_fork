import React from "react";
import Activities from "../Activities/index.js";
import Gratitude from "../Gratitude/index.js";
import Joke from "../Joke/index.js";

import "./index.css";

/**
 * This is our App component, the highest component on our tree, which renders all the others */ 
export default function App() {
  return (
    /**
     * Here we group our three components inside two divs so we could display them as we wanted using flexbox at the front page  */
    <div className="app">
        <div className="left">
          <Joke />
          <Activities />
        </div>
        <Gratitude />
    </div>
  );
}
