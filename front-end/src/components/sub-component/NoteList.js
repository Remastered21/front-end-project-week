import React from "react";
import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";

import "./NoteList.css";

const NoteList = props => {
  // console.log("NoteList: this.props", props);
  return (
    <div className="NoteList row p-0 m-0">
      {props.mainProps.noteArray.map((eachNote, index) => (
        <div className="NoteCard col-4 p-4" key={index}>
          <Link to={`/note/${index}`}>
            <NoteCard eachNote={eachNote} props={props} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
