import React, { useState } from 'react';
import './App.css';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import { Tooltip } from 'antd';
function App() {
  const [myInc, updateInc] = useState(0);
  const onInc = () => {
    updateInc((prevValue) => prevValue+1);
  }
    const onDec = () => {
     if(myInc == 0){
      alert("Only Greater Than Zero");
     }else{
      updateInc((prevValue) => prevValue-1);
     }
    }
    return (
   <>
    <div className="box">
      <h1>{myInc}</h1>
      <div className="btn">
        <Tooltip title="Increment" color='#55E6C1' key='#55E6C1'>
        <AiOutlinePlus className='butn' onClick={onInc} />
        </Tooltip>
        <Tooltip title="Decrement" color='#ff4757' key='#ff4757'>
        <RiDeleteBin6Fill className='butn2' onClick={onDec} />
        </Tooltip>
      </div>
    </div>
   </>
  );
}
export default App;