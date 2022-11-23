import React, { useState } from "react";

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
    <section>
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
