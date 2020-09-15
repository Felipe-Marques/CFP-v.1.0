import React from 'react';

export default function Filtro({ onChange }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;

    onChange(newText);
  };

  return (
    <input
      id="filtro"
      type="text"
      className="validate"
      placeholder="Filtro"
      onChange={handleInputChange}
    />
  );
}
