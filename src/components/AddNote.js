import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext"
import { useDispatch } from "react-redux";
import { showMessage } from "../store/reducers/notificationSlice";
const AddNote = () => {
  const dispatch=useDispatch();
    const context=useContext(noteContext);
    const{addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
      e.preventDefault(); //so that the page wont refresh or reload
        if (note.tag==='') {
          note.tag='General'
        }
        if (note.title==='') {
          note.title='No Title...'
        }
        
        addNote(note.title,note.description,note.tag)
       setNote({title:"",description:"",tag:""})
       dispatch(showMessage({ message: "Note added successfully!", messageType: 'success' }));
    }
    const onChange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})   
    }
  return (
    <div>
      {/* <QuickNote/> */}
       <div className="container py-6 px-4 mx-2 my-3 bg-[#f8ecd4] w-64 h-[22rem] rounded-md">
    <h1 className='mx-14 font-semibold'>Add a note</h1>
    <form className='my-3'>
  <div className="mb-4">
    <p></p>
    <p></p>
    <input type="text"  placeholder="Title " className="b-border mb-1 text-xl " id="title" value={note.title} name="title" onChange={onChange}/>
    {/* <div id="emailHelp" className="form-text">W.</div> */}
  </div>
  <div className="mb-4">
  <p></p>
  <p></p>
    <input type="text"  placeholder="Tag" className=" b-border mb-1 text-xl" name="tag" value={note.tag} id="tag" onChange={onChange}/>
  </div>
  <div className="mb-4">
    <p></p>
    <p></p>
    <textarea rows={3} className="b-border text-xl"  placeholder="Description" name="description" value={note.description}  id="description" onChange={onChange}></textarea>
  </div>
  <button type="submit" className="w-56 h-10 -mx-2 text-center text-white font-semibold bg-orange-400 rounded-lg" onClick={handleClick}>Add Note</button>
</form>
    </div>
    </div>
  )
}

export default AddNote
