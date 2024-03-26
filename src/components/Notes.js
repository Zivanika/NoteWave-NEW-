import React, { useContext,useEffect,useRef,useState} from 'react'
import noteContext from "../context/notes/noteContext"
import categoryContext from '../context/notes/categories/categoryContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const navigate=useNavigate();
  const[note,setNote]=useState({id:"",etitle:"",edescription:"",etag:""})
  const searchkeyword=props.searchKeyword
    const context=useContext(noteContext);
    const category = useContext(categoryContext)
    let {notes,getNotes,editNote}=context;
    let {filteredNotes}=category;


    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes()
      }
      else{
        navigate('/login')
      }
    },[])
    const ref=useRef(null)
    const refClose=useRef(null)


    const updateNote=(currentNote)=>{
      ref.current.click()
      setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
      // refClose.current.click();
    }

    if (searchkeyword !=="") {
      console.log(searchkeyword);
      filteredNotes=notes.filter((note)=>
        (note?.title && note?.title.toLowerCase().includes(searchkeyword.toLowerCase())) || 
        (note?.description && note?.description.toLowerCase().includes(searchkeyword.toLowerCase()))
      );
    }


    // console.log(notes)
    const handleClick=(e)=>{
      e.preventDefault(); //so that the page wont refresh or reload
      editNote(note.id,note.etitle,note.edescription,note.etag)
      console.log("Updating the note...")
      refClose.current.click();
    }
    const onChange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})   
    }
  return (
    <>
    <div className='flex'>
     <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
<div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="etitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} minLength={5} value={note.etitle} required/>
    {/* <div id="emailHelp" className="form-text">W.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="edescription" className="form-label">Description</label>
    <input type="text" className="form-control" name="edescription" id="edescription" minLength={5} onChange={onChange} value={note.edescription} required/>
  </div>
  <div className="mb-3">
  <label htmlFor="etag" className="form-label">Tag</label>
    <input type="text" className="form-control" name="etag" id="etag" onChange={onChange} minLength={5} value={note.etag} required/>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
        <button type="button"  className="btn btn-primary" onClick={handleClick}>Update Note</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3 container max-w-[60rem]">
    {/* <h1>Your Notes</h1> */}
    {/* <div className="container">
    {filteredNotes.length===0 && 'No notes to  display'}
</div> */}
{/* <div className="container" style={{ height: filteredNotes.length === 0 ? '0' : 'auto' }}> */}
  {/* {filteredNotes.length === 0 && 'No notes to display'} */}
{/* </div> */}

    <div className="box  h-[22rem]" >
      {filteredNotes.length===0 && 'No notes to  display'}
    {filteredNotes?.map((note)=>{
      return <div className='col-md-4' key={note._id}>
        <Noteitem updateNote={updateNote} note={note}/>
        </div>
    })}
    </div>
    </div>
    <AddNote/>
    </div>
    </>
  )
}

export default Notes
