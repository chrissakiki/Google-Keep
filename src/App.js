import React, { useState } from "react";
import Header from "./components/Header";
import "./style.css";
import Count from "./components/Count";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function deleteNotes(id) {
    setNotes([...notes.filter((note, index) => index !== id)]);
  }

  return (
    <div className="App">
      <Header />
      <Count
        count={notes.length === 0 ? "0 Notes" : `Showing ${notes.length} Notes`}
      />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
