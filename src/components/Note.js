import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";

function Note({ title, content, onDelete, id }) {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="note">
      <h1 className={completed ? "completed" : ""}>{title}</h1>
      <p className={completed ? "completed" : ""}>{content}</p>
      <Button onClick={() => setCompleted(!completed)}>
        <AddTaskIcon />
      </Button>
      <Button onClick={() => onDelete(id)}>
        <DeleteOutlineIcon />
      </Button>
    </div>
  );
}

export default Note;
