import React, { useState, useRef } from 'react'
import { createPortal } from 'react-dom';
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {

  const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState(input);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleButtonClick = (e) => {
    setInputValue(input);
    setInput("");
  }


  return (

    <div id="main">
      <input id="input" value={input} onChange={handleInputChange}></input><br />
      {createPortal(<PortalButton buttonclick={handleButtonClick} />, document.getElementById("portal-button"))}

      {createPortal(<PortalTextArea value={inputValue} />, document.getElementById("portal-textarea"))}
    </div>
  )
}


export default App;
