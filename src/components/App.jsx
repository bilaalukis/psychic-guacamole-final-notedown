import React, { useState, useEffect } from "react";
import axios from "axios";
import Navibar from "./Navibar";
import AllNotes from "./AllNotes";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Button } from "react-bootstrap";

function App() {
  const Styles = styled.div`
  .main {
      display: flex;
      flex-direction: column;
  }
}
`;
  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState("");

  useEffect(() => {
    const onMount = async () => {
      const notes = await axios.get("/api/notes");
      console.log(notes);
      setData(notes.data);
    };
    onMount();
  }, [data]);

  async function handleAdd() {
    const notes = await axios.post("/api/notes");
  }
  function handleEdit() {}
  async function handleDelete() {
    await axios.delete(`/api/notes/${selectedNote}`);
  }

  return (
    <React.Fragment>
      <Navibar />
      <div className="flex-column">
        <Sidebar data={data} setSelectedNote={setSelectedNote} />
        <div>
          <div>
            <Button variant="primary" onClick={handleAdd}>
              Add new note
            </Button>{" "}
            <Button variant="success" onClick={handleEdit}>
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>{" "}
          </div>
          <AllNotes selectedNote={selectedNote} data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
