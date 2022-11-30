import React from "react";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";

/** 
 * Component responsible for displaying the information contained on  "Gatitude list" stored at our DB. */
export default function GratitudeList({

/** 
 * Reveives the current state of our "gratitude list" and the "handleDelete" fn passed down by props in the Gratitude component */
  list,
  handleDelete,
  // handleEdit
}) {

/** 
 * Here we map through our "list" prop, creating a new array and adding a new item for each one held by the current state, then using dot notation to grab the ID of each item and its text content. With that done we recycle the ID value as unique key for each <li> tag element and display the "listItem.gratitude" as the <li> text content itself. */ 
  return (

    <div>
      {list === undefined && (
        <span data-cy="empty" className="empty">
          No gratitudes here.
        </span>
      )}
      <ul className="GratitudeList" data-cy="list">
        {list.length > 0 && //this line is a conditional rendering. Checks if there are any items in the list. If there are, it will continue with the rest of this JS code. If not, it won't render anything and it also won't give an error.
          list.map((listItem) => {
            return (
              <li className="gratitudeListItem" key={listItem.id}>
                {listItem.gratitude}
                <button
                  className="gratitudeDeleteButton"
                  onClick={() => {
                    handleDelete(listItem.id);
                  }}
                >
                  <FaTrashAlt />
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
    </div>

  );
  }
