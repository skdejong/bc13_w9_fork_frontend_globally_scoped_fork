import React, { useState } from "react";
import './index.css';

export default function Activities() {
  const initListPhysical = [
    { id: 1, text: "Stretch" },
    { id: 2, text: "Go for a walk" },
    { id: 3, text: "Yoga routine" },
    { id: 4, text: "Do the macarena" },
  ];
  const initListEntertainment = [
    { id: 1, text: "Listen to music" },
    { id: 2, text: "Watch a film" },
    { id: 3, text: "Play a game" },
    { id: 4, text: "Watch YouTube videos" },
  ];
  const initListCreative = [
    { id: 1, text: "Do some knitting" },
    { id: 2, text: "Work on some artwork" },
    { id: 3, text: "Practise an instrument" },
    { id: 4, text: "Write a journal entry" },
  ];
  const initListRelaxation = [
    { id: 1, text: "Take a bubble bath" },
    { id: 2, text: "Meditate" },
    { id: 3, text: "Socialise" },
    { id: 4, text: "Pat your pet" },
  ];
  const [listPhysical, setListPhysical] = useState(initListPhysical);
  const [listEntertainment, setListEntertainment] = useState(
    initListEntertainment
  );
  const [listCreative, setListCreative] = useState(initListCreative);
  const [listRelaxation, setListRelaxation] = useState(initListRelaxation);

  let categories = [
    { id: 1, name: "Physical", list: listPhysical },
    { id: 2, name: "Creative", list: listCreative },
    { id: 3, name: "Entertainment", list: listEntertainment },
    { id: 4, name: "Relaxation", list: listRelaxation },
  ];

  console.log(categories.list);

  return (
    <section className="Activities">
      {categories.map((category) => {
        return (
          <div className="Activity">
            <h2>{category.name}</h2>
            <label>
              Progress:
              <progress value="32" max="100">
                32%
              </progress>
            </label>
            {category.list.map((listItem) => {
              return <li>{listItem.text}</li>;
            })}
          </div>
        );
      })}
    </section>
  );
}
