import React from "react";

export default function GratitudeListItem({
  text,
  // handleDelete, handleEdit
}) {
  console.log("ListItem rerender");
  return (
    <li>
      {text}
      {/* <button onClick={handleDelete}>x</button>
      <button onClick={handleEdit}></button> */}
    </li>
  );
}
