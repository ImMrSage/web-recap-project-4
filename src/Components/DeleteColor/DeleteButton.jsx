import "./DeleteColor.css";

import { useState } from "react";

export default function DeleteButton() {
  const [isConfirm, setIsConfirm] = useState(false);
  return (
    <>
      {isConfirm ? (
        <div>
          <p className="color-card-highlight"> Really delete?</p>
          <button type="button" onClick={() => setIsConfirm(false)}>
            Cancel
          </button>
          <button type="button">Delete</button>
        </div>
      ) : (
        <button type="button" onClick={() => setIsConfirm(true)}>
          Remove
        </button>
      )}
    </>
  );
}
