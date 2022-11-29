import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput/index.js";
import GratitudeList from "./GratitudeList/index.js";
import "./index.css";

export default function Gratitude() {
  const [gratitudes, setGratitudes] = useState([]);
  const [response, setResponse] = useState();

  async function getGratitudes() {
    const response = await fetch("http://localhost:3000/api/gratitudes");
    const data = await response.json();
    setGratitudes(data.payload);
  }

  useEffect(() => {
    getGratitudes();
  }, [response]);

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
