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


/* 
This file is a React functional component that is used to capture user input for a gratitude journal. 

The component uses a state to store the text entered by the user and has a function that captures the user's input and updates the state. 

There is also a function that is used to add the user's input to a gratitude list using a function passed in via props. 

When the "Add" button is clicked, this function is called and the user's input is added to the list and the text field is reset to an empty string. 

The component renders an input field and an "Add" button for the user to enter their gratitude and add it to the list.

*/