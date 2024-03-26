import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const Resetpass = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const handleOnChange = ({target})=>{
        const {value}=target;
        setEmail(value);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',background:"rgb(164, 247, 157)" }}>
      <div className='h-[65vh] w-[65vw] flex justify-center items-center bg-green-400' style={{ borderRadius: "20px", boxShadow: "4px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)", background: 'rgb(164, 247, 157)' }}>
        <div className="pic h-[65vh] w-[32vw]">
          <img className='h-[65vh] w-[32vw]' style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} src="https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7896.jpg?t=st=1711388643~exp=1711392243~hmac=300fbc8b8dc4b2b1726a4c88e21a37454bd0720883b85c412e7074fccd283d92&w=740" alt="your-image" />
        </div>
        <div className="op h-[65vh] w-[33vw] conntainer bg-green-400" style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>
          <div className="row justify-content-md-center">
            <div className="row">
              <div className="col-sm-12 top-1">
                <div className="titleotp ml-16">
                  Reset Your Password
                </div>
                <div className='text-md mt-2 ml-20 text-green-900'>
                Set your new password!
                </div>
                <form className='mt-10 ml-2'>
                <div className="space-y-6">
                <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)"}}><LockOutlinedIcon/><input type="password" name="password" onChange={handleOnChange} id="" className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="New Password"/></div>
            <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)"}}><LockOutlinedIcon/><input type="password" name="confirmPassword" onChange={handleOnChange} id="" className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="Confirm Password"/></div>
                    {/* <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)",borderRadius:"5px"}}><EmailOutlinedIcon/><input type="email" name="email"  onChange={handleOnChange} className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="example@email.com"/></div> */}
                    </div>
                </form>
                <hr class="mt-4" />
                <button className='btn btn-block bg-green-600 mt-4 mb-4 ml-6 w-[27vw]' onClick={()=>{navigate("/confirmpass")}}>UPDATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpass;
