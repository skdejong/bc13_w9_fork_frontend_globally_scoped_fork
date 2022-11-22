import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput/index.js";
import GratitudeList from "./GratitudeList/index.js";

const initialGrats = ["gratitude 1", "gratitude 2", "gratitude 3"];

export default function Gratitude() {
  const [gratitudes, setGratitudes] = useState(initialGrats);

  useEffect(() => {
    async function getGratitudes() {
      const response = await fetch("http://localhost:3000/api/gratitudes");
      const data = await response.json();
      setGratitudes(data.payload);
    }
    getGratitudes();
  }, [gratitudes]);

  useEffect(() => {
    async function handleClick(userInput) {
      const responde = post();
      setGratitudes([...gratitudes, userInput]);
      console.log(gratitudes);
    }
  });

  useEffect(() => {
    async function handleDelete(i) {
      const response = del(`http://localhost:3000/api/gratitudes/${i}`);
      const data = response.json();
      if (data.success === true) {
        setGratitudes([...gratitudes.slice(0, i), ...gratitudes(i + 1)]);
      }
    }
  });

  return (
    <>
      <GratitudeInput handleClick={handleClick} />
      <GratitudeList
        list={gratitudes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}
