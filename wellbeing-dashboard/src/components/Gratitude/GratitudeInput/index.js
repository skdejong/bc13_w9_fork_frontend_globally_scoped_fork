import React, { useState } from "react";
import "./index.css";

/**
 *  Component responsible for capturing the user input, using function received as props by it's parent component */
export default function GratitudeInput({ handleCreate }) {
  /**
   * State created to receive the text provided by the user */
  const [userInput, setUserInput] = useState("");

  /**
   * Function that captures whatever the user types and update our "userInput" state  */
  function handleChange(e) {
    setUserInput(e.target.value);
  }

  /**
   * Function that adds the "userInput" state to our list using the "handleCreate" function and resets the text field to blank */
  function handleClick(userInput) {
    handleCreate(userInput);
    setUserInput("");
  }

  /**
   * Here we set some props to be passed ahead. 
   * We also assign the "userInput" content to the "value" prop.
   * We also define that the "handleClick" function will be called "onChange."   */
  return (
    <section className="GratitudeInput">
      <input
        className="gratInputField"
        value={userInput}
        onChange={handleChange}
      />
      {/**
Here we define that "onClick" the "handleClick" function will be called using the "userInput" state as argument.
 */}
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
