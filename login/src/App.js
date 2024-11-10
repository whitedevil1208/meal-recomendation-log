import './App.css';
import Login_signup from './Components/Assets/login_singup/login_signup';
import Signup from './Components/Assets/login_singup/Signup';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login_signup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
