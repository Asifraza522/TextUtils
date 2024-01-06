// import logo from './logo.svg';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1400);
}




  const [mode, setMode] = useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#212529";
      showAlert("DarkMode has been enabled","success");
      document.title="TextUtils-Dark Mode";
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("LightMode has been enabled","success");
      document.title="TextUtils-Light Mode";
      
    }
  }


  return (
    <>
    {/* <Router> */}
    <Navbar   title="TextUtils"  aboutText="About Text"  mode={mode}   toggleMode={toggleMode}/>
    <Alert         alert={alert}/>
    <div className="container   my-3">
      
      {/* <Routes>
          <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={}/> */}
          <TextForm   heading="Enter Your Text To Analyze"  mode={mode}/>
          
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    
      
    
    </>
  );
}

export default App;
