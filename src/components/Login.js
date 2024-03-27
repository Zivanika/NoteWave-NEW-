import React, { useState } from 'react';
import './login.css'
import {useNavigate,Link} from 'react-router-dom';
const Login = (props) => {
  const [credentials, setCredentials] = useState({ name:"", email: "", password: "" });
  const [isLoginActive, setIsLoginActive] = useState(true);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // Save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/");
    }
    else{
      alert('Invalid credentials!')
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    props.setID(json.ID)
    console.log(json);
    if(json.success){
      // Save the authtoken and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/otp");
    }
    else{
      alert('Error Occured!')
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const toggleLogin = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]' style={{background:"linear-gradient(to right, #e2e2e2, #c9d6ff)"}}>
      <div className={`container_login ${isLoginActive ? '' : 'active'}`} id="container_login">
        <div className="form-container_login sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name="name" onChange={onChange} />
            <input type="email" placeholder="Email" name="email" onChange={onChange} />
            <input type="password" placeholder="Password" name="password" onChange={onChange}/>
            <button onClick={handleSignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container_login sign-in">
          <form onSubmit={handleLogin}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" name="email" onChange={onChange} />
            <input type="password" placeholder="Password" name="password" onChange={onChange} />
            <Link to="/forgotpassword">Forget Your Password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>
      <div className="toggle-container_login">
        <div className="toggle">
          <div className={`toggle-panel ${!isLoginActive ? 'toggle-left' : 'toggle-right'}`}>
            <h1>{!isLoginActive ? 'Welcome Back!' : 'Welcome, Friend!'}</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="light" onClick={toggleLogin}>{!isLoginActive ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
