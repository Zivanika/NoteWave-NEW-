import React from 'react';
import { useRef,useState } from 'react';
import WavesIcon from '@mui/icons-material/Waves';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SchoolIcon from '@mui/icons-material/School';
function Categories(props) {
    const [isNavOpen, setNavOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');


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
    <div className="flex justify-center items-center">
      <div className="category relative w-full h-[100vh] bg-[#084c3c] z-10">
        <div className='flex mx-7 tracking-widest'>
          <p className='text-white text-4xl text-center my-3 -translate-y-1 pr-3 scale-110'><WavesIcon fontSize='large'/></p>
          <h1 className='text-white text-4xl text-center my-3 translate-y-1' style={{ fontFamily: "Chopsic, san-serif" }}>N</h1>
          <h1 className='text-white text-4xl text-center my-3 translate-y-1' style={{ fontFamily: "Coolvetica, san-serif" }}>oteWave</h1>
        </div>
        <div className="wrapper my-1">
            <div className="searchBar md:translate-x-4 md:-translate-y-1 sm:w-96 md:w-72">
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={searchInput} onChange={handleSubmit} onKeyDown={handleEnterKey} />
                    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit" onClick={handleSubmit}>
                        <svg className='ml-2' style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24"><path fill="rgb(220,220,220,0.719)" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                            </svg>
                    </button>
             </div>
        </div>
        {/* <h3 className="mb-4">Categories</h3> */}
        <ul className="space-y-9 flex mt-28 flex-col justify-center  text-white mx-16 text-xl">
          <li className='space-x-5'><HomeIcon fontSize='medium'/>Home</li>
          <li  className='space-x-5'><InfoIcon fontSize='medium'/>About</li>
          <li  className='space-x-2'><FolderSharedIcon fontSize='medium'/>Personal</li>
          <li  className='space-x-7'><SchoolIcon fontSize='medium'/>Students</li>

        </ul>
      </div>
      {/* <div className="sidebtn w-6 h-20 z-5 relative -translate-x-2 bg-slate-200 rounded-lg flex justify-center items-center" >
        <div className="sidebtn-btn w-1 h-8 rounded-lg" style={{backgroundColor:"black"}}></div>
      </div> */}
    </div>
  );
}

export default Categories;
