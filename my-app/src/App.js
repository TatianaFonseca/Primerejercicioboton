import React, { useState, useRef } from "react";
import Boton from "./Boton";
import buttonStates from "./EstadosBotones"; 
import "./ButtonStates.css"; 

function App() {
  const [currentState, setCurrentState] = useState("primary");
  const botonRef = useRef(null);

  const handleFocusClick = () => {
    setCurrentState("focus");
    setTimeout(() => {
      if (botonRef.current) {
        botonRef.current.focus();
      }
    }, 0);
  };

  return (
    <div className="App">

      <Boton
        config={buttonStates[currentState]}
        onFocus={() => setCurrentState("focus")}
        onBlur={() => setCurrentState("primary")}
        buttonRef={botonRef}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrentState("primary")}>Normal</button>
        <button onClick={() => setCurrentState("hover")}>Hover</button>
        <button onClick={handleFocusClick}>Focus</button>
        <button onClick={() => setCurrentState("disabled")}>Deshabilitado</button>
        <button onClick={() => setCurrentState("loading")}>Cargando</button>
      </div>

    </div>
  );
}

export default App;