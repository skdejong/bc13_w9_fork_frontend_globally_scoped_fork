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
    <>
      <input
        id={`${category}-input`}
        value={userInput}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          console.log(category);
          handleClick({ text: userInput, category: category });
        }}
      >
        Submit
      </button>
    </>
  );
}
