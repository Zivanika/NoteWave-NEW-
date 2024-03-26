import React, { useContext, useState } from 'react'
import categoryContext from './categoryContext'
// import noteContext from '../noteContext'
import notesContext from '../noteContext'

function CategoriesState(props) {
    const[selectedCategory,setSelectedCayegory]=useState('All');
    const context=useContext(notesContext);
    let {notes}=context;

     const categoryClick=(category)=>{
        setSelectedCayegory(category);
     }
     const filteredNotes= selectedCategory==='All'? notes: notes.filter((note)=>note.tag===selectedCategory);

  return (
    <categoryContext.Provider value={{selectedCategory,categoryClick,filteredNotes}}>
       {props.children} 
    </categoryContext.Provider>
  )
}

export default CategoriesState
