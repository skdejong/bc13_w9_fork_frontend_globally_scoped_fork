import React, { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    async function getJoke() {
      const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
          Accept: "application/json",
        },
        // mode: "no-cors",
      });
      const data = await response.json();
      console.log(data);
      setJoke(data.joke);
    }
    getJoke();
  }, []);

  return (
    <aside>
      <p>{joke}</p>
      <button className="JokeButton">
        <FaRedo />
      </button>
    </aside>
  );
}
