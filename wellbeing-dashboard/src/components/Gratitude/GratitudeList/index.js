import React from "react";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";

/**
 * Component responsible for displaying the information contained on "Gratitude list" stored in our DB.
 * @returns {Object}
 */
export default function GratitudeList({
  /**
   * Reviews the current state of our "gratitude list" and the "handleDelete" function passed down by props in the Gratitude component */
  list,
  handleDelete,
  // handleEdit
}) {
  /**
   * Here we map through our "list" prop, creating a new array and adding a new item for each one held by the current state. 
   * Then we use dot notation to grab the ID of each item and its text content. 
   * With that done, we recycle the ID value as a unique key for each <li> tag element and 
   * display the "listItem.gratitude" as the <li> text content itself. */
  return (
    <div>
      {list === undefined && (
        <span data-cy="empty" className="empty">
          No gratitudes here.
        </span>
      )}
      <ul className="GratitudeList" data-cy="list">
        {list.length > 0 && //this line is conditional rendering. It checks if there are any items in the list. If there are, it will continue with the rest of this JS code. If not, it won't render anything and it also won't give an error.
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


/* 
This code defines a React component called GratitudeList, which is responsible for displaying the list of gratitude items in the application. 

The GratitudeList component takes a list prop and a handleDelete prop, which are passed down from the parent Gratitude component. 

The list prop contains the current state of the gratitude list, and 
the handleDelete prop is a function that can be used to delete items from the list.

The GratitudeList component maps over the items in the list prop, rendering a new <li> element for each item. 

Each <li> element displays the text of the gratitude item and a trash icon that, when clicked, calls the handleDelete function to delete the item from the list.

In order to use this component, you would need to make sure that the React and React-Icons libraries have been installed and are available in your project. You would also need to make sure that the Gratitude component is available and that it is passing the list and handleDelete props to the GratitudeList component. Once you have done this, you can use the GratitudeList component in your application by importing it and rendering it in the desired location.
*/