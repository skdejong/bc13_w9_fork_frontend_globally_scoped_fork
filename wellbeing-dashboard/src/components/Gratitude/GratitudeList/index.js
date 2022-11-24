import React from "react";
import './index.css';

export default function GratitudeList({
  list,
  handleDelete,
  // handleEdit
}) {
  return (
    <ul className="GratitudeList">
      {list.length > 0 &&
        list.map((listItem) => {
          return (
            <li className="gratitudeDeleteButton"
            key={listItem.id}>
              {listItem.gratitude}
              <button 
                onClick={() => {
                  handleDelete(listItem.id);
                }}
              >
              X
              </button>
            </li>
          );
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
