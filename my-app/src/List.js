import React from "react";
let arr = ["Cricket","Foot Ball","Hockey","Base Ball","Tennis","Basket Ball"]
let arrMap = arr.map((element) => {
    return <li>{element}</li>;
});
function List(){
    return arrMap;
}
function Text(){
    return <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis laborum saepe nihil enim delectus impedit amet non vel quasi accusantium. Maxime natus, illo eligendi officia iure ex quae vero eaque consequatur, iusto expedita mollitia, consectetur sequi quisquam sint quam! Laudantium eos et quos excepturi atque.</p>;
}
export {List,Text};