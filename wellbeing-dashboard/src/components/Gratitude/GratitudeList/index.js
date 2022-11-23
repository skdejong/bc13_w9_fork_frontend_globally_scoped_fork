import React from "react";
import GratitudeListItem from "./GratitudeListItem";

export default function GratitudeList({
  list,
  // handleEdit, handleDelete
}) {
  return (
    <ul>
      {list.length > 0 &&
        list.map((listItem, index) => {
        return <li key={index}>{listItem.gratitude}</li>;
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
