import React from 'react';
import { useState } from 'react';

export default function Chaleng() {
    let myDate = new Date().toLocaleTimeString();
    const [d,timeUpdate] = useState(myDate);
    function onUpdateHandler() {
        let newDate = new Date().toLocaleTimeString();
     timeUpdate(newDate);
    }
  return (
    <div>
      <h1>Hook's Challenge 01</h1>
      <p>{d}</p>
      <button onClick={onUpdateHandler}>Click</button>
    </div>
  )
}
