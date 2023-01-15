import React, { useState } from "react";
import ContactComponent from "./component/contactos";
import ContactForm from "./component/contactoForm";
import "./App.css";
const App = () => {
  const defaultContact = [
    { nombre: "Jorge", email: "Martinez", conectado: true },
    { nombre: "Oscar", email: "Gómez", conectado: true },
    { nombre: "Raul", email: "Fernandez", conectado: true },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>

      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent
              key={index}
              contacto={contacto}
              changeState={changeState}
              remove={remove}
            />
          );
        })}
      </div>

      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
};

export default App;
