import React from "react";
import GratitudeListItem from "./GratitudeListItem";

export default function GratitudeList({
  list,
  editGratitude,
  deleteGratitude,
}) {
  return (
    <ul>
      {list.length > 0 &&
        list.map((listItem, i) => {
          <GratitudeListItem
            key={i}
            handleEdit={() => {
              handleEdit(i);
            }}
            handleDelete={() => {
              handleDelete(i);
            }}
            text={listItem}
          />;
        })}
    </ul>
  );
}
