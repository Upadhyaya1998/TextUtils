import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Enabled Dark mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light mode", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title="TextUtilsNew123" aboutText="About us" toggleMode ={toggleMode} mode = {mode} showAlert={showAlert}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <TextForm heading = "My Text Space" mode={mode}  showAlert={showAlert}/>         
    </div> */}

      <BrowserRouter>
        <Navbar
          title="TextUtilsNew123"
          aboutText="About us"
          toggleMode={toggleMode}
          mode={mode}
          showAlert={showAlert}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="My Text Space"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />} />

            {/* <Route exact path="/">
      <TextForm heading = "My Text Space" mode={mode}  showAlert={showAlert}/> 
    </Route>
    <Route path="/about">
      <About />        
   </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
