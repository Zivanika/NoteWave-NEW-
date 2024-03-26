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
function App() {
  return (
    <>
    <NoteState>
    <CategoriesState>
    <Router>
    <Routes>
    <Route exact path="/about" element={<Abouts/>}/>
    <Route exact path="/confirmpass" element={<Confirmpass/>}/>
    <Route exact path="/resetpass" element={<ResetPass/>}/>
    <Route exact path="/forgotpassword" element={<Forgotpass/>}/>
    <Route exact path="/" element={<Homes/>}/>
    <Route exact path="/otp" element={<Otp/>}/>
    <Route exact path="/login" element={<Login/>}/>
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
