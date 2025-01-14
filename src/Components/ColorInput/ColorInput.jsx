import { useState } from "react";

export default function ColorInput({ id, standardValue }) {
  const [inputValue, setInputValue] = useState(standardValue);
  console.log(standardValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input type="color" value={inputValue} onChange={handleInputValue} />
    </>
  );
}
