/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState, useRef, useEffect } from "react";

const noteApp = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Get notes from local storage
    // old version of localNotes on line 11 -> pre async
    // const localNotes = localStorage.getItem("notes");
    const localNotes = localStorage.setItem("notes", JSON.stringify(notes));

    // -> If there are no notes, use this conditional statement below, pre async
    // if (!localNotes) return [];

    // Return parsed JSON object back to j/s object
    // -> old code before I ran it as an async function for the useEffect
    // JSON.parse(localNotes);
  }, [notes]);

  const [selectedNoteIdx, setSelectedNoteIdx] = useState();
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    description: "",
  });
  const [modalVisibility, setModalVisibility] = useState(false); // Displays the rendered modal

  // When notes changes (useEffect dependency), run the function passed in
  useEffect(() => {
    // * Store stringified notes array/variable in localStorage with notes key
    // * localstorage is for storing strings, key/value
    // * convert array items to string, use JSON.stringify
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  const noteTitleRef = useRef();
  const noteDescriptionRef = useRef();

  // Save note finds the object, and saves it into the array notes.
  const saveNote = () => {
    setNotes([...notes, selectedNote]);

    // Clear the selected note
    setSelectedNote({ title: "", description: "" });

    // Clear title and description fields
    noteTitleRef.current.value = "";
    noteDescriptionRef.current.value = "";
  };

  // Edit Notes
  // * Selecting the Note *Filter Method* *working*
  // * Destructuring the contents of Note (object) note.title etc *DONE*
  // * Updating the values of the object *returning value back into the array*
  // * In the JSX pop up element, that is formated for the key value pairs, and will update the values of the object's keys. form input element
  const editNote = (index) => {
    // Get the note that we want to edit
    setSelectedNote(notes.filter((note, idx) => idx === index)[0]);

    // Set the selected index for that note
    setSelectedNoteIdx(index);

    // Show the modal so that the user can edit the note
    setModalVisibility(true);
  };

  // Update Note
  // * Trigger when we want to save the updates to the note when editing
  const updateNote = () => {
    // Get a copy of the global notes array in the local scope
    let updatedNotes = notes;

    // Create a copy of the global notes aray
    updatedNotes[selectedNoteIdx] = {
      title: selectedNote.title,
      description: selectedNote.description,
    };

    // Update the notes array with the updated values for that note
    setNotes(updatedNotes);

    // Disable visibility for the update modal
    setModalVisibility(false);
  };

  // Delete note
  // * index = 1
  // * note = {}
  // * idx = 0
  const deleteNote = (index) =>
    setNotes(notes.filter((note, idx) => idx !== index));
  return (
    <div>
      <main>
        {/* Note Input / Form */}
        <div id="form-group">
          <input
            className="bg-cream text-coco text-2xl italic placeholder-chief justify-center mt-4 mx-12 px-[.3em] w-3/4 rounded-t-md"
            ref={noteTitleRef}
            type="text"
            placeholder="Note title"
            onChange={(event) =>
              setSelectedNote({
                title: event.target.value,
                description: selectedNote.description,
              })
            }
          />
          <br />
          <textarea
            className="bg-cream text-coco italic placeholder-chief mx-12 px-[.3em] w-3/4 rounded-b-md"
            ref={noteDescriptionRef}
            rows="3"
            placeholder="Note description"
            onChange={(event) =>
              setSelectedNote({
                title: selectedNote.title,
                description: event.target.value,
              })
            }
          />
          <br />
          {/* button container */}
          <div className="flex flex-row">
            <button
              className="justify italic text-2xl px-[.3em] hover:bg-cream hover:text-chief hover:rounded-full"
              type="submit"
              onClick={saveNote}
            >
              Create
            </button>
          </div>

          <br />
        </div>

        {/* List/grid of added notes */}
        <ul className="flex flex-col">
          {notes.map((note, index) => (
            <li key={index}>
              <small className="italic text-2xl px-[.3em] ml-[1em] hover:bg-cream hover:text-chief hover:rounded-full">
                {index + 1}
              </small>
              {/* mat it so that index is displayed from 1 instead of 0 */}
              <h1 className="bg-cream text-coco text-2xl placeholder-chief justify-center mt-4 mx-12 px-[.3em] w-3/4 rounded-t-md">
                {note.title}
              </h1>
              <p className="bg-cream text-coco placeholder-chief mx-12 px-[.3em] w-3/4 rounded-b-md">
                {note.description}
              </p>
              <div>
                <button onClick={() => deleteNote(index)}>Delete</button>
                <button onClick={() => editNote(index)}>Edit Note</button>
              </div>
            </li>
          ))}
        </ul>

        {/* This is a conditional, renders edit note function, for the popup YAY */}
        {modalVisibility && (
          <div class="modal">
            <input
              className="bg-cream text-coco text-2xl italic placeholder-chief justify-center mt-4 mx-12 px-[.3em] w-3/4 rounded-t-md"
              ref={noteTitleRef}
              type="text"
              placeholder="Note title"
              value={selectedNote.title}
              onChange={(event) =>
                setSelectedNote({
                  title: event.target.value,
                  description: selectedNote.description,
                })
              }
            />
            <textarea
              className="bg-cream text-coco italic placeholder-chief mx-12 px-[.3em] w-3/4 rounded-b-md"
              ref={noteDescriptionRef}
              rows="3"
              placeholder="Note description"
              value={selectedNote.description}
              onChange={(event) =>
                setSelectedNote({
                  title: selectedNote.title,
                  description: event.target.value,
                })
              }
            />
            <button type="submit" onClick={updateNote}>
              Update Note
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default noteApp;
