import React, { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import "./index.css";

/** Fetches a random joke from and external API. */
export default function Joke() {

  /* State created to store the joke provided by the external API. */  
  const [joke, setJoke] = useState("");

  /* Fn used to fetch the data we need. */
  async function getJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {

      /* We need to send a header on our get request, othorwise the API doesn't respond. */
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  /* Whenever we need to fetch information from outside our app we must wrap it inside an "useEffect" hook to avoid conflits when rendering our app. The empty array used as second argument is to prevent an infinite loop, by using it are telling React to render it only on pago load. */
  useEffect(() => {
    getJoke();
  }, []);

  return (
    <aside>
      <p className = "jokeText">
        {joke}
      </p>

      {/* Here we define that "onClick" our button will call the "getJoke" fn. */}
      <button
        className="jokeButton"
        onClick={() => {
          getJoke();
        }}
      >
        {/* Icon for the refresh button. */}
        <FaRedo />
      </button>
    </aside>
  );
}
