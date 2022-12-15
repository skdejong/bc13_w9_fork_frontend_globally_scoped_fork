import React, { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import "./index.css";

/** Fetches a random joke from and external API. */
export default function Joke() {
  /**
   * State created to store the joke provided by the external API.
   */
  const [joke, setJoke] = useState("");

  /**
   * Function used to fetch the data we need.
   */
  async function getJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
      /**
       * We need to send a header on our get request, otherwise the API doesn't respond.
       */
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  /**
   * Whenever we need to fetch information from outside our app we must wrap it inside an "useEffect" hook to avoid conflicts when rendering our app. 
   * The empty array [] used as second argument is to prevent an infinite loop. By using it, we are telling React to render it only on page load.
   */
  useEffect(() => { 
    getJoke();
   }, 
   []);

  return (
    <aside>
      <p className="jokeText">{joke}</p>

      {/**
       Here we define that "onClick" our button will call the "getJoke" function. 
       */}
      <button
        className="jokeButton"
        onClick={() => {
          getJoke();
        }}
      >
        {/** Icon for the refresh button.
         */}
        <FaRedo />
      </button>
    </aside>
  );
}


/* 
The code is a React component called Joke that fetches a random joke from an external API and displays it to the user. 

When the user clicks the refresh button, the component fetches a new joke from the API and updates the displayed joke. 

The component uses the useState hook to store the joke provided by the API and the useEffect hook to fetch the joke when the component is rendered. 

The component also uses the FaRedo icon from the react-icons library to display a refresh icon on the button.
*/