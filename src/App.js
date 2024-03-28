import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// import {Home} from './components/Home'
// import {About} from './components/About'
import Abouts from './components/Abouts';
import Homes from './components/Homes';
import NoteState from './context/notes/NoteState'
import CategoriesState from './context/notes/categories/CategoriesState'
import Alert from './components/Alert';
// import Signup from './components/Signup';
import Login from './components/Login'
import Otp from './components/Otp';
import Forgotpass from './components/Forgotpass';
import ResetPass from './components/ResetPass';
import Confirmpass from './components/Confirmpass';

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showMessage, clearMessage ,selectMessage, selectMessageType } from "./store/reducers/notificationSlice";
function App() {
  const [ID, setID] = useState('');
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const messageType = useSelector(selectMessageType);
  const showToastMessage = (message, messageType) => {
    switch (messageType) {
      case 'success':
        toast.success(message, { position: toast.POSITION.TOP_RIGHT });
        break;
      case 'error':
        toast.error(message, { position: toast.POSITION.TOP_RIGHT });
        break;
      case 'warning':
        toast.warning(message, { position: toast.POSITION.TOP_RIGHT });
        break;
      default:
        toast.info(message, { position: toast.POSITION.TOP_RIGHT });
    }
  };
  

  React.useEffect(() => {
    if (message) {
      showToastMessage(message, messageType);
      dispatch(clearMessage());
    }
  }, [message, messageType, dispatch]);
  return (
    <>
    <NoteState>
    <CategoriesState>
    <Router>
    <ToastContainer/>
    <Routes>
    <Route exact path="/about" element={<Abouts/>}/>
    <Route exact path="/confirmpass" element={<Confirmpass/>}/>
    <Route exact path="/reset-password" element={<ResetPass/>}/>
    <Route exact path="/forgotpassword" element={<Forgotpass/>}/>
    <Route exact path="/" element={<Homes/>}/>
    <Route exact path="/otp" element={<Otp ID={ID}/>}/>
    <Route exact path="/login" element={<Login setID={setID}/>}/>
    {/* <Route exact path="/signup" element={<Signup/>}/> */}
    </Routes>
    </Router>
    

  {/* <h1>This is Notewave</h1> */}
  </CategoriesState>
  </NoteState>
  </>
  );
}

export default App;
