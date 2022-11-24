import React, { useState } from "react";
import './index.css';

export default function GratitudeInput({ handleCreate }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick(userInput) {
    handleCreate(userInput);
    setUserInput("");
  }

  return (
    <section className="GratitudeInput">
      <input value={userInput} onChange={handleChange} />
      <button
        onClick={() => {
          handleClick(userInput);
        }}
      >
        Submit
      </button>
    </section>
  );
}
