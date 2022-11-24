import React, { useState } from "react";
import "./index.css";

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
      <input
        className="gratInputField"
        value={userInput}
        onChange={handleChange}
      />
      <button
        className="addButton"
        onClick={() => {
          handleClick(userInput);
        }}
      >
        Add
      </button>
    </section>
  );
}
