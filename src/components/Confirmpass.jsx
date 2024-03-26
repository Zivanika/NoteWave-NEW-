import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

const Confirmpass = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="shadow-lg rounded-3xl max-w-screen-sm w-[350px] md:w-[640px] p-10 mt-4 flex flex-col justify-center items-center space-y-10">
        <h1 className="my-3 uppercase font-extrabold text-3xl w-52 text-center">Password Updated</h1>
        <div className="text-center text-yellow-300"><VerifiedIcon fontSize="large" style={{ scale: "2.6" }} /></div>
        <p>Your password has been updated!</p>
        <Link to="/login"><button className="bg-green-400 text-white h-12 w-44 uppercase">Login</button></Link>
      </div>
    </div>
  )
}

export default Confirmpass;
