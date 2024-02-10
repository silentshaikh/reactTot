import React from "react";
let listArr = ["Apple","Mango","Orange","Guava","Pineapple"];
let listMap = listArr.map(element => {
    return <li>{element}</li>;
})
function Item(){
    return listMap;
}
function Para(){
    return (
       <>
         <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolore quaerat omnis harum quia placeat aliquid autem, in, magni veniam possimus ullam, quibusdam delectus pariatur necessitatibus perferendis reiciendis cupiditate temporibus voluptate maiores! Quasi reiciendis vel praesentium sint repudiandae tempore ut odio, a, sapiente rem numquam.</p>
       </>);
}
function Form(){
    return(
        <>
            <label htmlFor="">User Name</label>
            <input type="text" name="" id="" placeholder="Enter Your Name" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder="Enter Your Password" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Query"></textarea>
        </>
    );
}
export {Item,Para,Form};