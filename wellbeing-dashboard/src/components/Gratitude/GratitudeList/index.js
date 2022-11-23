import React from "react";
import GratitudeListItem from "./GratitudeListItem";

export default function GratitudeList({
  list,
  // handleEdit, handleDelete
}) {
  return (
    <ul>
      {list.length > 0 &&
        list.map((listItem) => {
          <li>{listItem}</li>;
          // key={index}
          // handleEdit={() => {
          //   handleEdit(index);
          // }}
          // handleDelete={() => {
          //   handleDelete(index);
          // }}
        })}
    </ul>
  );
}
