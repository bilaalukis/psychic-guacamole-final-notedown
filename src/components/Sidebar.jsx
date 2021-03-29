import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Sidebar(props) {
  function handleClick(e) {
    props.setSelectedNote(e.target.innerText);
  }
  return (
    <>
      <Nav defaultActiveKey="/home" className="flex-column">
        {props.data.map((e) => {
          return <Nav.Link onClick={handleClick}>{e.title}</Nav.Link>;
        })}
      </Nav>
    </>
  );
}
