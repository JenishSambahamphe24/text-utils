import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(52, 52, 58)";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is disabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="Text-utils"
        about="about us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}/>
        </Routes>
      </div>
       </BrowserRouter>
    </>
  );
}

export default App;
