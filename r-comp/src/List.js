import React from "react";
import {Item,Para} from "./Item";
function List(){
    return (
        <>
            <ol className="list"><Item/></ol>
        <div className="box"><Para/></div>
        </>
    );
}
export default List;