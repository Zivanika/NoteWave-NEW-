import React from 'react';
import './otp.css'
const Otp = () => {
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
                <form className='mt-10 ml-20'>
              {/* <input type="text" placeholder="Enter OTP" />
              <p></p>
              <button type="submit">Submit</button> */}
                <input class="otp mr-2" type="text" oninput='digitValidate(this)'onkeyup='tabChange (1)'/>
                <input class="otp mr-2" type="text" oninput='digitValidate(this)' onkeyup='tabChange(2)'/>
                <input class="otp mr-2" type="text" oninput='digitValidate(this)'onkeyup='tabChange(3)' />
                <input class="otp mr-2" type="text" oninput='digitValidate(this) 'onkeyup='tabChange (4)' />
            </form>
            <hr class="mt-4"/>
           <button className='btn btn-block bg-green-600 mt-4 mb-4 ml-36'>Verify</button>
            </div>
        </div>
       </div>
        
        </div>
      </div>
    </div>
  );
};

export default Otp;
