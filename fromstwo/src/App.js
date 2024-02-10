import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// onChange={inputTypeOne}
// onChange={inputTypeTwo}
function App() {
  const [inpValue,updateInput] = useState("");
  const [inpValueOne,updateInputOne] = useState("");
  const [inpValueTwo,updateInputTwo] = useState("");
  const [name,updateClickOne] = useState();
  const [nameTwo,updateClickTwo] = useState();
  const [nameThree,updateClickThree] = useState();
  const inputType = (e) => {
    updateInput(e.target.value)
  }
  const inputTypeOne = (e) => {
    updateInputOne(e.target.value);
  }
  const inputTypeTwo = (e) => {
updateInputTwo(e.target.value);
  }
  const clickSubmit = (e) => {
    e.preventDefault();
    updateClickOne(inpValue);
    updateClickTwo(inpValueOne);
    updateClickThree(inpValueTwo);
  }

  return (
   <>
   <div className="output">
    <p><strong>User Name : </strong>{name}</p>
    <p><strong>User Email : </strong>{nameTwo}</p>
    <p><strong>User Password : </strong>{nameThree}</p>
   </div>
    <form className="box" action="">
      <label htmlFor="">User Name</label>
      <input type="text" onChange={inputType} value={inpValue} placeholder='Enter Your Name' />
      <label htmlFor="">Email</label>
      <input type="email" onChange={inputTypeOne} value={inpValueOne} placeholder='Enter Your Email'/>
      <label htmlFor="">Password</label>
      <input type="password" onChange={inputTypeTwo} value={inpValueTwo} placeholder='Enter Your Password'/>
      <label htmlFor="">Message</label>
      <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Query'></textarea>
      <button onClick={clickSubmit}>Submit</button>
    </form>
   </>
  );
}

export default App;
