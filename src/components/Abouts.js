import React from 'react';

const Abouts = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='h-[85vh] w-[82vw] flex justify-center items-center' style={{ borderRadius: "20px", boxShadow: "0 4px 8px 0 rgb(173 202 230), 0 6px 20px 0 rgb(173 202 230)", background: ' #00dfc0' }}>
          <div className="pic h-[85vh] w-[52vw]">
            <img className='h-[85vh] w-[52vw]' style={{ borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1711310535~exp=1711314135~hmac=0bd926c71add39d240c2c4a25d5d64e93847a329f01671ca06b2695ae8cdd43c&w=740" alt="your-image" />
          </div>
          <div className="op h-[85vh] w-[52vw] container">
            <div className="row justify-content-md-center">
              <div className="row">
                <div className="col-sm-12 mt-1">
                  <div className="titleotp ">
                    <p className='text-2xl ml-40 mb-7' style={{color:"#474c46"}}>Nice to meet you</p> {/* Increased font size to text-3xl */}
                     
        
                     <div className="abtcnt text-lg">
                      At <span className='text-green-900' style={{color:"#336704"}}>NoteWave</span> , we believe in the power of capturing ideas and thoughts effortlessly. Our mission is to provide users with a seamless and intuitive note-taking experience that enhances productivity and creativity. Whether you're a student, professional, or creative individual, NoteWave is here to help you organize your thoughts and stay focused.NoteWave was founded with a simple yet powerful vision: to revolutionize the way people take notes. Its goal is to create a note-taking solutions to simplify the lives of millions.
                     {/* <span className='text-green-900'>NoteWave</span> was founded with a simple mission: to provide users with a seamless and intuitive note-taking experience. Our journey began [mention the year or time period] when [briefly explain the inspiration or motivation behind creating the application]. Since then, we have been dedicated to constantly improving and enhancing our app to meet the evolving needs of our users. */}
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
