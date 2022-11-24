import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput/index.js";
import GratitudeList from "./GratitudeList/index.js";
import "./index.css";

const initialGrats = [];

export default function Gratitude() {
  const [gratitudes, setGratitudes] = useState(initialGrats);
  const [response, setResponse] = useState();

  async function getGratitudes() {
    const response = await fetch("http://localhost:3000/api/gratitudes");
    const data = await response.json();
    setGratitudes(data.payload);
  }
  console.log(gratitudes);
  useEffect(() => {
    getGratitudes();
  }, [response]);

  async function handleCreate(gratitudeText) {
    console.log(gratitudeText);
    const response = await fetch(`http://localhost:3000/api/gratitudes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gratitude: gratitudeText }), //Remember to parse in the server
    });
    const dataresponse = await response.json();
    setResponse(dataresponse);
    // if (response.status === 201) {
    //   getGratitudes();
    // }
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
      <p>Today I'm grateful for...</p>
      <GratitudeInput handleCreate={handleCreate} />
      <GratitudeList list={gratitudes} handleDelete={handleDelete} />

      {/* // handleDelete={handleDelete}
        // handleEdit={handleEdit} */}
    </div>
  );
}
