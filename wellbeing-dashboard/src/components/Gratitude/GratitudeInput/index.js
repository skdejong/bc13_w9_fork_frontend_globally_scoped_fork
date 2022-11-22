import React, { useState } from "react";

export default function GratitudeInput({ handleClick }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
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
