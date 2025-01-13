import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/Form/Form";
import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("");
  const [contrastText, setContrastText] = useState("");
  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm />

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
