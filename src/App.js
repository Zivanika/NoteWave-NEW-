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
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login'
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Routes>
    <Route exact path="/about" element={<Abouts/>}/>
    <Route exact path="/" element={<Homes/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </Router>
    

  {/* <h1>This is Notewave</h1> */}
  </NoteState>
    </>
  );
}

export default App;
