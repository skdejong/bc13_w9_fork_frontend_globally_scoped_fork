import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput/index.js";
import GratitudeList from "./GratitudeList/index.js";

const initialGrats = [];

export default function Gratitude() {
  const [gratitudes, setGratitudes] = useState(initialGrats);

  async function getGratitudes() {
    const response = await fetch("http://localhost:3000/api/rg");
    const data = await response.json();
    setGratitudes(data.payload);
    console.log(gratitudes);
  }

  useEffect(() => {
    getGratitudes();
  }, []);

  async function handleCreate(gratitudeText) {
    const response = await fetch(`http://localhost:3000/api/rg`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gratitudeText), //Remember to parse in the server
    });
    if (response.status === 201) {
      getGratitudes();
    }
  }

  async function handleDelete(index) {
    const response = await fetch(
      `http://localhost:3000/api/gratitudes/${index}`,
      {
        method: "DELETE",
      }
    );

    if (response.status === 201) {
      getGratitudes();
    }
  }

  return (
    <>
      <GratitudeInput handleCreate={handleCreate} />
      <GratitudeList list={gratitudes} />

      {/* // handleDelete={handleDelete}
        // handleEdit={handleEdit} */}
    </>
  );
}
