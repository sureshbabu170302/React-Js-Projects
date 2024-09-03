import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={10}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
