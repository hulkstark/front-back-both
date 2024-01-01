import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleHome from "./components/Googlehome";
import CoverLetter from "./components/Coverletter";
import Serp from "./components/Serp";
import Image from "./components/Image";
import Card from "./components/Card";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Skills from "./components/Skills";
import Podcast from "./components/Podcast";



function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#f3c700";
      showAlert(`Dark mode has been enabled`, "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode has been enabled`, "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Portfolio - Amit Singh Rawat"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          
          
          <Routes>
          <Route path="/" element={<GoogleHome />} />
          </Routes>
          <Routes>
          <Route path="/coverletter" element={<CoverLetter/>} />
          </Routes>
          <Routes>
          <Route path="/serps" element={<Serp/>}/>
          </Routes>
          <Routes>
          <Route path="/images" element={<Image/>} />

          
          </Routes>

          <Routes>

          <Route path="/login" element={<Login showAlert={showAlert}/>} />
        
        
          </Routes>

           <Routes>
          <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
          </Routes>

          <Routes>
          <Route path="/skills" element={<Skills showAlert={showAlert}/>} />
          </Routes>

          <Routes>
          <Route path="/podcast" element={<Podcast showAlert={showAlert}/>} />
          </Routes>

          <Routes>
          <Route path="/podcast" element={<Podcast showAlert={showAlert}/>} />
          </Routes>

          <Routes>
          <Route path="/card" element={<Card/>} />
          </Routes>

          

      
          <Routes>
            <Route
              path="/project"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />

    
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;