import React, { useState } from "react";
import "./index.css";
import ActivitiesInput from "./ActivitiesInput";

export default function Activities() {
  function handleDelete(i, category) {
    console.log(i, category);
    if (category === "physical") {
      setListPhysical([
        ...listPhysical.slice(0, i),
        ...listPhysical.slice(i + 1),
      ]);
    }
    if (category === "entertainment") {
      setListEntertainment([
        ...listEntertainment.slice(0, i),
        ...listEntertainment.slice(i + 1),
      ]);
    }
    if (category === "creative") {
      setListCreative([
        ...listCreative.slice(0, i),
        ...listCreative.slice(i + 1),
      ]);
    }
    if (category === "relaxation") {
      setListRelaxation([
        ...listRelaxation.slice(0, i),
        ...listRelaxation.slice(i + 1),
      ]);
    }
  }

  function addActivity(item) {
    console.log(item);
    if (item.category === "physical") {
      setListPhysical([...listPhysical, item]);
    }
    if (item.category === "entertainment") {
      setListEntertainment([...listEntertainment, item]);
    }
    if (item.category === "creative") {
      setListCreative([...listCreative, item]);
    }
    if (item.category === "relaxation") {
      setListRelaxation([...listRelaxation, item]);
    }
  }

  const initListPhysical = [
    { id: 1, text: "Stretch", category: "physical" },
    { id: 2, text: "Go for a walk", category: "physical" },
    { id: 3, text: "Yoga routine", category: "physical" },
    { id: 4, text: "Do the macarena", category: "physical" },
  ];
  const initListEntertainment = [
    { id: 1, text: "Listen to music", category: "entertainment" },
    { id: 2, text: "Watch a film", category: "entertainment" },
    { id: 3, text: "Play a game", category: "entertainment" },
    { id: 4, text: "Watch YouTube videos", category: "entertainment" },
  ];
  const initListCreative = [
    { id: 1, text: "Do some knitting", category: "creative" },
    { id: 2, text: "Work on some artwork", category: "creative" },
    { id: 3, text: "Practise an instrument", category: "creative" },
    { id: 4, text: "Write a journal entry", category: "creative" },
  ];
  const initListRelaxation = [
    { id: 1, text: "Take a bubble bath", category: "relaxation" },
    { id: 2, text: "Meditate", category: "relaxation" },
    { id: 3, text: "Socialise", category: "relaxation" },
    { id: 4, text: "Pat your pet", category: "relaxation" },
  ];
  const [listPhysical, setListPhysical] = useState(initListPhysical);
  const [listEntertainment, setListEntertainment] = useState(
    initListEntertainment
  );
  const [listCreative, setListCreative] = useState(initListCreative);
  const [listRelaxation, setListRelaxation] = useState(initListRelaxation);

  let categories = [
    { id: 1, name: "Physical", category: "physical", list: listPhysical },
    { id: 2, name: "Creative", category: "creative", list: listCreative },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
      list: listEntertainment,
    },
    { id: 4, name: "Relaxation", category: "relaxation", list: listRelaxation },
  ];

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
            {category.list.map((listItem, i) => {
              return (
                <li className="actList">
                  {listItem.text}
                  <button className="actButton"
                    onClick={() => {
                      handleDelete(i, listItem.category);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
            <div className="actInput">
              <ActivitiesInput
                category={category.category}
                addActivity={addActivity}
              />
            </div>  
          </div>
        );
      })}
    </section>
  );
}
