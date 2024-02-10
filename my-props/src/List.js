import React from 'react';
function Cards({head,para}){
    return(
        <div className="box">
            <h1>{head}</h1>
            <p>{para}</p>
        </div>
    );
}
function List(){
    return(
      <>
          <Cards head="Heading One" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde."/>
        <Cards head="Heading Two" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde."/>
        <Cards head="Heading Three" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde."/>
      </>
    );
}
// function Cards({children}){
//     return(
//         <div className="box">
//         {children}
//         </div>
//     );
// }
//  function List() {
//   return (
//     <>
//     <Cards>
//         <h1>Heading One</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde.</p>
//     </Cards>
//     <Cards>
//         <h1>Heading Two</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde.</p>
//     </Cards>
//     <Cards>
//         <h1>Heading Three</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium modi atque natus provident rem sequi laborum officiis est unde.</p>
//     </Cards>
//     </>
//   )
// };
export {List};

