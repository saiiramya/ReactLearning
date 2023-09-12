import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export function Dummy() {
  const [color, setColor] = useState("white");
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");

  useEffect(() => {
    setWhiteColor();
  }, [color, color1, color2]);

  const setWhiteColor = () => {
    if (color && color1 && color2 === "green") {
      setColor("white");
      setColor2("white");
      setColor1("white");
    }
  };

  const handleDivClick = () => {
    setColor("green");
  };
  const handleDivClick1 = () => {
    setColor1("green");
  };
  const handleDivClick2 = () => {
    setColor2("green");
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          backgroundColor: color,
          height: "100px",
          width: "100px",
          border: "1px solid black",
        }}
        onClick={handleDivClick}
      />
      <div
        style={{
          display: "flex",
          backgroundColor: color1,
          height: "100px",
          width: "100px",
          border: "1px solid black",
        }}
        onClick={handleDivClick1}
      />
      <div
        style={{
          display: "flex",
          backgroundColor: color2,
          height: "100px",
          width: "100px",
          border: "1px solid black",
        }}
        onClick={handleDivClick2}
      />
    </div>
  );
}
//export default Dummy;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dummy />);
