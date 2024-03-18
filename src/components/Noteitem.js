import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext"
const Noteitem = (props) => {
  const  context=useContext(noteContext)
    const {note,updateNote}=props;
    const{deleteNote}=context;
  return (
    <div className='w-64'>
   <div className="my-3 bg-lime-300 noteitem">
  <div className="relative h-64 flex flex-col justify-center items-start article">
    <div className='absolute top-5 right-4'>
    <i className="fa-solid fa-pen-to-square mx-4 absolute right-1 cursor-pointer" onClick={(e)=>{updateNote(note)}}></i>
    <i className="fa-solid fa-trash mx-4 absolute right-9 cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
    </div>
    <div className='flex flex-col justify-start items-start -translate-y-9 space-y-2'>
    <h5 className="card-title px-4 font-semibold ">{note.title}</h5>
    <p className="card-text px-4 text-slate-600 h-1 ">{note.description}</p>
    </div>
    <button className='px-4 h-4  absolute bottom-3 left-5 bg-lime-200 flex justify-center py-3 items-center rounded-sm'><p>{note.tag}</p></button>
  </div>

</div>
    </div>
  )
}

export default Noteitem
