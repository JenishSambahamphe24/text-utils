import React, {useState} from 'react'
export default function Textform(props) {
  const [text,setText]=useState('')
  function upperCase(){
  setText(text.toUpperCase());
  props.showAlert("Converted to uppercase","success")
  }
  function handleOnChange(event){
  setText(event.target.value)
  }
  function lowercase(){
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase","success")
  }
  function clearField(){
  setText('');
  props.showAlert("Text cleared","success")
  }
  function firstCharCap(){
    let firstChar = text.charAt(0); //
    let newText   = firstChar.toUpperCase() 
    setText(newText+text.slice(1)); 
  }

  return (
    <>
<div className="mb-3">
  <label htmlFor="myBox" className={`form-label my-3 text-${props.mode==='dark'?'light':'dark'}`}><h3>{props.heading}</h3></label>
  <textarea className='form-control' style={{backgroundColor:props.mode==='light'?"white":"rgb(74, 67, 105)",color:props.mode==="light"?"black":"white"}} id="myBox" rows="8" value={text} onChange={handleOnChange}/>
  <div className='my-2'>  
  <button type="button" className="btn btn-outline-secondary"  onClick={upperCase}>Change To Uppercase</button>
  <button type="button" className="btn btn-outline-secondary mx-2"  onClick={lowercase}>Change To Lowercase</button>
  <button type="button" className="btn btn-outline-secondary mx-2"  onClick={clearField}>Clear The Textfield</button>
  <button type="button" className="btn btn-outline-secondary mx-2"  onClick={firstCharCap}>Capitalize First Character</button>
  </div>
  <div className={`my-3 text-${props.mode==='dark'?'light':'dark'}`}>
    <h3 >Your Text Summary</h3>
    <p>{text.split(" ").length} Words {text.length} Characters</p>
  </div>
</div> 
</> )
}
