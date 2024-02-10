import React, { useState } from 'react'
import './App.css';
import FoodNav from './FoodNav/FoodNav';
import Food from './Food/Food';
import foodApi from './Food/apiFood';
const unidList = [... new Set (foodApi.map((e) => e.headOne)),'ALL'];
function App() {
  const [food,updFood] = useState(foodApi);
    const [list,updList] = useState(unidList);
   const filtFood = (categ) => {
    if(categ == 'ALL'){
     return  updFood(foodApi);
    }
      const filtList = foodApi.filter((e) => {
        return e.headOne === categ;
    })
    updFood(filtList);
   }
  return (
   <>
    <FoodNav filtFunc={filtFood} filtList={list} />
   <Food menu={food}/>
   </>
  );
}

export default App;
