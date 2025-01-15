import "./Form.css";
import ColorInput from "../ColorInput/ColorInput";

export default function EditForm({ color }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role" defaultValue={color.role} />
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" standardValue={color.hex} />
      <label htmlFor="contrastText">Contrast Text</label>
      <ColorInput id="contrastText" standardValue={color.contrastText} />
      <button type="submit">Update Color</button>
      <button type="button">Cancel</button>
    </form>
  );
}
