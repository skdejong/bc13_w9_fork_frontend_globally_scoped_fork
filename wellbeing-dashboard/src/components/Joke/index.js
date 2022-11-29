import React, { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import "./index.css";

export default function Joke() {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setJoke(data.joke);
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <aside>
      <p className = "jokeText">
        {joke}
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
