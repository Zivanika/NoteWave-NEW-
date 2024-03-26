import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext"
const QuickNote = () => {
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
    }
    const onChange=(e)=>{
          setNote({...note,[e.target.name]:e.target.value})   
    }
  return (
    <div><div className="container  py-6 px-4 mx-2 mt-0  bg-[#f8ecd4] w-64 h-[10rem] rounded-md relative">
    <h1 className='mx-14 font-semibold'>Quick note</h1>
    <form className='my-3'>
  <div className="mb-4">
    <p></p>
    <p></p>
    <input type="text"  placeholder="type your notes... " className="b-border mb-1 text-sm " id="title" value={note.title} name="title" onChange={onChange}/>
    {/* <div id="emailHelp" className="form-text">W.</div> */}
  </div>
  <div className="mb-2">
  <p></p>
  <p></p>
    <input type="text"  placeholder="type your notes..." className=" b-border mb-1 text-sm" name="tag" value={note.tag} id="tag" onChange={onChange}/>
  </div>
  
  {/* <button type="submit" className="w-56 h-6 -mx-2 text-center text-white font-semibold bg-orange-400 rounded-lg" onClick={handleClick}>Add Note</button> */}
</form>
    </div></div>
  )
}

export default QuickNote