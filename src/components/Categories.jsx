import React, { useContext } from 'react';
import { useRef,useState } from 'react';
import WavesIcon from '@mui/icons-material/Waves';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import { FaIconName } from 'react-icons/fa';

// import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {Link,Navigate, useNavigate} from 'react-router-dom'
import categoryContext from '../context/notes/categories/categoryContext';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


function Categories(props) {
    const [isNavOpen, setNavOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    let navigate=useNavigate();
    const category = useContext(categoryContext)
    const {selectedCategory,categoryClick}=category;

    const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate('/login');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        props.onSearch(searchInput);
    };
    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };
  const ref = useRef(null);
  return (
    <div className={`flex ${!props.isSidebarOpen?"sidebar":""} justify-center items-center`} style={{transition:"all .5s ease"}}>
      <div className="category relative w-48 h-[98vh] bg-[#084c3b] z-10 shadow-lg">
        <div className='flex mx-2 tracking-widest'>
          <p className='text-white text-2xl text-center my-3  pr-2 '><WavesIcon fontSize='large'/></p>
          <h1 className='text-white text-2xl text-center my-3 translate-y-1' style={{ fontFamily: "Chopsic, san-serif" }}>N</h1>
          <h1 className='text-white text-2xl text-center my-3 translate-y-1' style={{ fontFamily: "Coolvetica, san-serif" }}>oteWave</h1>
        </div>
        <div className="wrapper my-1">
            <div className="searchBar md:translate-x-4 md:-translate-y-1 sm:w-40 md:w-44">
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={searchInput} onChange={handleSubmit} onKeyDown={handleEnterKey} />
                    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" onClick={handleSubmit}>
                        <svg className='ml-2' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24"><path fill="rgb(220,220,220,0.719)" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                    </button>
             </div>
        </div>
        {/* <h3 className="mb-4">Categories</h3> */}
        <ul className="space-y-3 flex mt-10 flex-col justify-start text-start font-semibold  text-white mx-3 text-sm">
          <li className='flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer' ><HomeOutlinedIcon fontSize='medium' /><p className=''>Home</p></li>
    <Link to="/about">  <li  className='flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer'><InfoOutlinedIcon fontSize='medium'/><p className=''>About</p></li></Link>    
          <li  className={`flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer ${selectedCategory==='All'?'bg-green-950':''}`}  onClick={()=>{categoryClick("All")}}><CategoryOutlinedIcon fontSize='medium' className={`${selectedCategory==='All'?'text-green-700':''}`}/><p className=''>All</p></li>
          <li  className={`flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer bg ${selectedCategory==='General'?'bg-green-950':''}`} onClick={()=>{categoryClick("General")}} ><TextSnippetOutlinedIcon fontSize='medium' className={`${selectedCategory==='General'?'text-green-700':''}`}/><p className=''>General</p></li>
          <li  className={`flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer ${selectedCategory==='Personal'?'bg-green-950':''}`}  onClick={()=>{categoryClick("Personal")}}><FolderSharedOutlinedIcon fontSize='medium' className={`${selectedCategory==='Personal'?'text-green-700':''}`}/><p className=''>Personal</p></li>
          <li  className={`flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer ${selectedCategory==='Student'?'bg-green-950':''}`}  onClick={()=>{categoryClick("Student")}}><SchoolOutlinedIcon fontSize='medium' className={`${selectedCategory==='Student'?'text-green-700':''}`}/><p className=''>Students</p></li>
          <p></p>
          <p></p>
          <p></p>
<li className="flex items-center space-x-3 rounded-xl h-10 w-40 px-4 text-start cursor-pointer "> {!localStorage.getItem('token')?(<div><Link className=" mx-16" to="/login">Login</Link>
        <Link className="mx-16" to="/signup">SignUp</Link></div>): <button className='' onClick={handleLogout}><LogoutOutlinedIcon fontSize='medium' className='text-white'></LogoutOutlinedIcon>Logout</button>}</li>
        </ul>
:
      </div>
      {/* <div className="sidebtn w-6 h-20 z-5 relative -translate-x-2 bg-slate-200 rounded-lg flex justify-center items-center" >
        <div className="sidebtn-btn w-1 h-8 rounded-lg" style={{backgroundColor:"black"}}></div>
      </div> */}
    </div>
  );
}

export default Categories;
