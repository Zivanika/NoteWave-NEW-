import React from 'react';
import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './otp.css'
import BarLoader from './BarLoader';
import { useDispatch } from "react-redux";
import { showMessage } from "../store/reducers/notificationSlice";
const inputs = Array(4).fill(""); // create a blank array of 4 index
let newInputIndex = 0;
const baseURL = "http://localhost:5000/api/auth";
const Otp = (props) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const BoxRefs = useRef();
  const inputRef = useRef(null);
  const [OTP, setOTP] = useState({ 0: "", 1: "", 2: "",3:""});
  const [busy, setBusy] = useState(false);
  let [nextInputIndex, setNextInputIndex] = useState(0);
  useEffect(() => {
    inputRef.current.focus();
  }, [nextInputIndex]);
  const isObjValid = (obj) => {
    let arr = Object.values(obj);
    return arr.every((val) => val.trim());
   };
   const handleOTPChange = (value, index) => {
    let newOTP = { ...OTP };
    newOTP[index] = value;
    setOTP(newOTP);

    let lastInputIndex = inputs.length - 1;
    if (!value) {
      newInputIndex = index === 0 ? 0 : index - 1;
    } else {
      newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    }

    setNextInputIndex(newInputIndex);
};
const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    e.preventDefault();
    handleOTPChange("", index);
}
};
const CorrectOTP = () => {
  const boxRefsChildren = BoxRefs.current.children;

  // Loop through the children (input elements) and add the correct-otp class
  for (let i = 0; i < boxRefsChildren.length; i++) {
    const inputElement = boxRefsChildren[i];
    if (inputElement) {
      inputElement.classList.add('correct-otp');

      // Remove the class after the animation duration (adjust as needed)
      setTimeout(() => {
        inputElement.classList.remove('correct-otp');
      }, 2000);
      }
  }
};
const WrongOTP = () => {
  const boxRefsChildren = BoxRefs.current.children;

  // Loop through the children (input elements) and add the correct-otp class
  for (let i = 0; i < boxRefsChildren.length; i++) {
    const inputElement = boxRefsChildren[i];
    if (inputElement) {
      inputElement.classList.add('wrong-otp');
      inputElement.classList.add('Shake');

      // Remove the class after the animation duration (adjust as needed)
      setTimeout(() => {
        inputElement.classList.remove('wrong-otp');
        inputElement.classList.remove('Shake');
      }, 1200);
      }
  }
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (isObjValid(OTP)) {
    var val = "";

    Object.values(OTP).forEach((v) => {
      val += v;
    });
    // Calling the verification function or API endpoint here
    try {
      setBusy(true);
      const response = await fetch(`${baseURL}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: val, UserID: props.ID }),
        // console.log(body);
      }
      );
      setBusy(false);
      const json = await response.json();
      if (json.success) {
          CorrectOTP();
          console.log(props.ID);
          dispatch(showMessage({ message: "E-mail verified successfully!", messageType: 'success' }));
          setTimeout(() => {
              navigate("/");
          }, 1200);
      } else {
        dispatch(showMessage({ message: json.error, messageType: 'error' }));

      }
    } catch (error) {
      dispatch(showMessage({ message: "Error Occured", messageType: 'error' }));
      }
      //   console.log("Entered OTP:", val);
  } else {
    dispatch(showMessage({ message: "Please enter all 4 digits!", messageType: 'error' }));
    WrongOTP();
  }
};
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',background: 'rgb(164, 247, 157)' }}>
      <div className='h-[65vh] w-[62vw] flex justify-center items-center' style={{borderRadius:"20px",boxShadow: "4px 4px 8px rgba(0.5, 0.5, 0.5, 0.5)"}}>
        <div className="pic h-[65vh] w-[32vw]">
        <img className='h-[65vh] w-[32vw]' style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}} src="https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7897.jpg?w=740&t=st=1711266582~exp=1711267182~hmac=c638e59e000acbc1a9df1d7f54ce6c499e62f2b895794d86346bf73e784ce807" alt="your-image" />
        </div>
        <div className="op h-[65vh] w-[32vw] container bg-green-400" style={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}} >
       <div className="row justify-content-md-center">
        <div className="row">
            <div className="col-sm-12 mt-5 bg-green-400 ">
                <div className="titleotp ml-28">
                    Verify OTP
                </div>
                <form className='mt-10 ml-20' onSubmit={handleSubmit}>
             
                <div className="flex gap-4" ref={BoxRefs}>
            {inputs.map((digit, index) => (
              <input
                className="rounded-lg h-10 w-10 text-[red] text-center font-semibold custom-input"
                key={index}
                type="text"
                maxLength={1}
                value={OTP[index]}
                onChange={(e) => handleOTPChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={nextInputIndex === index ? inputRef : null}


              />
            ))}
         </div>
         <hr class="mt-4"/>
            {busy && <BarLoader/>}
           <button type="submit" className='w-50 bg-green-600 mt-4 mb-4 ml-24' style={{borderRadius:"5px"}}>Verify</button>
            </form>
           
            </div>
        </div>
       </div>
        
        </div>
      </div>
    </div>
  );
};

export default Otp;
