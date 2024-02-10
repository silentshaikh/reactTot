import logo from './logo.svg';
import './App.css';
import React from 'react';
import  { List } from './List'

//  function Card({head,arr,obj,size=100}) {
//   return(
//     <div className='card'>
//       <h1>{head}</h1>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam unde nemo sed soluta saepe suscipit magnam, quis natus minima facere ullam, ratione repudiandae consequatur aspernatur. Dolore, repudiandae odit dolor consectetur iure dolorum perspiciatis, omnis amet beatae, voluptas officia ipsam laboriosam vero magni accusantium explicabo assumenda.</p>
//       <p>{arr.join(" - ")}</p>
//       <p>{`My Name is ${obj.name}`}</p>
//       <p>{size}</p>
//     </div>
//   );
// }


function App(){
  return(
    <>
      {/* <Card head ="Heading 1" size={20} arr={["Comedy","Fantasy"]} obj={{name:"Abdul Moiz",course:"AI",}}/>
      <Card head = "Heading 2" arr={["Comedy","Fantasy"]} obj={{name:"Ben",course:"AI",}}/>
      <Card head ="Heading 3" arr={["Comedy","Fantasy"]} obj={{name:"Harry",course:"AI",}}/> */}
      <List/>
    </>
  );
}

export default App;
