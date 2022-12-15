import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput/index.js";
import GratitudeList from "./GratitudeList/index.js";
import "./index.css";

/**
 *  Component responsible for the input and display of the Gratitude section of our app */
export default function Gratitude() {

/**
 * Here we use a "useState" hook to manipulate the gratitude variable that holds the current state of our "gratitude list" in our database, */
  const [gratitudes, setGratitudes] = useState([]);

/**
 * Here we have a second "useState" hook to handle the POST and DELETE methods,
re-rendering the component only when this state changes */ 
  const [response, setResponse] = useState();

/** This function will fetch the data from our database */
  async function getGratitudes() {
    const response = await fetch("http://localhost:3000/api/gratitudes");
    const data = await response.json();
    setGratitudes(data.payload);
  }

/**
 * Here we have a hook to fetch and re-render the Gratitude component whenever the "response" state changes */
  useEffect(() => {
    getGratitudes();
  }, [response]);

/**
 * Handles the creation of new items on our Gratitude list, fetches our API data, POST a new item, then updates our "response" state. */
  async function handleCreate(gratitudeText) {
    const response = await fetch(`http://localhost:3000/api/gratitudes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gratitude: gratitudeText }), //Remember to parse in the server
    });
    const dataresponse = await response.json();
    setResponse(dataresponse);
  }

  /**
   * Handles the deletion of items on our Gratitude list, fetches our API data, DELETE an item, then updates our "response" state. */
  async function handleDelete(index) {
    const response = await fetch(
      `http://localhost:3000/api/gratitudes/${index}`,
      {
        method: "DELETE",
      }
    );
    const dataresponse = await response.json();
    setResponse(dataresponse);
  }

  /**
   * This component (Gratitude) has two child components which we are rendering below. 
   * We are also passing information from this file to them via props: 
   *    the function "handleCreate", 
   *    our "gratitudes" state, and 
   *    the "handleDelete" function   */ 
  return (
    <div className="GratitudeParent">
      <div className="inputBox">
        <h3>Today I'm grateful for...</h3>
        <GratitudeInput handleCreate={handleCreate} />
      </div>
      <div className="gratitudeListBox">
        <h3>My Gratitude List:</h3>
        <GratitudeList list={gratitudes} handleDelete={handleDelete} />
      </div>
    </div>
  );
}


/* 
This code defines a React component called Gratitude, which is responsible for the input and display of gratitude items in the application. 

The Gratitude component uses the useState and useEffect hooks from the React library to manage its internal state and fetch data from the API.

The Gratitude component has two child components: 
GratitudeInput, which is used to input new gratitude items, and 
GratitudeList, which is used to display the list of gratitude items. 

The Gratitude component passes the handleCreate and handleDelete functions and 
the gratitudes state to these child components as props,
 allowing them to add and delete items from the list.

In order to use this component, you would need to make sure that the React library has been installed and is available in your project. 

You would also need to create the GratitudeInput and GratitudeList components and place them in the specified locations. 

Once you have done this, you can use the Gratitude component in your application by importing it and rendering it in the desired location.

*/