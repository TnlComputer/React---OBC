import React, { useState } from "react";
import PropTypes from "prop-types";

const Greetingf = (props) => {
  //  Breve Introdiccion a useState
  const [age, setage] = useState(57);

  const birthday = () => {
    setage(age + 1);
  };
  return (
    <div>
      <h1>Hola {props.name} desde componente funcional !</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir Años</button>
      </div>
    </div>
  );
};

Greetingf.propTypes = {
  name: PropTypes.string,
};

export default Greetingf;
