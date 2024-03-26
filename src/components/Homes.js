import Heading from "./Heading"
import Categories from "./Categories"
import Notes from "./Notes"
import { useState } from "react";
const Homes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen,setIsSidebarOpen]=useState(true)
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  const handleSideBarClick=()=>{
    setIsSidebarOpen(!isSidebarOpen)
  }

  const sidebarWidth=isSidebarOpen?'1/5':'0';
  return (
    <div className="flex" style={{transition:"all .5s ease"}}>
    <div className={`md:w-${sidebarWidth} translate-x-1`} style={{transition:"all .5s ease"}}> 
    <Categories handleSideBarClick={handleSideBarClick} isSidebarOpen={isSidebarOpen}  onSearch={handleSearch}/>
    </div>
    <div className="md:w-full flex flex-col">
      <Heading/>
      <div className="flex">
    <div className=" bg-lime-300 relative translate-y-16 z-10 h-44 rounded-r-2xl cursor-pointer shadow-lg flex justify-center items-center" onClick={handleSideBarClick}>
      <div className="h-10 w-2 mx-2 rounded-lg  bg-green-800"></div>
    </div>
     <Notes searchKeyword={searchQuery}/>
      </div>
    </div>
 
    </div>
  )
}

export default Homes
