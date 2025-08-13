import React, { useState } from "react";

const Boton = ({ config, onFocus, onBlur, buttonRef }) => {
  const [showOutline, setShowOutline] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShowOutline(true);
    }
  };

  const handleBlur = (e) => {
    setShowOutline(false);
    if (onBlur) onBlur(e);
  };

  const handleClick = () => {
    alert("Botón clickeado");
  };

  return (
    <button
      ref={buttonRef}
      className={`${config.className} ${showOutline ? "outline-forzado" : ""}`}
      onClick={handleClick}
      disabled={config.disabled}
      onFocus={onFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {config.loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="spinner"></span>
          <span className="loading-text">
            Cargando....
          </span>
        </div>
      ) : (
        config.text
      )}
    </button>
  );
};

export default Boton;
