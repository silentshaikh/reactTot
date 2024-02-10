import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [forms, updateValue] = useState({
    fname:"",
    pass:"",
    number:"",
  });
  const inputType = (e) => {
    let {name,value} = e.target;
    updateValue((prevValue) => {
      return{
        ...prevValue,
        [name]:value,
      };
    //  if(inputName === "fname"){
    //     return({
    //       fname : inputValue,
    //       pass : prevValue.pass,
    //       number : prevValue.number,
    //     });
    // }else if(inputName === "pass"){
    //     return({
    //       fname: prevValue.fname,
    //        pass: inputValue,
    //       number : prevValue.number,
    //     });
    // }else if(inputName === "number"){
    //     return({
    //       fname: prevValue.fname,
    //       pass : prevValue.pass,
    //       number : inputValue,
    //     });
    // }
    })
  }
  const clickToUpdate = (e) => {
    e.preventDefault();
    alert("Submit");
  };
  return (
    <>
      <h1>{forms.fname} {forms.pass}</h1>
      <h3>Phone Number : {forms.number} </h3>
        <form className="box" action="" onSubmit={clickToUpdate}>
          <input type="text" name="fname" id="" required="required" onChange={inputType} value={forms.fname} placeholder='Name Here...' />
          <input type="text" name="pass" id="" required="required" onChange={inputType}  value={forms.pass} placeholder='Password Here...' />
           <input type="number" name="number" id="" required="required" onChange={inputType}  value={forms.number} placeholder='Password Here...' /> 
          <button type='submit'>Submit</button>
        </form>
    </>
  );
}
export default App;
