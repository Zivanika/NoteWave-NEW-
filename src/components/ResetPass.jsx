import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import axios from "axios";
import { Link } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
const baseURL = "http://localhost:5000/api/auth";
const Resetpass = () => {
    const location = useLocation(); //because location has the pathname (url) and search paramenter which has the query
    const navigate = useNavigate();
  const [invalidUser, setInvalidUser] = useState("");
  const [busy, setBusy] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState({
    password:'',
    confirmPassword:''
});

const { token, id } = queryString.parse(location.search); //extracting ?token and id from url
const verifyToken = async () => {
    // dispatch(showMessage({ message: "Verifying Token", messageType: 'info' }));
    try {
      await axios(
        `${baseURL}/verify-token?token=${token}&id=${id}`
      );
     //?axios can be used in place of fetch and it uses get request
     setBusy(false);
    //  dispatch(showMessage({ message: "Token verification successful!", messageType: 'success' }));
    } catch (error) {
        setBusy(false);
        // dispatch(showMessage({ message: 'An error occurred during token verification. Please try again.', messageType: 'error' }));
      if (error?.response?.data) {
        const {data}=error.response;

        if (!data.success) {
            return setInvalidUser(data.error); //frontend error
          }

        return console.log(error.response.data); //backend error
      }
      console.log(error);
    }
  };
  useEffect(() => {
    verifyToken();
},[]);
const handleOnChange = ({target})=>{
    const {name,value}=target;
    setNewPassword({...newPassword,[name]:value}); //[name]:value works exactly like newPassword.name:value or newPassword.confirmPassword:value
}
const handleSubmit = async (e)=>{
    e.preventDefault();
    const {password, confirmPassword} = newPassword;
    if (password.trim().length < 5) {
        return setError("Password must be atleast 5 characters long!");
    }
    if (password !== confirmPassword) {
        return setError("Passwords do not match! Please check and try again.");
    }
    try {
        setBusy(true);
        // dispatch(showMessage({ message: "Resetting...", messageType: 'info' }));
        const { data } = await axios.post(
          `${baseURL}/reset-password?token=${token}&id=${id}`,{password}
        );
       //?axios can be used in place of fetch and it uses get request
       setBusy(false);

       if (data.success) {
           navigate("/reset-password");
        //    dispatch(showMessage({ message: "Success", messageType: 'success' }));
           setSuccess(true);
       }
  
      } catch (error) {
        setBusy(false);
        // dispatch(showMessage({ message: 'An error occurred during resetting password. Please try again.', messageType: 'error' }));
        if (error?.response?.data) {
          const {data}=error.response;
  
          if (!data.success) {
              return setError(data.error);
            }
  
          return console.log(error.response.data);
        }
        console.log(error);
      }
  }
if (success) {
    return <>
       <div className="shadow-lg rounded-3xl max-w-screen-sm  w-[350px] md:w-[640px] m-auto pt-14 p-10 mt-4 flex space-y-10 flex-col justify-center items-center">
            <h1 className="my-3 uppercase font-extrabold text-3xl w-52 text-center" style={{fontFamily:"Poppins"}}>Password Updated</h1>
            <div className="text-center"><VerifiedIcon fontSize="large" style={{scale:"2.6"}}/></div>
            <p>Your password has been updated!</p>
            <Link to="/login"><button className="bg-slate-900 text-white h-12 w-44 uppercase">Login</button></Link>
        </div>;
    </>
  }
  if (invalidUser) {
    return <>
        <div className="max-w-screen-sm m-auto pt-40">
            <h1 className="text-center text-3xl text-gray-500 mb-3">{invalidUser}</h1>
        </div>
    </>
  }
  if (busy) {
    return <>
        <div className="max-w-screen-sm m-auto pt-40">
            <h1 className="text-center text-3xl text-gray-500 mb-3">Wait for a moment</h1>
            <h1 className="text-center text-3xl text-gray-500 mb-3">Verifying Reset Token...</h1>
        </div>
    </>
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
                <form className='mt-10 ml-2' onSubmit={handleSubmit}>
                <div className="space-y-6">
                <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)"}}><LockOutlinedIcon/><input type="password" name="password" onChange={handleOnChange} id="pass" className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="New Password"/></div>
            <div className="flex bg-slate-100 justify-center items-center pl-3" style={{boxShadow:"0px 3px 1px rgb(166 173 185)"}}><LockOutlinedIcon/><input type="password" name="confirmPassword" onChange={handleOnChange} id="newpass" className="px-3 text-lg h-12 w-full border-none outline-none rounded-sm bg-slate-100" placeholder="Confirm Password"/></div>
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