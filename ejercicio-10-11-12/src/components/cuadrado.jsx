import React from "react";

let red = 0;
let green = 200;
let blue = 150;

const cuadradoStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
};

const Cuadrado = () => {
  return <div className="cuadrado" onMouseOver={cuadradoStyle}></div>;
};

export default Cuadrado;
