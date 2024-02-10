import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let myHour=new Date().getHours();
  let myMin=new Date().getMinutes();
  let mySec = new Date().getSeconds();
  let myDate = myHour + ":" + myMin + ":" + mySec;
  const [times,updateTime] = useState(myDate);
  let amPm = "AM";
  amPm = new Date().getHours() > 12 ? "PM" : "AM";
  function currDate(){
    let myHourC=new Date().getHours();
  let myMinC=new Date().getMinutes();
  let mySecC = new Date().getSeconds();
  myHourC = myHourC > 12 ? myHourC-12 : myHourC;
  myHourC = myHourC < 10 ? "0" + myHourC : myHourC;
  myMinC = myMinC < 10 ? "0" + myMinC : myMinC;
  mySecC = mySecC < 10 ? "0" + mySecC : mySecC;
    let currTime = myHourC + ":" + myMinC + ":" + mySecC;
    updateTime(currTime);
  };
  setInterval(currDate,1000);
  
  return (
    <>
      <h1>Digital Clock</h1>
  <div className="box">
    <p>{times} <span>| {amPm}</span></p>
  </div>
    </>
  );
}

export default App;
