import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Item from './Item';
import Chaleng from './Chaleng';
// let arr = ["Apple","Banana","Orange"];
function Inc(){
  const [item,updateItem] = useState(0);
  function onIncHandler(){
    // console.log("click");
    // console.log(item)
    updateItem(item+1);
  }
  function onDecHandler(){
    if(item==0){
      alert("Only Greater than Zero")
    }else{
      updateItem(item-1)
    }
  }
  return(
    <>
      <div className="box">
      <p>{item} </p>
      <button onClick={onIncHandler}>Increment</button>
      <button onClick={onDecHandler}>Decrement</button>
    </div>
    <Item/>
    <Chaleng/>
    </>
  );
}
function App() {
  return (
  <>
     <h1>Hello World!</h1>
   <Inc/>
  </>
  );
}

export default App;
