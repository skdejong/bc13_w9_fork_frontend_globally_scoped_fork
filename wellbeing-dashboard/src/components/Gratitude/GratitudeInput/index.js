import React, { useState } from "react";

export default function GratitudeInput({ handleCreate }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }
  return (
    <section>
      <input value={userInput} onChange={handleChange} />
      <button
        onClick={() => {
          handleCreate(userInput);
        }}
      >
        Submit
      </button>
    </section>
  );
}
