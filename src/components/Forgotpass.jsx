import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BarLoader from './BarLoader';
import { useDispatch } from "react-redux";
import { showMessage } from "../store/reducers/notificationSlice";
const baseURL = "http://localhost:5000/api/auth";
const Forgotpass = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [busy, setBusy] = useState(false);
    const handleOnChange = ({target})=>{
        const {value}=target;
        setEmail(value);
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        setBusy(true);
        const response = await fetch(`${baseURL}/forgot-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email})
            // console.log(email)
        });
        const json = await response.json();

        console.log(json.email)
        setBusy(false);
        if (json.success) {
            //!Redirect
            dispatch(showMessage({ message: "E-mail sent successfully!", messageType: 'success' }));
        }
        else {
            dispatch(showMessage({ message: json.error, messageType: 'error' }));
        }
    } catch (error) {
        dispatch(showMessage({ message: "Error Occured", messageType: 'error' }));
    }

}
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',background:"rgb(164, 247, 157)" }}>
      <div className='h-[65vh] w-[65vw] flex justify-center items-center bg-green-400' style={{ borderRadius: "20px", boxShadow: "4px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)", background: 'rgb(164, 247, 157)' }}>
        <div className="pic h-[65vh] w-[32vw]">
          <img className='h-[65vh] w-[32vw]' style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3579.jpg?t=st=1711384179~exp=1711387779~hmac=1d8bc247441bde29e7222f93918b105b89976c307c6ebdbb82410c38b69d543c&w=740" alt="your-image" />
        </div>
        <div className="op h-[65vh] w-[33vw] conntainer bg-green-400" style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>
          <div className="row justify-content-md-center">
            <div className="row">
              <div className="col-sm-12 top-1">
                <div className="titleotp ml-24">
                  Forgot Password
                </div>
                <div className='text-md mt-2 ml-10'>
                Enter your email to reset password!
                </div>
                <form className='mt-10 ml-2' onSubmit={handleSubmit}>
                    <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)",borderRadius:"5px"}}><EmailOutlinedIcon/><input type="email" name="email"  onChange={handleOnChange} className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="example@email.com"/></div>
                    <hr class="mt-4" />
                    <button className='btn btn-block bg-green-600 mt-4 mb-4 ml-6 w-[27vw]' type="submit" >REQUEST PASSWORD RESET EMAIL</button>
                </form>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
