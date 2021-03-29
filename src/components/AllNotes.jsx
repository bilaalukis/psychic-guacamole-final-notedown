import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function AllNotes(props) {
  let note = [];
  if (props.selectedNote === "") {
    note.push(props.data[0]);
  } else {
    note = props.data.filter((e) => e.title === props.selectedNote);
  }

  console.log(note);

  function handleChange() {}

  return (
    <>
      <InputGroup>
        <FormControl
          //   value={note[0].note}
          onChange={handleChange}
          as="textarea"
          rows={8}
        />
      </InputGroup>
    </>
  );
}
