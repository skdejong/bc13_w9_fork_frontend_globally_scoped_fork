import React, { useState } from "react";
import "./index.css";
import ActivitiesInput from "./ActivitiesInput";
import { FaTrashAlt } from "react-icons/fa";

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
    { id: 1, text: "Stretched", category: "physical" },
    { id: 2, text: "Went for a walk", category: "physical" },
    { id: 3, text: "Yoga routine", category: "physical" },
    { id: 4, text: "Diid the macarena", category: "physical" },
  ];
  const initListEntertainment = [
    { id: 1, text: "Listened to an album", category: "entertainment" },
    { id: 2, text: "Watched a film", category: "entertainment" },
    { id: 3, text: "Played a video game", category: "entertainment" },
    { id: 4, text: "Watched YouTube videos", category: "entertainment" },
  ];
  const initListCreative = [
    { id: 1, text: "Knitted 20 rows", category: "creative" },
    { id: 2, text: "Did some artwork", category: "creative" },
    { id: 3, text: "Practised violin", category: "creative" },
    { id: 4, text: "Wrote in my journal", category: "creative" },
  ];
  const initListRelaxation = [
    { id: 1, text: "Had a bubble bath", category: "relaxation" },
    { id: 2, text: "Meditated", category: "relaxation" },
    { id: 3, text: "Socialised", category: "relaxation" },
    { id: 4, text: "Patted my pet", category: "relaxation" },
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

  let progValue = 0;

  return (
    <section className="Activities">
      {categories.map((category) => {
        progValue = category.list.length;
        return (
          <div className="Activity">
            <div class="actTop">
              <h2>{category.name}</h2>
              <div className="progress">
                <label class="label">
                  Progress: {progValue}/8 &emsp;
                  <progress
                    class="progress"
                    value={progValue}
                    max="8"
                  ></progress>
                </label>
              </div>

              <div className="scroll">
                {category.list.map((listItem, i) => {
                  return (
                    <li className="actList">
                      {listItem.text}
                      <button
                        className="actButton"
                        onClick={() => {
                          handleDelete(i, listItem.category);
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </li>
                  );
                })}
              </div>
            </div>
            <ActivitiesInput
              category={category.category}
              addActivity={addActivity}
            />
          </div>
        );
      })}
    </section>
  );
}
