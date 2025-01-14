import "./Form.css";
import ColorInput from "../ColorInput/ColorInput";

export default function Form({
  onSubmitColor,
  initialData = {
    role: "some color",
    hex: "#123456",
    contrastText: "FFFFFF",
  },
}) {
  function handleSubmit() {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        defaultValue={initialData.role}
      />
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" defaultValue={initialData.hex} />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      <button type="submit">Add Color</button>
    </form>
  );
}
