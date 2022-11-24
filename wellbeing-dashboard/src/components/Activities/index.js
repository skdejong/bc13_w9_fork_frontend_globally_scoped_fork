import React from "react";
import Physical from "./Physical/index";
import Entertainment from "./Entertainment";
import Relaxation from "./Relaxation";
import Creative from "./Creative";

let categories = [
  { id: 1, name: "Physical" },
  { id: 2, name: "Creative" },
  { id: 3, name: "Entertainment" },
  { id: 4, name: "Relaxation" },
];

export default function Activities() {
  return (
    <section>
      {categories.map((category) => {
        <>
          <h2>{category.name}</h2>
          <label>
            Progress:
            <progress value="32" max="100">
              32%
            </progress>
          </label>
          {}
        </>;
      })}
    </section>
  );
}
