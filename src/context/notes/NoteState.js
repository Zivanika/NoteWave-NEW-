import NoteContext from "./noteContext";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showMessage } from "../../context/../store/reducers/notificationSlice";
const NoteState=(props)=>{
    const host="http://localhost:5000"
    const[notes,setNotes]=useState([]);
    const dispatch=useDispatch();
     // Get all notes
     const getNotes=async()=>{
        // TODO: API call
        try{const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Auth-Token":localStorage.getItem('token')
          },
        });
       const json=await response.json();
       setNotes(json.notes)
      //  console.log(json)
      }
       catch(error){
        console.log(error)
       }
        
    }

    // Add a new note
    const addNote=async(title,description,tag)=>{
        // TODO: API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag}), 
          });
          let note=await response.json();
         console.log(notes);
        setNotes(notes.concat(note))
        // dispatch(showMessage({ message: "Note added successfully!", messageType: 'success' }));
        console.log(notes);
    }

// Delete note
const deleteNote=async(id)=>{
    // TODO: API call
    // console.log(id);
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
   await response.json();
  //  console.log(json)
// console.log("deleting note with id"+id);
const newNotes=notes.filter((note)=>{return(note._id!==id)});
setNotes(newNotes)
dispatch(showMessage({ message: "Note deleted successfully!", messageType: 'success' }));
}

// Edit Note

const editNote=async(id,title,description,tag)=>{
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({title,description,tag}), 
      });
      const json=response.json();
       let newNotes=JSON.parse(JSON.stringify(notes))
for(let i=0;i<newNotes.length;i++){
if(newNotes[i]._id==id){
    newNotes[i].title=title;
    newNotes[i].description=description;
    newNotes[i].tag=tag;
    break;
}
}
setNotes(newNotes)
dispatch(showMessage({ message: "Note updated successfully!", messageType: 'success' }));
}





    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState