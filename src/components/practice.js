import React,{useState} from "react";

export default function Practice() {
    const[currStyle,changeStyle]=useState({})
   function changeColor(){
  changeStyle({color:'white',backgroundColor:"red"})
  }
  return (
    <>
      <div className="list">
        <ul className="list-group my-2">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item" style={currStyle}>A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div>
        <button className="btn btn-outline-danger" onClick={changeColor}>Add list item</button>
      </div>
    </>
  );
}
