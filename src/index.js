//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";
const date = new Date(2021, 9, 9, 15); //()can place date month andtime to check the code
const currentTime = date.getHours(); // js for getting hours
const customStyle = {
  // custiom style foe color
  color: "red"
};
let greeting; // variabke to be change according to time

if (currentTime < 12) {
  greeting = "Good Morning"; // overriding greeting
  customStyle.color = "red"; // overriding customstylr
} else if (currentTime < 18) {
  greeting = "Goodn Afternoon";
  customStyle.color = "green"; // overriding customstylr
} else {
  greeting = "Good evening";
  customStyle.color = "blue"; // overriding customstylr
}

ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
