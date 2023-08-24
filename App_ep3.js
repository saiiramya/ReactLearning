import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "I am h1 🚀");

console.log(heading);

const jsxHeading = <h1>"I am from jsx heading 🚀"</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
