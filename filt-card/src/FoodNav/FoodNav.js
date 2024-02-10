import React from 'react';
function FoodNav({filtFunc,filtList}) {
    
  return (
    <header className='food-header'>
    <nav className='navbar'>
        {filtList.map((e,i) => {
            return (<li key={i} onClick={() => filtFunc(e)}>{e}</li>);
        })}
    </nav>
</header>
  )
}

export default FoodNav
