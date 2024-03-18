import Heading from "./Heading"
import Categories from "./Categories"
import Notes from "./Notes"
import { useState } from "react";
const Homes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
    <div className="flex" style={{transition:"all .9s ease"}}>
    <div className="md:w-1/5" style={{transition:"all .9s ease"}}> 
    <Categories onSearch={handleSearch}/>
    </div>
    <div className="md:w-full">
      <Heading/>
     <Notes/>
    </div>
 
    </div>
  )
}

export default Homes
