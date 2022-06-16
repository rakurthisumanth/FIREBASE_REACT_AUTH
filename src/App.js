import logo from './logo.svg';
import './App.css';
import Loginpage from './pages/Loginpage';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/HomePage';
import Registration from './pages/Registration';
import Display from './pages/DisplayPage';


function App() {
  const currentuser=false

  const RequireAuth=({childern})=>{
    return currentuser ? (childern) :<Navigate to="/"/>
  }
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Loginpage/>} />
    <Route path="/Registration" element={<Registration/>} />
    <Route path='/Home' element={<Home/>}/>
    <Route path="/Display" element={<Display/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
