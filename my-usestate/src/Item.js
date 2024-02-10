import React from 'react'
import {useState} from 'react'


export default function Item() {
    let arr = [];
    const [items,update] = useState(arr);
    function onAddHandler(){
    // console.log(items);
    update(["Apple","Banana","Pineapple"].join("-"));
    }
  return (
    <div>
    <p>{items}</p>
      <button onClick={onAddHandler}>Add</button>
    </div>
  )
}
