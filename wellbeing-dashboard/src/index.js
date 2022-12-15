import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import App from "./components/App/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* 
This code is using the ReactDOM module to create a root element and render a React component called App inside it. 
The createRoot() method is used to create the root element, which is then rendered using the render() method. 
This code assumes that the App component has been imported from the ./components/App/index.js file.

By using React.StrictMode, the code is enabling strict mode for the application, which helps find potential problems in the code by triggering warnings in development mode. This is not necessary for the code to function, but can be useful for catching potential issues early on.

In order to run this code, you would need to make sure that the React library has been installed and is available in your project. You would also need to create the App component and place it in the specified location.
*/