import "./App.css";
import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";





function App() {

  const[loggedin,setloggedin]=useState(false);
 
  return (
    <div className="w-full min-h-screen flex flex-col bg-richblack-900 ">
      <Navbar loggedin={loggedin} setloggedin={setloggedin}/>

      <Routes>
        {/* {har ek path me ek page inked hai in element usme particualr page me jo jo component honge wo dikhengr} */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setloggedin={setloggedin}/>}/>
        <Route path="/signup" element={<Signup setloggedin={setloggedin}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </div>
  )
}

export default App;
