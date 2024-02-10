import React from 'react'
import firstImage from '../freshly-baked-pancakes-with-blueberries-syrup-generated-by-ai_188544-11624.avif';
import foodApi from './apiFood';
function Food({menu}) {
  return (
    <div className="foodCot">
        {menu.map((element,index) => {
            return(
                <div className="foodCard" key={index}>
            <h5>{element.headOne}</h5>
            <h1>{element.headTwo}</h1>
            <p>{element.para}</p>
            <img src={element.img} alt="food" />
            <button>Order Now</button>
        </div>
            );
        })}
    </div>
  )
}

export default Food
