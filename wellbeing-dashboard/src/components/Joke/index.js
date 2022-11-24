import React, { useEffect, useState } from "react";
import { FaRedo, FaLaughSquint } from "react-icons/fa";

export default function Joke() {
  const [joke, setJoke] = useState("");
  const [jokeResponse, setJokeResponse] = useState();

  async function getJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
      // mode: "no-cors",
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <aside>
      <p className="jokeText">
        <i>
          <b>{joke}</b>
        </i>
      </p>
      <button
        className="jokeButton"
        onClick={() => {
          getJoke();
        }}
      >
        <FaRedo />
      </button>
    </aside>
  );
}
