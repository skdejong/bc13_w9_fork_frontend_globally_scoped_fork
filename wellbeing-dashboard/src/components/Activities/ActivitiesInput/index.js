import React, { useState } from "react";

export default function ActivitiesInput({ category, addActivity }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  function handleClick(userInput) {
    addActivity(userInput);
    setUserInput("");
  }
  return (
    <div className="input-field">
      <input
        className="activInput"
        id={`${category}-input`}
        value={userInput}
        onChange={handleChange}
      />
      <button
        className="activButton"
        onClick={() => {
          console.log(category);
          handleClick({ text: userInput, category: category });
        }}
      >
        Submit
      </button>
    </div>
  );
}
