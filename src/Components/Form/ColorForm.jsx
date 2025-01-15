import "./Form.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitColor,
  initialData = {
    role: "some color",
    hex: "#123456",
    contrastText: "#FFFFFF",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);

    event.target.reset();
    event.target.elements.role.focus();
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
      <ColorInput id="hex" standardValue={initialData.hex} />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" standardValue={initialData.contrastText} />
      <button type="submit">Add Color</button>
    </form>
  );
}
