import React from "react";
import Activities from "../Activities/index.js";
import Gratitude from "../Gratitude/index.js";
import Joke from "../Joke/index.js";

import "./index.css";

/**
 *
 * @returns {component}
 */
export default function App() {
  return (
    /**
     * Here we group our three components inside two divs so we could display them as we wanted using flexbox on the front page  */
    <div className="app">
      <div className="left">
        <Joke />
        <Activities />
      </div>
      <Gratitude />
    </div>
  );
}


/* 
This code defines a React component called App that displays three other components: Activities, Gratitude, and Joke. 
The App component uses the div element with the app class to group the other components inside it. It then uses the left class to group the Joke and Activities components inside a div element, and displays the Gratitude component on its own.

The App component assumes that the other three components have been imported from the specified files. It also uses the index.css file to apply styles to the components.
*/