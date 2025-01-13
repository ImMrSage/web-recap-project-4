import { useState } from "react";
import "./Form.css";

export default function ColorForm() {
  const [role, setRole] = useState("");
  const [hex, setHex] = useState("");
  const [contrastText, setContrastText] = useState("");

  function handleSubmit() {
    event.preventDefault();
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        value={role}
        onChange={() => setRole(event.target.value)}
      />
      <label htmlFor="hex">Hex</label>
      <input
        type="text"
        id="hex"
        name="hex"
        value={hex}
        onChange={() => setHex(event.target.value)}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        type="text"
        id="contrastText"
        name="contrastText"
        value={contrastText}
        onChange={() => setContrastText(event.target.value)}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}