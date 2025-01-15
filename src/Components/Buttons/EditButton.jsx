import { useState } from "react";
import EditForm from "../Form/ColorForm";

export default function EditButton(onEdit, id, color) {
  const [isClickedEdit, setisClickedEdit] = useState(false);
  return (
    <>
      <button type="button" onClick={() => onEdit(id)}>
        Edit
      </button>
    </>
  );
}
