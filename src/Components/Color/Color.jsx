import "./Color.css";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

export default function Color({ color, onDelete, onEdit }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteButton onDelete={onDelete} id={color.id} />
      <EditButton onEdit={onEdit} />
    </div>
  );
}
